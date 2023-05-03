# User
# users = [
#   ["たけし", "aaa@gmail.com", "aaaaaa", "東京都北区1丁目◯番地", "080-1234-5678", Date.new(2023, 4, 30), "男"],
#   ["さおり", "bbb@gmail.com", "bbbbbb", "東京都北区1丁目◯番地", "080-1234-5678", Date.new(2023, 4, 30), "女"],
#   ["たろう", "ccc@gmail.com", "cccccc", "東京都北区1丁目◯番地", "080-1234-5678", Date.new(2023, 4, 30), "ゴリラ"]
# ]

# users.each do |name, email, password_digest, address, phone_number, birthday, gender|
#   User.create(name: name, email: email, password_digest: password_digest, address: address, phone_number: phone_number, birthday: birthday, gender: gender)
# end

# Item
items = [
  ["シャンプーA", "植物の可能性を追求したBOTANISTだからこそ生まれた新ボディーソープ。従来品の良さはそのままに、保湿性や洗い上がりの肌の状態をより感じてもらえる様、アップデート。", 200, 1000],
  ["シャンプーB", "植物の可能性を追求したBOTANISTだからこそ生まれた新ボディーソープ。従来品の良さはそのままに、保湿性や洗い上がりの肌の状態をより感じてもらえる様、アップデート。", 300, 1000],
  ["シャンプーC", "植物の可能性を追求したBOTANISTだからこそ生まれた新ボディーソープ。従来品の良さはそのままに、保湿性や洗い上がりの肌の状態をより感じてもらえる様、アップデート。", 400, 1000],
  ["シャンプーD", "植物の可能性を追求したBOTANISTだからこそ生まれた新ボディーソープ。従来品の良さはそのままに、保湿性や洗い上がりの肌の状態をより感じてもらえる様、アップデート。", 400, 1000],
  ["シャンプーE", "植物の可能性を追求したBOTANISTだからこそ生まれた新ボディーソープ。従来品の良さはそのままに、保湿性や洗い上がりの肌の状態をより感じてもらえる様、アップデート。", 400, 1000],
  ["シャンプーF", "植物の可能性を追求したBOTANISTだからこそ生まれた新ボディーソープ。従来品の良さはそのままに、保湿性や洗い上がりの肌の状態をより感じてもらえる様、アップデート。", 400, 1000]
]

items.each do |name, description, price, stock|
  Item.create(name: name, description: description, price: price, stock: stock)
end

orders = [
  [1, 200, 0, "田中さとし", "東京都北区1丁目◯番地", Date.new(2023, 4, 30), Time.now],
  [2, 230, 1, "パンナコッタ・フーゴ", "東京都北区2丁目◯番地", Date.new(2023, 3, 15), Time.now],
  [3, 220, 2, "ピカチュウ", "東京都北区3丁目◯番地", Date.new(2013, 2, 19), Time.now]
]

orders.each do |user_id, total_price, payment, order_name, order_address, delivery_date, delivery_time|
  Order.create(user_id: user_id, total_price: total_price, payment: payment, order_name: order_name, order_address: order_address, delivery_date: delivery_date, delivery_time: delivery_time)
end
