class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :title  
      t.string :labels, array: true, default: [], nil: false 
      t.datetime :due_date
      t.integer :list_id
      t.text :description
      t.boolean :archived
      t.boolean :completed

      t.timestamps
    end
  end
end
