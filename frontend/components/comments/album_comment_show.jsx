import React from 'react';
import { Link } from 'react-router-dom';
import UpvoteShowContainer from '../upvote/upvote_container'
import AlbumCommentItem from './album_comment_item';

class AlbumCommentShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            Object.keys(this.props.comments).map((id, idx) => (
                <div>
                    <AlbumCommentItem comment={this.props.comments[id]} curUserId={this.props.curUserId} votes={this.props.upvotes} />
                </div>
            ))
        )

    }
}

export default AlbumCommentShow