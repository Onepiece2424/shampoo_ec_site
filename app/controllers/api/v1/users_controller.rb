module Api
  module V1
    class UsersController < ApplicationController
      def index
        @user = User.where(uid: params[:headers][:uid])
        if @user.present?
          render json: { data: @user }, status: :ok
        else
          render json: { errors: "ログインしていません" }, status: :unauthorized
        end
      end

      def show
        @user = User.find(params[:id])
        render json: { data: @user }, status: :ok
      end
    end
  end
end
