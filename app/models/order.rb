class Order < ApplicationRecord
  belongs_to :user
  has_one :order_address, dependent: :destroy

  enum payment: { クレジット: 0, 代引き: 1 }
  enum delivery_time: { 午前中: 0, '12:00 - 14:00': 1, '14:00 - 16:00': 2, '16:00 - 18:00': 3, '18:00 - 20:00': 4 }

  scope :higher_total_price, -> { where('total_price > ?', 1000) } # total_priceが1000円以上の注文のみ抽出
end
