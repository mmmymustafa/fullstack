import { connect } from 'react-redux';
import CommentShow from './comment_show';


const mSTP = (state, ownProps) => {
    return {
        curUserId: state.session.id
    }
}

export default connect(mSTP, null)(CommentShow);