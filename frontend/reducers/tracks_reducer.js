import {RECEIVE_TRACKS, RECEIVE_TRACK} from '../actions/track_actions';
import { RECEIVE_ANNOTATION_AND_TRACK } from '../actions/annotation_actions'

const tracksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_TRACKS:
            return action.tracks;
        case RECEIVE_TRACK:
            newState[action.track.id] = action.track;
            return newState
        case RECEIVE_ANNOTATION_AND_TRACK:
            newState[action.payload.track.id] = action.payload.track;
            return newState
        default:
            return oldState;
    }
}

export default tracksReducer;