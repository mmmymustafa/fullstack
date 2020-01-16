import { RECEIVE_ARTISTS, RECEIVE_ARTIST } from '../actions/artist_actions';

const artistsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ARTISTS:
            return action.artists;
        case RECEIVE_ARTIST:
            newState = Object.assign({}, oldState, action.artist);
            return newState
        default:
            return oldState;
    }
}

export default artistsReducer;