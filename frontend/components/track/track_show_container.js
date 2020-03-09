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
import { fetchAnnotation } from '../../actions/annotation_actions';
import { fetchTrackComment } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => {
    const trackId = parseInt(ownProps.match.params.trackId);
    const track = selectTrack(state.entities, trackId);
    const artist = selectTracksArtist(state.entities, track)
    const album = selectTracksAlbum(state.entities, track)
    return {
        trackId,
        track,
        artist,
        album,
        userId: state.session.id,
        annotations: state.entities.annotations,
        comments: Object.values(state.entities.comments).filter((comment) => comment.commentable_id === trackId && comment.commentable_type === "Track") 
    }
}

const mDTP = dispatch => ({
    fetchTrack: trackId => dispatch(fetchTrack(trackId)),
    fetchArtist: artistId => dispatch(fetchArtist(artistId)),
    fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
    fetchAnnotation: annotationId => dispatch(fetchAnnotation(annotationId)),
    fetchTrackComment: (trackId, commId) => dispatch(fetchTrackComment(trackId, commId))
})

export default withRouter(connect(mSTP, mDTP)(TrackShow));
