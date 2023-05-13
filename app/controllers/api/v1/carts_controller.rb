module Api
  module V1
    class CartsController < ApplicationController
      # before_action :authenticate_api_v1_user!

      def create
      end

      private

      def cart_params
        params.require(:cart)
      end
    end
  end
end
