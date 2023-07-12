class User < ApplicationRecord
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable, :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_one :cart, dependent: :destroy
  has_many :orders, dependent: :destroy

  composed_of :profile,
              mapping: [%w[name name], %w[email email]],
              converter: ->(name, email) { Profile.new(name, email) }

  def line_items_checkout
    cart.cart_items.not_order_confirm.map do |cart_item|
      {
        quantity: cart_item.quantity,
        price_data: {
          currency: 'jpy',
          unit_amount: cart_item.item.price,
          product_data: {
            name: cart_item.item.name,
            metadata: {
              product_id: cart_item.item_id
            }
          }
        }
      }
    end
  end
end
