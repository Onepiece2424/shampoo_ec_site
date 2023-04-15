class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :total_price
      t.integer :payment
      t.string :order_name
      t.string :order_address
      t.date :delivery_date
      t.time :delivery_time

      t.timestamps
    end
  end
end
