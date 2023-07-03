class User < ApplicationRecord
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable, :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_one :cart, dependent: :destroy
  has_many :orders, dependent: :destroy

  composed_of :profile,
              mapping: [%w[name name], %w[email email]],
              converter: ->(name, email) { Profile.new(name, email) }
end
