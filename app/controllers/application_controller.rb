class ApplicationController < ActionController::Base
  extend ApplicationHelper
  protect_from_forgery with: :exception
end
