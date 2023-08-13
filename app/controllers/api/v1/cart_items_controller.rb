class Api::V1::CartItemsController < ApplicationController
  # before_action :authenticate_api_v1_user!

  def index
    current_user = User.find(params[:userData]["0"][:id])
    cart = current_user.cart
    if cart.present?
      cart_items = current_user.cart.cart_items.not_order_confirm
      render json: { cart_items: cart_items }, status: :ok
    else
      render json: { errors: "ログインしていません" }, status: :unauthorized
    end
  end
end
