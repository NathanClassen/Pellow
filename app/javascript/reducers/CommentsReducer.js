import * as types from '../constants/ActionTypes';

export default function commentsReducer(state = [], action) {
    switch (action.type) {

        case types.FETCH_CARD_SUCCESS:
            const { comments, ...cardWithoutComments } = action.card
            let newState = [...state];

            comments.forEach((comment) => {
                if (!state.find(stateComment => stateComment.id === comment.id)) {
                    newState = newState.concat(comment);
                }
            });
            return newState;

        case types.CREATE_COMMENT_SUCCESS:
            return state.concat(action.comment);

    }
    return state;
}