class Api::V1::CheckoutsController < ApplicationController
  before_action :authenticate_api_v1_user!

  def create
    line_items = current_api_v1_user.line_items_checkout
    session = create_session(line_items)
    render json: { session: session }, status: :ok
  end

  private

  def create_session(line_items)
    Stripe::Checkout::Session.create(
      client_reference_id: current_api_v1_user.id,
      customer_email: current_api_v1_user.email,
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: line_items,
      shipping_address_collection: {
        allowed_countries: ['JP']
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 500,
              currency: 'jpy'
            },
            display_name: 'Single rate'
          }
        }
      ],
      success_url: 'https://example.com/success',
      cancel_url: "https://example.com/cancel"
    )
  end
end
