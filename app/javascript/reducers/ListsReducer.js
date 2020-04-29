import * as types from "../constants/ActionTypes";

export default function listsReducer(state = [], action) {
  switch (action.type) {
    case types.FETCH_BOARD_SUCCESS:
      return action.board.lists.map(list => {
        const { cards, ...listWithoutCards } = list;
        return listWithoutCards;
      });
    case types.CREATE_LIST_SUCCESS:
      return state.concat(action.list);
    case types.EDIT_LIST_SUCCESS:
      return state.map(list => {
        if (list.id === action.list.id) {
          return action.list;
        } else {
          return list;
        }
      });
  }

  return state;
}
