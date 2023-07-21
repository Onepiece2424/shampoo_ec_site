class CartItem < ApplicationRecord
  belongs_to :cart
  has_one :user, through: :cart
  belongs_to :item

  scope :not_order_confirm, -> { where(invalidated_at: nil) }

  class << self
    def calculate_total_price(cart_items)
      cart_items.sum { |cart_item| cart_item.quantity * cart_item.item.price }
    end

    def invalidate_cart_items(cart_items)
      cart_items.each do |cart_item|
        cart_item.update(invalidated_at: Time.zone.now)
      end
    end
  end
end
