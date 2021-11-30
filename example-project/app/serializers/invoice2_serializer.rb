class Invoice2Serializer < ActiveModel::Serializer
  attributes :id, :timein, :timeout, :totalhours, :memo
end
