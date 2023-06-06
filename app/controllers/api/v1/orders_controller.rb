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
        user_id = current_api_v1_user.id
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

        # お届け予定日のデータの型の変更
        date_string = params[:appointed_delivery_date]
        date = Date.parse(date_string)

        # 支払い方法を数値に変換
        payment = params[:how_to_payment].to_i

        orders = Order.create(user_id: user_id, total_price: total, payment: payment, delivery_date: date, delivery_time: params[:appointed_delivery_time])

        render json: { orders: orders }, status: :ok
      end

      private

      def orders_params
        params.require(:order).permit(:total_price, :payment, :delivery_date, :delivery_time)
      end
    end
  end
end
