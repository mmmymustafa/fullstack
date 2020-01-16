import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AnnotationForm from './annotation_form';
import { createAnnotation } from '../../actions/annotation_actions';
import { fetchUser } from '../../actions/user_actions';
import { selectUser } from '../../reducers/selectors';

const mSTP = (state) => {
    const _currentUserId = state.session.id;
    const currentUser = selectUser(state.entities, _currentUserId);
    return {
        currentUserId: _currentUserId,
        currentUser,
        annotation: {
            userId: _currentUserId, //for testing purposes
            trackId: 9, //for testing purposes
            body: ''
        },
        formType: 'Create Annotation'
    }
}

const mDTP = (dispatch) => ({
    action: annotation => dispatch(createAnnotation(annotation)),
    fetchUser: userId => dispatch(fetchUser(userId))
})

export default connect(mSTP, mDTP)(AnnotationForm)