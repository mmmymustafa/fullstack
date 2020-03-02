class Api::AnnotationsController < ApplicationController
    before_action :require_logged_in, only: [:create ,:update]

    def create
        @annotation = Annotation.new(params.require(:annotation).permit(:user_id, :track_id, :body, :selected_lyrics))
        @track = Track.find(@annotation.track_id)
        @annotation.user_id = current_user.id
        # @annotation.track_id = params[:track_id]
        if @annotation.save 
            render :create
        else
            render json: @annotation.errors.full_messages, status: 422
        end
    end

    def show
        @annotation = Annotation.find(params[:id])
    end

    def update
        @annotation = Annotation.find(params[:id])
        if @annotation.update_attributes(params.require(:annotation).permit(:user_id, :track_id, :body, :selected_lyrics))
            render "api/annotations/show"
        else
            render json: @annotation.errors.full_messages, status: 422
        end
    end
end
