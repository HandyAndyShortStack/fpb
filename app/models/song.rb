class Song < ActiveRecord::Base
  def urls
    ["mp3", "ogg"].map { |extension| "#{self.url}.#{extension}" }
  end
end
