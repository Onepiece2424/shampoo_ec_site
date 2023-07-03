class Item < ApplicationRecord
  has_many :cart_items
  has_many :carts, through: :cart_items

  composed_of :profile,
              mapping: [%w[name name], %w[email email]],
              converter: ->(name, email) { Profile.new(name, email) }
end
