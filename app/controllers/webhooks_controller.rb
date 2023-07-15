class WebhooksController < ApplicationController
  protect_from_forgery except: :webhook

  def create
    payload = request.body.read
    sig_header = request.env['HTTP_STRIPE_SIGNATURE']
    endpoint_secret = Rails.application.credentials.dig(:stripe, :endpoint_secret)
    event = nil
    begin
      event = Stripe::Webhook.construct_event(
        payload, sig_header, endpoint_secret
      )
    rescue JSON::ParserError, Stripe::SignatureVerificationError => e
      Rails.logger.debug e
      status 400
      return
    end
    case event.type
    when 'checkout.session.completed'
      session = event.data.object
      user = User.find(session.client_reference_id)
      cart_items = user.cart.cart_items.not_order_confirm
      return unless user

      ApplicationRecord.transaction do
        order = create_order(session)
        session_with_expand = Stripe::Checkout::Session.retrieve({ id: session.id, expand: ['line_items'] })
        create_order_address(session, session_with_expand, order)
        CartItem.invalidate_cart_items(cart_items)
      end

      render json: { session: session }, status: :ok
    end
  end

  private

  def create_order(session)
    Order.create!({
      user_id: session.client_reference_id,
      total_price: session.amount_total,
      payment: 0,
      delivery_date: Time.zone.today + 1.day,
      delivery_time: 0
    })
  end

  def create_order_address(session, session_with_expand, order)
    OrderAddress.create!({
      post_code: session_with_expand.shipping_details.address.postal_code,
      prefecture: session_with_expand.shipping_details.address.state,
      address_line1: session_with_expand.shipping_details.address.line1,
      address_line2: session_with_expand.shipping_details.address.line2,
      address_line3: "",
      recipient_name: session.shipping_details.name,
      recipient_phone: 9_012_345_678,
      order_id: order.id
    })
  end
end
