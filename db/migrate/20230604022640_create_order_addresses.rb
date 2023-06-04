class CreateOrderAddresses < ActiveRecord::Migration[6.1]
  def change
    create_table :order_addresses do |t|
      t.integer :post_code
      t.string :prefecture
      t.string :address_line1
      t.string :address_line2
      t.string :address_line3
      t.string :recipient_name
      t.integer :recipient_phone
      t.references :order, null: false, foreign_key: true

      t.timestamps
    end
  end
end
