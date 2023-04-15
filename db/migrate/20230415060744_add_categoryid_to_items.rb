class AddCategoryidToItems < ActiveRecord::Migration[6.1]
  def change
    add_column :items, :category_id, :integer, foreign_key: true
  end
end
