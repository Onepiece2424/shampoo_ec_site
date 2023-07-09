class OrderAddress < ApplicationRecord
  belongs_to :order

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
end
