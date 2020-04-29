import { createStore as cs, applyMiddleware, compose } from 'redux';
import { combineReducers } from "redux";

import ReduxThunk from 'redux-thunk';
import boards from '../reducers/BoardsReducer';
import lists from '../reducers/ListsReducer';
import cards from '../reducers/CardsReducer';
import comments from '../reducers/CommentsReducer';



const reducers = combineReducers({
  boards,
  lists,
  cards,
  comments,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export function createStore(initialState = {}) {
  return cs(reducers, initialState, composeEnhancers(applyMiddleware(ReduxThunk)));
}

