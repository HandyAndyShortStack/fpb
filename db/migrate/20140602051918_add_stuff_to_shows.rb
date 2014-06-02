class AddStuffToShows < ActiveRecord::Migration
  def change
    add_column :shows, :venue, :string
    add_column :shows, :location, :string
    add_column :shows, :other_acts, :text
    add_column :shows, :time, :string
    add_column :shows, :price, :string
    add_column :shows, :notes, :text
  end
end
