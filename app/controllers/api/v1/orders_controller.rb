module Api
  module V1
    class OrdersController < ApplicationController
      before_action :authenticate_api_v1_user!

      def index
        orders = Order.all
        render json: { orders: orders }, status: :ok
      end

      def create
        user = current_api_v1_user
        cart_items = user.cart.cart_items

        items_data = cart_items.map do |cart_item|
          {
            id: cart_item.item.id,
            item_name: cart_item.item.name,
            quantity: cart_item.quantity,
            price: cart_item.item.price,
            description: cart_item.item.description
          }
        end

        total = Order.calculate_total_price(cart_items)
        order = Order.create_order(user.id, total, params)
        order_address = Order.create_order_address(order.id, params)
        Order.invalidate_cart_items(cart_items)

        render json: { orders: order }, status: :ok
      end

      private

      def orders_params
        params.require(:order).permit(:total_price, :payment, :delivery_date, :delivery_time)
      end
    end
  end
end
