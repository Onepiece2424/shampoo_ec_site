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
    if user&.valid_password?(params[:password])

      # トークンを生成
      token = user.create_new_auth_token

      # トークン情報をJSON形式で返す
      render json: {
        user: user.as_json.merge({
          access_token: token['access-token'],
          client: token['client'],
          uid: token['uid']
        })
      }, status: :ok
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end
end
