import { RECEIVE_COMMENT, RECEIVE_COMMENTS, REMOVE_COMMENT } from '../actions/comment_actions';

const commentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_COMMENT:
            newState[action.payload.id] = action.payload;
            return newState
        case RECEIVE_COMMENTS:
            return action.payload
        case REMOVE_COMMENT:
            delete newState[action.payload.id];
            return newState
        default:
            return oldState;
    }
}

export default commentsReducer;