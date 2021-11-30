class TheInvoicesController < ApplicationController
    def index
        render json: TheInvoice.all
    end

    def create
        invoice = TheInvoice.create(invoice_params)
        render json: invoice, status: :created
    end

    def show
        invoice = TheInvoice.find(params[:id])
        render json: invoice
    end

    def destroy
        delete_invoice = TheInvoice.find(params[:id])
        delete_invoice.destroy
        head :no_content
    end

    private

    def invoice_params
        params.permit(:timein, :timeout, :totalhours, :memo)
    end
end
