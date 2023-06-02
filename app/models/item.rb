class Item < ApplicationRecord
  belongs_to :cart_item, optional: true
end
