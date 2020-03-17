import React from 'react';
import { Link } from 'react-router-dom';
import UpvoteShowContainer from '../upvote/upvote_container'
import AnnotationCommentItem from './annotation_comment_item';

class AnnotationCommentShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            Object.keys(this.props.comments).map((id, idx) => (
                <div>
                    <AnnotationCommentItem comment={this.props.comments[id]} curUserId={this.props.curUserId} votes={this.props.upvotes} />
                </div>
            ))
        )

    }
}

export default AnnotationCommentShow