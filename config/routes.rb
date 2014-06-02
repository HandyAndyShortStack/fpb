Fpb::Application.routes.draw do

  root to: "pages#index"

  PagesController.page_names.each do |page_name|
    get page_name, to: "pages##{page_name}", as: page_name
  end

  resources :shows
  resources :sessions, only: [:new, :create]
  get "admin", to: "sessions#new"
  match "logout", to: "sessions#destroy", via: [:get, :delete]
end
