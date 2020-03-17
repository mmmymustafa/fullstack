import * as UpvoteApiUtil from '../util/upvote_api_util';

export const RECEIVE_UPVOTES = 'RECEIVE_UPVOTES';
export const RECEIVE_UPVOTE = 'RECEIVE_UPVOTE'
export const REMOVE_UPVOTE = 'REMOVE_UPVOTE';

const receiveUpvotes = payload => ({
    type: RECEIVE_UPVOTES,
    payload
})

const receiveUpvote = payload => ({
    type: RECEIVE_UPVOTE,
    payload
})

const removeUpvote = (payload) => ({
    type: REMOVE_UPVOTE,
    payload
})

export const fetchUpvotes = () => dispatch => {
    return UpvoteApiUtil.fetchUpvotes()
        .then(payload => dispatch(receiveUpvotes(payload)))
}

export const fetchUpvote = upvoteId => dispatch => {
    return UpvoteApiUtil.fetchUpvote(upvoteId)
        .then(payload => dispatch(receiveUpvote(payload)))
}

export const createUpvote = (upvote) => dispatch => {
    return UpvoteApiUtil.createUpvote(upvote)
        .then(payload => dispatch(receiveUpvote(payload)));
}

export const updateUpvote = (upvote) => dispatch => {
    return UpvoteApiUtil.updateUpvote(upvote)
        .then(payload => dispatch(receiveUpvote(payload)));
}

export const destroyUpvote = upvote => dispatch => {
    return UpvoteApiUtil.destroyUpvote(upvote)
        .then((payload) => dispatch(removeUpvote(payload)))
}


