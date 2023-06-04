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

        render json: { user: user }, status: :ok
      end
    end
  end
end
