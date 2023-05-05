class Api::V1::Auth::SessionsController < DeviseTokenAuth::SessionsController
  def index
    if current_api_v1_user
      render json: { is_login: true, data: current_api_v1_user }
    else
      render json: { is_login: false, message: "ユーザーが存在しません" }
    end
  end

  def create
    # パラメータからメールアドレスとパスワードを取得
    email = params[:email]
    password = params[:password]

    # ユーザーを認証して、トークンを発行
    resource = User.find_for_database_authentication(email: email)
    return render json: { errors: ['メールアドレスまたはパスワードが間違っています'] }, status: :unauthorized unless resource

    valid_password = resource.valid_password?(password)
    return render json: { errors: ['メールアドレスまたはパスワードが間違っています'] }, status: :unauthorized unless valid_password

    token = resource.create_new_auth_token
    response.set_header('access-token', token['access-token'])
    response.set_header('client', token['client'])
    response.set_header('expiry', token['expiry'])
    response.set_header('uid', token['uid'])

    render json: { success: true, data: resource.as_json }
  end
end
