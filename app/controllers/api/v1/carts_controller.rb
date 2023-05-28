module Api
  module V1
    class CartsController < ApplicationController
      before_action :authenticate_api_v1_user!

      def index
        cart_items = current_api_v1_user.cart.cart_items

        # 商品データ（商品名、金額、説明）
        items_data = cart_items.map do |cart_item|
          {
            id: cart_item.item.id,
            item_name: cart_item.item.name,
            quantity: cart_item.quantity,
            price: cart_item.item.price,
            description: cart_item.item.description
          }
        end

        # 商品合計金額
        total = 0
        cart_items.each do |cart_item|
          total += cart_item.quantity * cart_item.item.price
        end
        total

        render json: { items: items_data, total: total }, status: :ok
      end

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
