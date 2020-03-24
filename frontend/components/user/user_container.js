import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import User from './user';
import { fetchAnnotations } from '../../actions/annotation_actions'

const mSTP = (state) => {
    let currentUser = state.session.id;
    let userAnns = Object.values(state.entities.annotations).filter((ann) => ann.user_id === currentUser)
    return {
        currentUser,
        // disneyPoints: userAnns.length * 5
    };
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    // fetchAnnotations: () => dispatch(fetchAnnotations())
});

export default connect(mSTP,mDTP)(User);