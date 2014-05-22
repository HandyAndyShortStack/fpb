Fpb::Application.routes.draw do
  extend ApplicationHelper

  root to: "home#about"

  page_names.each do |page_name|
    get page_name.to_s, to: "home##{page_name}"
  end
end
