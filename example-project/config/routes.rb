Rails.application.routes.draw do
  resources :the_invoices
  resources :invoice2s
  resources :invoices
  get "/hello", to: "application#hello_world"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
