class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def index
    page_names = [ "about", "contact", "listen", "photos", "press", "shows", "video" ]
    if params[:page_name] && page_names.include?(params[:page_name])
      @page_name = params[:page_name]
    elsif params[:page_name]
      return redirect_to root_path
    else
      @page_name = "index"
    end
  end
end
