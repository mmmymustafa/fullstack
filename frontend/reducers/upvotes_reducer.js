import { RECEIVE_UPVOTE, RECEIVE_UPVOTES, REMOVE_UPVOTE } from '../actions/upvotes_actions';

const upvotesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_UPVOTE:
            newState[action.payload.id] = action.payload;
            return newState
        case RECEIVE_UPVOTES:
            return action.payload
        case REMOVE_UPVOTE:
            delete newState[action.payload.id];
            return newState
        default:
            return oldState;
    }
}

export default upvotesReducer;