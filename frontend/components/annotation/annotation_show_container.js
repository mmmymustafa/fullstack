import React from 'react';
import { connect } from 'react-redux';
import AnnotationShow from './annotation_show';
import { fetchAnnotationComment } from '../../actions/comment_actions';
import { fetchUpvotes, fetchUpvote } from '../../actions/upvotes_actions';
import { destroyAnnotation } from '../../actions/annotation_actions'


const mSTP = (state, ownProps) => {
    const annotationId = ownProps.annotationId
    const upvotes = {}
    Object.values(state.entities.upvotes).filter((upvote) => upvote.voteable_id === annotationId && upvote.voteable_type === "Annotation").forEach((el) => upvotes[el.user_id] = el)
    return{
        curUserId: state.session.id,
        comments: Object.values(state.entities.comments).filter((comment) => comment.commentable_id === annotationId && comment.commentable_type === "Annotation"),
        upvotes
    }
}

const mDTP = dispatch => {
    return{
        fetchAnnotationComment: (annotationId, commId) => dispatch(fetchAnnotationComment(annotationId, commId)),
        fetchUpvotes: () => dispatch(fetchUpvotes()),
        fetchUpvote: (voteId) => dispatch(fetchUpvote(voteId)),
        destroyAnnotation: (annotationId) => dispatch(destroyAnnotation(annotationId))
    }
}

export default connect(mSTP, mDTP)(AnnotationShow);