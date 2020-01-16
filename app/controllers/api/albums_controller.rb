class Api::AlbumsController < ApplicationController
    def index
        @albums = Album.all
    end

    def show
        @album = Album.find(params[:id])
    end

    def create
    @album = Album.new(album_params)

    if @album.save
      render "api/albums/show"
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  private

  def album_params
    params.require(:album).permit(:title, :release_date)
  end
end
