import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ArtistShow from './artist_show';
import { fetchTracks } from '../../actions/track_actions';
import { fetchArtist } from '../../actions/artist_actions';
import { fetchAlbums } from '../../actions/album_actions';
import { selectArtist, selectArtistAlbums, selectArtistTracks } from '../../reducers/selectors';

const mSTP = (state, ownProps) => {
    const artistId = ownProps.match.params.artistId;
    const artist = selectArtist(state.entities, artistId);
    let tracks;
    let albums;
    if(Object.keys(artist).length > 0){
    tracks = selectArtistTracks(state.entities, artist)
    albums = selectArtistAlbums(state.entities, artist)
    }
    
    return {
        artistId,
        tracks,
        artist,
        albums,
    }
}

const mDTP = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks()),
    fetchArtist: artistId => dispatch(fetchArtist(artistId)),
    fetchAlbums: () => dispatch(fetchAlbums())
})

export default withRouter(connect(mSTP, mDTP)(ArtistShow));