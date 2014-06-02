Fpb::Application.routes.draw do

  root to: "application#index"

  ApplicationController.page_names.each do |page_name|
    get page_name, to: "application##{page_name}", as: page_name
  end
end
