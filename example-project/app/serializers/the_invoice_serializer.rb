class TheInvoiceSerializer < ActiveModel::Serializer
  attributes :id, :timein, :timeout, :totalhours, :memo
end
