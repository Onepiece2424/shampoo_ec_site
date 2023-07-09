class Order < ApplicationRecord
  belongs_to :user
  has_one :order_address, dependent: :destroy

  enum payment: { クレジット: 0, 代引き: 1 }
  enum delivery_time: { 午前中: 0, '12:00 - 14:00': 1, '14:00 - 16:00': 2, '16:00 - 18:00': 3, '18:00 - 20:00': 4 }

  scope :higher_total_price, -> { where('total_price > ?', 1000) } # total_priceが1000円以上の注文のみ抽出

  def self.calculate_total_price(cart_items)
    cart_items.sum { |cart_item| cart_item.quantity * cart_item.item.price }
  end

  def self.create_order(user_id, total, params)
    Order.create(
      user_id: user_id,
      total_price: total,
      payment: params[:how_to_payment].to_i,
      delivery_date: Date.parse(params[:appointed_delivery_date]),
      delivery_time: params[:appointed_delivery_time]
    )
  end

  def self.create_order_address(order_id, params)
    OrderAddress.create(
      order_id: order_id,
      recipient_name: params[:receiver_name],
      recipient_phone: params[:phone_number],
      post_code: params[:post_code],
      prefecture: params[:prefectures],
      address_line1: params[:municipality],
      address_line2: params[:street_number],
      address_line3: params[:building_name]
    )
  end

  def self.invalidate_cart_items(cart_items)
    cart_items.each do |cart_item|
      cart_item.update(invalidated_at: Time.zone.now)
    end
  end
end
