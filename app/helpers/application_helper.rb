module ApplicationHelper

  def page_names
    %w(shows video photos about press contact).map &:to_sym
  end
end
