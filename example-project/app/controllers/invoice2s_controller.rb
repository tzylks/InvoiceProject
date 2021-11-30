class Invoice2sController < ApplicationController
    def index
        render json: Invoice2.all
    end

    def create
        invoice = Invoice2.create(invoice_params)
        render json: invoice, status: :created
    end

    def show
        invoice = Invoice2.find(params[:id])
        render json: invoice
    end

    def destroy
        delete_invoice = Invoice2.find(params[:id])
        delete_invoice.destroy
        head :no_content
    end

    private

    def invoice_params
        params.permit(:timein, :timeout, :memo)
    end
end
