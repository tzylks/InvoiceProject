class InvoiceSerializer < ActiveModel::Serializer
  attributes :id, :timein, :timeout, :memo
end
