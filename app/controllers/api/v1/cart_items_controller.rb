class Api::V1::CartItemsController < ApplicationController
  before_action :authenticate_api_v1_user!

  def index
    current_user = current_api_v1_user
    cart = current_user.cart
    cart_items = current_api_v1_user.cart.cart_items.not_order_confirm
    render json: { cart_items: cart_items }, status: :ok
  end
end
