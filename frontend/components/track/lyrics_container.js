import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Lyrics from './lyrics';
import { fetchTrack } from '../../actions/track_actions';
import { fetchArtist } from '../../actions/artist_actions';
import { fetchAlbum } from '../../actions/album_actions';
import { selectTrack, selectTracksAlbum, selectTracksArtist } from '../../reducers/selectors';

const mSTP = (state, ownProps) => {
    const trackId = ownProps.match.params.trackId;
    const annotationId = ownProps.match.params.annotationId
    const track = selectTrack(state.entities, trackId);
    const artist = selectTracksArtist(state.entities, track)
    const album = selectTracksAlbum(state.entities, track)
    return {
        curUserId: state.session.id,
        trackId,
        track,
        artist,
        album,
        annotations: state.entities.annotations,
        curAnnotation: annotationId
    }
}

const mDTP = dispatch => ({
    fetchTrack: trackId => dispatch(fetchTrack(trackId)),
    fetchArtist: artistId => dispatch(fetchArtist(artistId)),
    fetchAlbum: albumId => dispatch(fetchAlbum(albumId))
})

export default withRouter(connect(mSTP, mDTP)(Lyrics));