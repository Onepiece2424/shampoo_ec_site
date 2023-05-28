module Api
  module V1
    class CartsController < ApplicationController
      before_action :authenticate_api_v1_user!

      def create
        if current_api_v1_user.cart.present?
          cart_id = current_api_v1_user.cart.id
          item_id = Item.where(name: params[:name]).ids[0]
          CartItem.create({ cart_id: cart_id, item_id: item_id, quantity: params[:quantity] })
          item_stock = Item.find(item_id).stock - params[:quantity]
          Item.find(item_id).update(stock: item_stock)
        else
          Cart.create({ user_id: current_api_v1_user.id })
          cart_id = User.find(current_api_v1_user.id).cart.id
          item_id = Item.where(name: params[:name]).ids[0]
          CartItem.create({ cart_id: cart_id, item_id: item_id, quantity: params[:quantity] })
          item_stock = Item.find(item_id).stock - params[:quantity]
          Item.find(item_id).update(stock: item_stock)
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
