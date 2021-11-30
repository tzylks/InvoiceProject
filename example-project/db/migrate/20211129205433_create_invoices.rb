class CreateInvoices < ActiveRecord::Migration[6.1]
  def change
    create_table :invoices do |t|
      t.datetime :timein
      t.datetime :timeout
      t.string :memo

      t.timestamps
    end
  end
end
