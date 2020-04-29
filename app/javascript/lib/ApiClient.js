import axios from "axios";
import * as routes from "../constants/ApiRoutes";

function logError(errorResponse) {
  const response = errorResponse.response;

  if (response && response.data && response.data.error) {
    console.error(`HTTP Error: ${response.data.error}`);
  } else {
    console.error("Error: ", errorResponse);
  }
}

function unwrapData(response) {
  return response.data;
}

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common["Accept"] = "application/json";

const apiClient = {
  getBoards: function (callback) {
    return axios
      .get(routes.BOARDS_INDEX_URL)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createBoard: function (board, callback) {
    return axios
      .post(routes.CREATE_BOARD_URL, { board })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  getBoard: function (id, callback) {
    return axios
      .get(routes.SHOW_BOARD_URL + id)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createList: function (title, boardId, callback) {
    const listJson = {
      board_id: boardId,
      list: {
        title: title
      }
    };
    return axios
      .post(routes.CREATE_LIST_URL, listJson)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  editList: function (title, listId, callback) {
    return axios
      .put(routes.EDIT_LIST_URL + listId, { title })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createCard: function (title, listId, callback) {
    const cardJson = {
      list_id: listId,
      card: {
        title: title
      }
    };
    return axios
      .post(routes.CREATE_CARD_URL, cardJson)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  getCard: function (cardId, callback) {
    return axios
      .get(routes.SHOW_CARD_URL + cardId)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createComment: function (commentText, cardId, callback) {
    const commentJson = {
      card_id: cardId,
      comment: {
        text: commentText
      }
    }
    return axios
      .post(routes.CREATE_COMMENT_URL, commentJson)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  }
};

export default apiClient;
