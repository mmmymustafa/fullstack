import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AnnotationForm from './annotation_form';
import { createAnnotation } from '../../actions/annotation_actions';
import { fetchUser } from '../../actions/user_actions';
import { fetchTrack } from '../../actions/track_actions';
import { selectUser, selectTrack } from '../../reducers/selectors';
import { fetchTracks } from '../../util/track_api_util';

const mSTP = (state, ownProps) => {
    const _currentUserId = state.session.id;
    const currentUser = selectUser(state.entities, _currentUserId);
    return {
        currentUserId: _currentUserId,
        currentUser,
        annotation: {
            userId: _currentUserId, //for testing purposes
            trackId: 0, //for testing purposes
            body: '',
            selectedLyrics: ''
        },
        formType: 'Create Annotation'
    }
}

const mDTP = (dispatch) => ({
    action: annotation => dispatch(createAnnotation(annotation)),
    fetchUser: userId => dispatch(fetchUser(userId)),
})

export default connect(mSTP, mDTP)(AnnotationForm)