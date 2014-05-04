Fpb::Application.routes.draw do

  root to: "application#index"

  get "/:page_name", to: "application#index"
end
