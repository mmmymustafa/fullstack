import { connect } from 'react-redux';
import TrackCommentShow from './track_comment_show';


const mSTP = (state, ownProps) => {
    return {
        curUserId: state.session.id
    }
}

export default connect(mSTP, null)(TrackCommentShow);