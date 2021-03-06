import * as TrackApiUtil from '../util/track_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';

const receiveTracks = tracks => ({
    type: RECEIVE_TRACKS,
    tracks
})

const receiveTrack = track => ({
    type: RECEIVE_TRACK,
    track
})

export const fetchTracks = () => dispatch => {
    return TrackApiUtil.fetchTracks()
     .then(tracks => dispatch(receiveTracks(tracks)))
}

export const fetchTrack = trackId => dispatch => {
    return TrackApiUtil.fetchTrack(trackId)
        .then(track => dispatch(receiveTrack(track)))
}