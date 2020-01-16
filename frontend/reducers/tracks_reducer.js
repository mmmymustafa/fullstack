import {RECEIVE_TRACKS, RECEIVE_TRACK} from '../actions/track_actions';

const tracksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_TRACKS:
            return action.tracks;
        case RECEIVE_TRACK:
            newState[action.track.id] = action.track;
            return newState
        default:
            return oldState;
    }
}

export default tracksReducer;