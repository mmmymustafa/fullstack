import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Charts from './charts';
import { fetchTracks } from '../../actions/track_actions';
import { fetchArtists } from '../../actions/artist_actions';
import { fetchAnnotation } from '../../actions/annotation_actions';
import { fetchAlbums } from '../../actions/album_actions';
import { selectAllTracks , selectAllAlbums, selectAllArtists} from '../../reducers/selectors';


const mSTP = (state, ownProps) => {
    const tracks = selectAllTracks(state);
    const artists = selectAllArtists(state);
    return {
        tracks,
        artists
    }
}

const mDTP = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks()),
    fetchArtists: () => dispatch(fetchArtists()),
    fetchAnnotation: (id) => dispatch(fetchAnnotation(id))
})

export default withRouter(connect(mSTP, mDTP)(Charts));
