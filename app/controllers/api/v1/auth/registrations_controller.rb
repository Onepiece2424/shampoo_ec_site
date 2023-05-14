class Api::V1::Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController

  # 新規登録①
  # def create
  #   super do |resource|
  #     if resource.persisted?
  #       create_token_info_for(resource)
  #     end
  #   end
  # end

  # private

  # def sign_up_params
  #   params.permit(:email, :password, :password_confirmation, :name)
  # end

  # def create_token_info_for(resource)
  #   token = resource.create_new_auth_token
  #   resource.save
  #   response.set_header('access-token', token['access-token'])
  #   response.set_header('client', token['client'])
  # end

  # 新規登録②
  after_action :set_token_info, only: [:create]

  private

  def sign_up_params
    params.permit(:email, :password, :password_confirmation, :name)
  end

  def set_token_info
    return unless @resource.persisted?

    token = @resource.create_new_auth_token
    response.set_header('access-token', token['access-token'])
    response.set_header('client', token['client'])
  end
end
