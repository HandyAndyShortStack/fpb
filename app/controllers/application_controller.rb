class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_filter :check_admin

private
  
  def check_admin
    @admin = true if admin?
  end

  def admin?
    ENV["FPB_PASSWORD"] && ENV["FPB_PASSWORD"] == session[:password]
  end
end
