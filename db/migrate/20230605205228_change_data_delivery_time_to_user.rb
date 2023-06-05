class ChangeDataDeliveryTimeToUser < ActiveRecord::Migration[6.1]
  def change
    change_column :orders, :delivery_time, :integer
  end
end
