class Api::V1::Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController
  include ActionController::Cookies
  after_action :set_token_info, only: [:create]

  private

  def sign_up_params
    params.permit(:email, :password, :password_confirmation, :name)
  end

  def set_token_info
    token = response.headers["access-token"]
    client = response.headers["client"]
    uid = response.headers["uid"]
  end
end
