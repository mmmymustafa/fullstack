class Api::UpvotesController < ApplicationController
    before_action :require_logged_in, only: [:create ,:update, :destroy]

    def index
        @upvotes = Upvote.all
    end
    
    def create
        @upvote = Upvote.new(params.require(:upvote).permit(:vote_type, :voteable_type, :voteable_id))
        @upvote.user_id = current_user.id
        if @upvote.save
            render 'api/upvotes/show'
        else
            render json: @upvote.errors.full_messages, status: 422
        end
    end

    def show
        @upvote = Upvote.find(params[:id])
    end

    def update
        @upvote = Upvote.find(params[:id])
        if @upvote.update_attributes(params.require(:upvote).permit(:vote_type, :voteable_type, :voteable_id, :user_id))
            render "api/upvotes/show"
        else
            render json: @upvote.errors.full_messages, status: 422
        end
    end

    def destroy
        @upvote = Upvote.find(params[:id])
        @upvote.destroy
        render 'api/upvotes/show'
    end
end
