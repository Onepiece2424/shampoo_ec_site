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
    client_id = request.headers['client']
    uid = request.headers['uid']
    request.headers['access-token']

    # トークン情報を使用してユーザーを特定し、トークンを無効化する
    user = User.find_by(uid: uid)
    user&.tokens&.delete(client_id)

    if user&.save
      render json: { message: 'ログアウトしました。' }
    else
      render json: { errors: ['ログアウトに失敗しました。'] }, status: :unprocessable_entity
    end
  end
end
