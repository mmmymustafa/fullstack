import { connect } from 'react-redux';
import AlbumCommentForm from './album_comment_form';
import { createAlbumComment } from '../../actions/comment_actions';
import { fetchUser } from '../../actions/user_actions';
import { selectUser } from '../../reducers/selectors';

const mSTP = (state, ownProps) => {
    const _currentUserId = state.session.id;
    const currentUser = selectUser(state.entities, _currentUserId);
    // const commentableId = ownProps.match.params.albumId;
    return {
        currentUserId: _currentUserId,
        currentUser,
        comment: {
            userId: _currentUserId,
            // commentableId, 
            body: '',
            commentableType: 'Album'
        },
        formType: 'Add Comment'
    }
}

const mDTP = (dispatch) => ({
    action: comment => dispatch(createAlbumComment(comment)),
    fetchUser: userId => dispatch(fetchUser(userId)),
})

export default connect(mSTP, mDTP)(AlbumCommentForm)