import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TrackShow from './track_show';
import { fetchTrack } from '../../actions/track_actions';
import { fetchArtist } from '../../actions/artist_actions';
import { fetchAlbum } from '../../actions/album_actions';
import { selectTrack, 
        selectTracksAlbum, 
        selectTracksArtist, 
        selectTracksAnnotations } from '../../reducers/selectors';
import { fetchAnnotation } from '../../actions/annotation_actions'

const mSTP = (state, ownProps) => {
    const trackId = ownProps.match.params.trackId;
    const track = selectTrack(state.entities, trackId);
    const artist = selectTracksArtist(state.entities, track)
    const album = selectTracksAlbum(state.entities, track)
    return {
        trackId,
        track,
        artist,
        album,
        annotations: state.entities.annotations
    }
}

const mDTP = dispatch => ({
    fetchTrack: trackId => dispatch(fetchTrack(trackId)),
    fetchArtist: artistId => dispatch(fetchArtist(artistId)),
    fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
    fetchAnnotation: annotationId => dispatch(fetchAnnotation(annotationId))
})

export default withRouter(connect(mSTP, mDTP)(TrackShow));
