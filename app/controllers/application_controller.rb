class ApplicationController < ActionController::API
  protect_from_forgery with: :null_session
  include DeviseTokenAuth::Concerns::SetUserByToken

  skip_before_action :verify_authenticity_token
  helper_method :current_user, :user_signed_in?
end
