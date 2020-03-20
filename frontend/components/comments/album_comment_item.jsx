import React from 'react';
import { Link } from 'react-router-dom';
import UpvoteShowContainer from '../upvote/upvote_container'
import { connect } from 'react-redux';
import { fetchUpvotes, fetchUpvote } from '../../actions/upvotes_actions';


const mSTP = (state, ownProps) => {
    const upvotes = {}
    const commentId = ownProps.comment.id
    Object.values(state.entities.upvotes).filter((upvote) => upvote.voteable_id === commentId && upvote.voteable_type === "Comment").forEach((el) => upvotes[el.user_id] = el)
    return {
        curUserId: state.session.id,
        upvotes
    }
}

const mDTP = dispatch => {
    return {
        fetchUpvote: (voteId) => dispatch(fetchUpvote(voteId)),
        fetchUpvotes: () => dispatch(fetchUpvotes())
    }
}

class AlbumCommentItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.timeSince = this.timeSince.bind(this)
    }

    // componentDidMount() {
    //     this.props.fetchUpvotes()
    // }

    timeSince(date) {

        let seconds = Math.floor((new Date() - date) / 1000);

        let interval = Math.floor(seconds / 31536000);

        if (interval > 1) {
            return interval + " years ago";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months ago";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " days ago";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " hours ago";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
    }

    render() {
        return (
            <div className="comment-show">
                <div className="user-date-comment-info">
                    <div className="comment-author">{this.props.comment.author}</div>
                    <div className="comment-time-ago">{this.timeSince(Date.parse(this.props.comment.created_at))}</div>
                </div>
                <div className="comment-body">{this.props.comment.body}</div>
                <UpvoteShowContainer votes={this.props.upvotes} voteableId={this.props.comment.id} voteableType="Comment" userId={this.props.curUserId} />
            </div>
        )

    }
}

export default connect(mSTP, mDTP)(AlbumCommentItem)