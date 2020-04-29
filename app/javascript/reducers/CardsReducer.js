import * as types from '../constants/ActionTypes';

export default function cardsReducer(state = [], action) {
  switch (action.type) {
    case types.FETCH_BOARD_SUCCESS:
      let boardCards = action.board.lists.reduce(
        (allCards, list) => {
          return allCards.concat(list.cards);
        },
        []
      )
      return boardCards.map((boardCard) => {
        let stateCard = state.find(stateCard => stateCard.id === boardCard.id);
        if (stateCard) {
          return stateCard;
        } else {
          return boardCard;
        }
      })
    case types.CREATE_CARD_SUCCESS:
      return state.concat(action.card);

    case types.FETCH_CARD_SUCCESS:
      const foundCard = state.find(card => card.id === action.card.id);
      const { comments, ...cardWithoutComments } = action.card

      if (foundCard) {
        return state.map(card => card.id === cardWithoutComments.id ? cardWithoutComments : card)
      } else {
        return state.concat(cardWithoutComments);
      }
  }
  return state;
}