class OrderAddress < ApplicationRecord
  belongs_to :order

  class << self
    def create_order_address(session, session_with_expand, order)
      OrderAddress.create!({
        post_code: session_with_expand.shipping_details.address.postal_code,
        prefecture: session_with_expand.shipping_details.address.state,
        address_line1: session_with_expand.shipping_details.address.line1,
        address_line2: session_with_expand.shipping_details.address.line2,
        address_line3: "",
        recipient_name: session.shipping_details.name,
        recipient_phone: 9_012_345_678,
        order_id: order.id
      })
    end
  end
end
