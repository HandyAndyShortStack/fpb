class HomeController < ApplicationController

  page_names.each do |page_name|
    define_method page_name do 
      render "home/#{page_name}"
    end
  end
end
