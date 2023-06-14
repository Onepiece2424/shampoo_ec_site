class AddInvalidatedToCartItems < ActiveRecord::Migration[6.1]
  def change
    add_column :cart_items, :invalidated_at, :time
  end
end
