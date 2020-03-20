import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AlbumShow from './album_show';
import { fetchTracks } from '../../actions/track_actions';
import { fetchArtist } from '../../actions/artist_actions';
import { fetchAlbum } from '../../actions/album_actions';
import { selectAlbum, selectAlbumsArtist, selectAlbumsTracks } from '../../reducers/selectors';
import { fetchAlbumComments } from '../../actions/comment_actions'
import { fetchUpvotes } from '../../actions/upvotes_actions'

const mSTP = (state, ownProps) => {
    const albumId = parseInt(ownProps.match.params.albumId);
    const album = selectAlbum(state.entities, albumId);
    let tracks;
    let artist;
    if (Object.keys(album).length > 0) {
        tracks = selectAlbumsTracks(state.entities, album)
        artist = selectAlbumsArtist(state.entities, album)
    }

    return {
        userId: state.session.id,
        albumId,
        tracks,
        artist,
        album,
        comments: Object.values(state.entities.comments).filter((comment) => comment.commentable_id === albumId && comment.commentable_type === "Album"),
        upvotes: state.entities.upvotes
    }
}

const mDTP = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks()),
    fetchArtist: artistId => dispatch(fetchArtist(artistId)),
    fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
    fetchUpvotes: () => dispatch(fetchUpvotes()),
    fetchAlbumComments: albumId => dispatch(fetchAlbumComments(albumId))
})

export default withRouter(connect(mSTP, mDTP)(AlbumShow));