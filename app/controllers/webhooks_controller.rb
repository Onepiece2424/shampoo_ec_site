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
        order = Order.create_order(session)
        session_with_expand = Stripe::Checkout::Session.retrieve({ id: session.id, expand: ['line_items'] })
        OrderAddress.create_order_address(session, session_with_expand, order)
        CartItem.invalidate_cart_items(cart_items)
      end

      render json: { session: session }, status: :ok
    end
  end
end
