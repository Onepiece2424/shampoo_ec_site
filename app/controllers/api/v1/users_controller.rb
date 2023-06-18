module Api
  module V1
    class UsersController < ApplicationController
      before_action :authenticate_api_v1_user!

      def index
        users = User.all
        render json: { users: users }, status: :ok
      end

      # ログインユーザーデータの取得
      def fetch_userdata
        token = params["access-token"]
        client = params[:client]
        uid = params[:uid]

        @current_user = User.find_by(uid: uid)
        if @current_user && @current_user.valid_token?(token, client)
          render json: { data: @current_user }, status: :ok
        else
          render json: { errors: "ログインしていません" }, status: :unauthorized
        end
      end

      # ログアウト
      def logout
        user = current_api_v1_user
        uid = params[:uid]
        client = params[:client]

        if (uid && client).present? && user.present? && user.tokens.present?
          user.tokens = {}
          user.save!
          render json: { success: true }
        else
          render json: { success: false }, status: :unauthorized
        end
      end
    end
  end
end
