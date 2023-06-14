class CartItem < ApplicationRecord
  belongs_to :cart
  belongs_to :item

  scope :not_order_confirm, -> { where(invalidated_at: nil) }
end
