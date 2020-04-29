class Api::CardsController < ApplicationController

  def create
    list = List.find(params[:list_id])
    @card = Card.new(card_params.merge(list: list))
    CardAction.create(description: "added this card to #{list.title}", card: @card)

    valid_title = @card.title && !@card.title.empty?


    if valid_title && @card.save
        render :create
    else
        @error = valid_title ? @card.errors.full_messages.join(', ') : "must provide a valid card title"
        render 'api/shared/error', status: :unprocessable_entity
    end

    rescue ActiveRecord::RecordNotFound
        @error = "Invalid list id provided"
        render 'api/shared/error', status: 404
end

  def show
    @card = Card.find(params[:id])

  rescue ActiveRecord::RecordNotFound
    @error = "Invalid card ID provided"
    render 'api/shared/error', status: 404 
  end  

  private

    def card_params
        params.require(:card).permit(:title)
    end

end

