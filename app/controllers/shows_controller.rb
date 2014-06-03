class ShowsController < ApplicationController

  def index
    @shows = Show.current
  end

  def new
    return render(nothing: true, status: 401) unless admin?
    @show = Show.new
    render "edit", layout: "admin"
  end

  def edit
    return render(nothing: true, status: 401) unless admin?
    @show = Show.find(params[:id])
    render layout: "admin"
  end

  def create
    return render(nothing: true, status: 401) unless admin?
    @show = Show.create(permitted_params)
    redirect_to shows_path
  end

  def update
    return render(nothing: true, status: 401) unless admin?
    @show = Show.find(params[:id])
    @show.update_attributes(permitted_params)
    redirect_to shows_path
  end

  def destroy
    return render(nothing: true, status: 401) unless admin?
    @show = Show.find(params[:id])
    @show.destroy
    redirect_to shows_path
  end

private

  def permitted_params
    params.require(:show).permit(:date, :venue, :location, :other_acts, :time, :price, :notes)
  end
end
