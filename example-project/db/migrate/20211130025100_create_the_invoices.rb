class CreateTheInvoices < ActiveRecord::Migration[6.1]
  def change
    create_table :the_invoices do |t|
      t.string :timein
      t.string :timeout
      t.string :totalhours
      t.string :memo

      t.timestamps
    end
  end
end
