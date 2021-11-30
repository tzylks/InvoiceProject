class CreateInvoice2s < ActiveRecord::Migration[6.1]
  def change
    create_table :invoice2s do |t|
      t.string :timein
      t.string :timeout
      t.integer :totalhours
      t.string :memo

      t.timestamps
    end
  end
end
