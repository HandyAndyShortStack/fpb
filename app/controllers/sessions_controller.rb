class SessionsController < ApplicationController
  layout "admin"

  def new
  end

  def create
    session[:password] = params[:password]
    redirect_to root_url
  end

  def destroy
    reset_session
    redirect_to root_url
  end
end
