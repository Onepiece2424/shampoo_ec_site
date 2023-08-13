class Api::V1::HomeController < ApplicationController
  before_action :authenticate_api_v1_user!
  def index
    data = {user: current_api_v1_user, word: 'OKだよ'}
    render json: data
  end
end
