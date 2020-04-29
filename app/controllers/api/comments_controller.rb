class Api::CommentsController < ApplicationController
    def create
        card = Card.find(params[:card_id])
        @comment = Comment.new(comment_params.merge(card: card))
    
        valid_comment = @comment.text && !@comment.text.empty?

        if valid_comment && @comment.save
            render :create
        else
            @error = valid_title ? @comment.errors.full_messages.join(', ') : "must provide valid comment text"
            render 'api/shared/error', status: :unprocessable_entity
        end
    
        rescue ActiveRecord::RecordNotFound
            @error = "Invalid card id provided"
            render 'api/shared/error', status: 404
    end

    private

    def comment_params
        params.require(:comment).permit(:text)
    end
end