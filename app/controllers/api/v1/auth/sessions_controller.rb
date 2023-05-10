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
      render json: user, status: :ok
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end
end
