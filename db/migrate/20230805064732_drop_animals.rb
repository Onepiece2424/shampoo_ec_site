class DropAnimals < ActiveRecord::Migration[6.1]
  def change
    drop_table :animals
    drop_table :dogs
    drop_table :cats
  end
end
