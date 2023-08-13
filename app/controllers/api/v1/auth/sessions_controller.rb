class Api::V1::Auth::SessionsController < DeviseTokenAuth::SessionsController
  def index
    if current_api_v1_user
      render json: { is_login: true, data: current_api_v1_user }
    else
      render json: { is_login: false, message: "ユーザーが存在しません" }
    end
  end

  def create
    user = User.find_by(email: params[:email])
    if user && user.valid_password?(params[:password])

      # トークンを生成
      token = user.create_new_auth_token

      # レスポンスにトークン情報を含める（なくて良い。理由は、下で同じ内容を表側に返しているから）
      # response.headers.merge!(token)

      # トークン情報をJSON形式で返す
      render json: {
        data: user.as_json.merge({
          access_token: token['access-token'],
          client: token['client'],
          uid: token['uid']
        })
      }, status: :ok
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end

  def destroy
    @user = User.where(uid: params[:headers][:uid])
    if @user
      # @user.tokens = {}
      # @user.save!
      render json: { data: @user }, status: :ok
    else
      render json: { success: false }, status: :unauthorized
    end
  end
end
