import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UpvoteShow from './upvote';
import {createUpvote, updateUpvote, destroyUpvote} from '../../actions/upvotes_actions'

const mSTP = (state, ownProps) => {
    let numDowns = Object.values(ownProps.votes).filter((upvote) => upvote.vote_type === "downvote")
    let numUps = Object.values(ownProps.votes).filter((upvote) => upvote.vote_type === "upvote")
    return {
        curUserId: state.session.id,
        numVotes: numUps.length - numDowns.length
    }
}

const mDTP = dispatch => ({
        createUpvote: (upvote) => dispatch(createUpvote(upvote)),
        updateUpvote: (upvoteId) => dispatch(updateUpvote(upvoteId)),
        destroyUpvote: (upvote) => dispatch(destroyUpvote(upvote))
    }
)

export default withRouter(connect(mSTP, mDTP)(UpvoteShow))



