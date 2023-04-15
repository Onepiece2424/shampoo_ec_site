module Api
  module V1
    class ItemsController < ApplicationController
      def index
        items = Item.all
        render json: { items: items }, status: :ok
      end

      def show
        items = Item.find(params[:id])
        render json: { items: items }, status: :ok
      end

      private
      def item_params
        params.require(:item).permit(:name, :description, :price, :stock)
      end
    end
  end
end
