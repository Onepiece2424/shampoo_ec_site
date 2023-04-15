module Api
  module V1
    class ItemsController < ApplicationController
      def index
        items = Item.all
        render json: { item: items }, status: :ok
      end
    end
  end
end
