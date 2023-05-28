module Api
  module V1
    class CartsController < ApplicationController
      before_action :authenticate_api_v1_user!

      def create
        cart = current_api_v1_user.cart || Cart.create(user_id: current_api_v1_user.id)
        item = Item.find_by(name: params[:name])

        if item
          cart_item = CartItem.create(cart_id: cart.id, item_id: item.id, quantity: params[:quantity])
          item.update(stock: item.stock - params[:quantity]) if cart_item.valid?
        end

        render json: { users: current_api_v1_user }, status: :ok
      end


      private

      def cart_params
        params.require(:cart)
      end
    end
  end
end
