import { connect } from 'react-redux';
import AnnotationCommentShow from './annotation_comment_show';


const mSTP = (state, ownProps) => {
    return {
        curUserId: state.session.id
    }
}

export default connect(mSTP, null)(AnnotationCommentShow);