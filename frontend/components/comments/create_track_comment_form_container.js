import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentForm from './comment_form';
import { createTrackComment } from '../../actions/comment_actions';
import { fetchUser } from '../../actions/user_actions';
import { fetchTrack } from '../../actions/track_actions';
import { selectUser, selectTrack } from '../../reducers/selectors';
import { fetchTracks } from '../../util/track_api_util';

const mSTP = (state, ownProps) => {
    const _currentUserId = state.session.id;
    const currentUser = selectUser(state.entities, _currentUserId);
    // const commentableId = ownProps.match.params.trackId;
    return {
        currentUserId: _currentUserId,
        currentUser,
        comment: {
            userId: _currentUserId, 
            // commentableId, 
            body: '',
            commentableType: 'Track'
        },
        formType: 'Add Comment'
    }
}

const mDTP = (dispatch) => ({
    action: comment => dispatch(createTrackComment(comment)),
    fetchUser: userId => dispatch(fetchUser(userId)),
})

export default connect(mSTP, mDTP)(CommentForm)