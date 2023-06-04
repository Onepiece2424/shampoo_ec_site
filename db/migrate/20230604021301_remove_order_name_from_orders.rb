class RemoveOrderNameFromOrders < ActiveRecord::Migration[6.1]
  def change
    remove_column :orders, :order_name, :string
    remove_column :orders, :order_address, :string
  end
end
