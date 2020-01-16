import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Charts from './charts';
import { fetchTracks } from '../../actions/track_actions';
import { fetchArtists } from '../../actions/artist_actions';
import { selectAllTracks , selectTracksArtist, selectAllArtists} from '../../reducers/selectors';

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
    fetchArtists: () => dispatch(fetchArtists())
})

export default withRouter(connect(mSTP, mDTP)(Charts));
