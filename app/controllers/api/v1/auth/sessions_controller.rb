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
    # ①ログインユーザー取得後、トークン情報の削除
    # current_api_v1_user.tokens = {}
    # current_api_v1_user.save!
    # render json: { message: 'ログアウトしました。' }, status: :ok


    # ②ヘッダー情報からユーザー情報を取得後、トークン情報を削除
    # 認証情報を含むヘッダーからトークン情報を取得
    client_id = request.headers['client']
    uid = request.headers['uid']
    access_token = request.headers['access-token']

    # トークン情報を使用してユーザーを特定し、トークンを無効化する
    user = User.find_by_uid(uid)
    user.tokens.delete(client_id) if user

    if user&.save
      render json: { message: 'ログアウトしました。' }
    else
      render json: { errors: ['ログアウトに失敗しました。'] }, status: :unprocessable_entity
    end
  end
end
