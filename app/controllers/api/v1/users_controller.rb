module Api
  module V1
    class UsersController < ApplicationController
      def index
        users = User.all
        render json: { users: users }, status: :ok
      end

      # ログインユーザーデータの取得
      def fetch_userdata
        token = params[:token]
        client = params[:client]
        uid = params[:uid]

        @current_user = User.find_by(uid: uid)
        if @current_user && @current_user.valid_token?(token, client)
          render json: { users: @current_user }, status: :ok
        else
          render json: { errors: "ログインしていません" }, status: :unauthorized
        end
      end

      # def register_token
      #   user = User.find(params[:data]["data"]["id"])
      #   token = params[:headers]["access-token"]
      #   client = params[:headers]["client"]
      #   uid = params[:headers]["uid"]
      # end
    end
  end
end
