class AddColumnToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :name, :string
    add_column :users, :address, :string
    add_column :users, :phone_number, :integer
    add_column :users, :birthday, :integer
    add_column :users, :gender, :integer
  end
end
