import React from 'react';
import { Link } from 'react-router-dom';

class CommentShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    this.timeSince = this.timeSince.bind(this)
    }

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
        // if (this.props.comments)
        console.log("hitting comments")
        return (
        Object.keys(this.props.comments).map((id) => (
                <div className="comment-show">
                    <div className="user-date-comment-info">
                        <div className="comment-author">{this.props.comments[id].author}</div>
                        <div className="comment-time-ago">{this.timeSince(Date.parse(this.props.comments[id].created_at))}</div>
                    </div>
                    <div className="comment-body">{this.props.comments[id].body}</div>
                </div>
            ))
        )

    }
}

export default CommentShow