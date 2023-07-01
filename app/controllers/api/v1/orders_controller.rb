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

        total = calculate_total_price(cart_items)

        orders = create_order(user.id, total, params)

        order_address = create_order_address(orders.id, params)

        # CartItemを論理削除
        cart_items.update_all(invalidated_at: Time.zone.now)

        render json: { orders: orders }, status: :ok
      end

      private

      def calculate_total_price(cart_items)
        cart_items.sum { |cart_item| cart_item.quantity * cart_item.item.price }
      end

      def create_order(user_id, total, params)
        Order.create(
          user_id: user_id,
          total_price: total,
          payment: params[:how_to_payment].to_i,
          delivery_date: Date.parse(params[:appointed_delivery_date]),
          delivery_time: params[:appointed_delivery_time]
        )
      end

      def create_order_address(order_id, params)
        OrderAddress.create(
          order_id: order_id,
          recipient_name: params[:receiver_name],
          recipient_phone: params[:phone_number],
          post_code: params[:post_code],
          prefecture: params[:prefectures],
          address_line1: params[:municipality],
          address_line2: params[:street_number],
          address_line3: params[:building_name]
        )
      end

      private

      def orders_params
        params.require(:order).permit(:total_price, :payment, :delivery_date, :delivery_time)
      end
    end
  end
end
