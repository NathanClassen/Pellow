class CreateCardActions < ActiveRecord::Migration[5.1]
  def change
    create_table :card_actions do |t|
      t.string :description
      t.integer :card_id
      
      t.timestamps
    end
  end
end
