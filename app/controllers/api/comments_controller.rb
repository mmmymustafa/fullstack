class Api::CommentsController < ApplicationController
    before_action :require_logged_in, only: [:create ,:update, :destroy]

    def index
        @comments = Comment.all
    end
    
    def create
        @comment = Comment.new(params.require(:comment).permit(:body, :commentable_type, :commentable_id, :user_id))
        @comment.user_id = current_user.id
        if @comment.save!
            render 'api/comments/show'
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def show
        @comment = Comment.find(params[:id])
    end

    def update
        @comment = Comment.find(params[:id])
        if @comment.update_attributes(params.require(:comment).permit(:body, :commentable_type, :commentable_id, :user_id))
            render "api/comments/show"
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
        render 'api/comments/show'
    end
end
