import React from 'react';
import { connect } from 'react-redux';
import AnnotationShow from './annotation_show';
import { fetchAnnotationComment } from '../../actions/comment_actions';


const mSTP = (state, ownProps) => {
    const annotationId = ownProps.annotationId
    return{
        curUserId: state.session.id,
        comments: Object.values(state.entities.comments).filter((comment) => comment.commentable_id === annotationId && comment.commentable_type === "Annotation") 
    }
}

const mDTP = dispatch => {
    return{
        fetchAnnotationComment: (annotationId, commId) => dispatch(fetchAnnotationComment(annotationId, commId))
    }
}

export default connect(mSTP, mDTP)(AnnotationShow);