import { connect } from 'react-redux';
import AnnotationCommentForm from './annotation_comment_form';
import { createAnnotationComment } from '../../actions/comment_actions';
import { fetchUser } from '../../actions/user_actions';
import { selectUser } from '../../reducers/selectors';

const mSTP = (state, ownProps) => {
    const _currentUserId = state.session.id;
    const currentUser = selectUser(state.entities, _currentUserId);
    return {
        currentUserId: _currentUserId,
        currentUser,
        comment: {
            userId: _currentUserId,
            // commentableId, 
            body: '',
            commentableType: 'Annotation'
        },
        formType: 'Add Comment'
    }
}

const mDTP = (dispatch) => ({
    action: comment => dispatch(createAnnotationComment(comment)),
    fetchUser: userId => dispatch(fetchUser(userId)),
})

export default connect(mSTP, mDTP)(AnnotationCommentForm)