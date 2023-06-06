class Order < ApplicationRecord
  belongs_to :user

  enum payment: { クレジット: 0, 代引き: 1 }
  enum delivery_time: { 午前中: 0, "12:00 - 14:00": 1, "14:00 - 16:00": 2, "16:00 - 18:00": 3, "18:00 - 20:00": 4 }
end
