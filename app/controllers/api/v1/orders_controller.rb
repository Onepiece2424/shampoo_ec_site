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
        user_id = user.id
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

        # 商品の合計金額の計算
        total = cart_items.sum { |cart_item| cart_item.quantity * cart_item.item.price }

        # 日付と支払い方法のデータの型の変更
        date = Date.parse(params[:appointed_delivery_date])
        payment = params[:how_to_payment].to_i

        # 注文(Order)データの作成
        orders = Order.create(
          user_id: user_id,
          total_price: total,
          payment: payment,
          delivery_date: date,
          delivery_time: params[:appointed_delivery_time]
        )

        render json: { orders: orders }, status: :ok
      end


      private

      def orders_params
        params.require(:order).permit(:total_price, :payment, :delivery_date, :delivery_time)
      end
    end
  end
end
