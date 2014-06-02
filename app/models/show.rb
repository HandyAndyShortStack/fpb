class Show < ActiveRecord::Base
  validates_presence_of :date, :venue

  def self.current
    where("date > ?", Date.today - 1.week).sort_by(&:date)
  end
end
