import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Lyrics from './lyrics';
import { fetchTrack } from '../../actions/track_actions';
import { fetchArtist } from '../../actions/artist_actions';
import { fetchAlbum } from '../../actions/album_actions';
import { selectTrack, selectTracksAlbum, selectTracksArtist } from '../../reducers/selectors';

const mSTP = (state, ownProps) => {
    const trackId = ownProps.match.params.trackId;
    const track = selectTrack(state.entities, trackId);
    const artist = selectTracksArtist(state.entities, track)
    const album = selectTracksAlbum(state.entities, track)
    return {
        curUserId: state.session.id,
        trackId,
        track,
        artist,
        album,
    }
}

const mDTP = dispatch => ({
    fetchTrack: trackId => dispatch(fetchTrack(trackId)),
    fetchArtist: artistId => dispatch(fetchArtist(artistId)),
    fetchAlbum: albumId => dispatch(fetchAlbum(albumId))
})

export default withRouter(connect(mSTP, mDTP)(Lyrics));