module Api
  module V1
    class CartsController < ApplicationController
      before_action :authenticate_api_v1_user!

      def create
        render json: { users: current_api_v1_user }, status: :ok
      end

      private

      def cart_params
        params.require(:cart)
      end
    end
  end
end
