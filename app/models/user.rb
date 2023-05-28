class User < ApplicationRecord
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable, :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_one :cart, dependent: :destroy
  has_many :orders, dependent: :destroy
end
