users = [
  [1, "たけし", "aaa@gmail.com", "aaaaaa", "東京都北区1丁目◯番地", "080-1234-5678", Date.new(2023, 4, 30), "男"],
  [2, "さおり", "bbb@gmail.com", "bbbbbb", "東京都北区1丁目◯番地", "080-1234-5678", Date.new(2023, 4, 30), "女"],
  [3, "たろう", "ccc@gmail.com", "cccccc", "東京都北区1丁目◯番地", "080-1234-5678", Date.new(2023, 4, 30), "ゴリラ"]
]

users.each do |id, name, email, password_digest, address, phone_number, birthday, gender|
  User.create(id: id, name: name, email: email, password_digest: password_digest, address: address, phone_number: phone_number, birthday: birthday, gender: gender)
end

orders = [
  [1, 200, 0, "田中さとし", "東京都北区1丁目◯番地", Date.new(2023, 4, 30), Time.now],
  [2, 230, 1, "パンナコッタ・フーゴ", "東京都北区2丁目◯番地", Date.new(2023, 3, 15), Time.now],
  [3, 220, 2, "ピカチュウ", "東京都北区3丁目◯番地", Date.new(2013, 2, 19), Time.now]
]

orders.each do |user_id, total_price, payment, order_name, order_address, delivery_date, delivery_time|
  Order.create(user_id: user_id, total_price: total_price, payment: payment, order_name: order_name, order_address: order_address, delivery_date: delivery_date, delivery_time: delivery_time)
end
