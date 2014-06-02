class PagesController < ApplicationController
  def self.page_names
    %w(about contact photos press video)
  end
  page_names.each do |page_name|
    define_method page_name do
      render page_name, layout: false if request.wiselinks?
    end
  end
end
