import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function fetchBoardsRequest() {
  return { type: types.FETCH_BOARDS_REQUEST };
}

export function fetchBoardRequest() {
  return { type: types.FETCH_BOARD_REQUEST };
}

export function fetchBoardsSuccess(boards) {
  return { type: types.FETCH_BOARDS_SUCCESS, boards };
}

export function fetchBoardSuccess(board) {
  return { type: types.FETCH_BOARD_SUCCESS, board };
}

export function createBoardRequest() {
  return { type: types.CREATE_BOARD_REQUEST };
}

export function createBoardSuccess(board) {
  return { type: types.CREATE_BOARD_SUCCESS, board };
}

export function createListSuccess(list) {
  return { type: types.CREATE_LIST_SUCCESS, list };
}

export function editListSuccess(list) {
  return { type: types.EDIT_LIST_SUCCESS, list };
}

export function createCardSuccess(card) {
  return { type: types.CREATE_CARD_SUCCESS, card };
}

export function createCommentSuccess(comment) {
  return { type: types.CREATE_COMMENT_SUCCESS, comment };
}

export function fetchCardSuccess(card) {
  return { type: types.FETCH_CARD_SUCCESS, card };
}

export function fetchBoards() {
  return function (dispatch) {
    dispatch(fetchBoardsRequest());
    apiClient.getBoards(boards => dispatch(fetchBoardsSuccess(boards)));
  };
}

export function fetchBoard(boardId) {
  return function (dispatch) {
    dispatch(fetchBoardRequest());
    apiClient.getBoard(boardId, board => dispatch(fetchBoardSuccess(board)));
  };
}

export function createBoard(board, callback) {
  return function (dispatch) {
    dispatch(createBoardRequest());
    apiClient.createBoard(board, newBoard => {
      dispatch(createBoardSuccess(newBoard));

      if (callback) {
        callback(newBoard);
      }
    });
  };
}

export function createList(title, boardId, callback) {
  return function (dispatch) {
    apiClient.createList(title, boardId, newList => {
      dispatch(createListSuccess(newList));
      if (callback) {
        callback();
      }
    });
  };
}

export function editList(title, listId, callback) {
  return function (dispatch) {
    apiClient.editList(title, listId, updatedList => {
      dispatch(editListSuccess(updatedList));
      if (callback) {
        callback();
      }
    });
  };
}

export function createCard(title, listId, callback) {
  return function (dispatch) {
    apiClient.createCard(title, listId, newCard => {
      dispatch(createCardSuccess(newCard));
      if (callback) {
        callback();
      }
    });
  }
}

export function createComment(commentText, cardId) {
  return function (dispatch) {
    apiClient.createComment(commentText, cardId, newComment => {
      dispatch(createCommentSuccess(newComment));
    })
  }
}

export function fetchCard(cardId, callback) {
  return function (dispatch) {
    apiClient.getCard(cardId, card => {
      dispatch(fetchCardSuccess(card));
      if (callback) {
        callback(card)
      }
    })
  }
}