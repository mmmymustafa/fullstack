import { connect } from 'react-redux';
import AlbumCommentShow from './album_comment_show';
import { fetchUpvotes, fetchUpvote } from '../../actions/upvotes_actions';



const mSTP = (state, ownProps) => {
    // const upvotes = {}
    // Object.values(state.entities.upvotes).filter((upvote) => upvote.voteable_type === "Comment").forEach((el) => upvotes[el.user_id] = el)
    return {
        curUserId: state.session.id,
        // upvotes
    }
}

const mDTP = dispatch => {
    return {
        fetchUpvote: (voteId) => dispatch(fetchUpvote(voteId)),
        fetchUpvotes: () => dispatch(fetchUpvotes())
    }
}



export default connect(mSTP, mDTP)(AlbumCommentShow);