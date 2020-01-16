import React from 'react';
import { connect } from 'react-redux';
import AnnotationShow from './annotation_show';
import { fetchAnnotation } from '../../actions/annotation_actions';

const mSTP = (state, ownProps) => {
    const annotation = state.entities.annotations[ownProps.match.params.annotationId];
    return {
        annotation
    }
}

const mDTP = dispatch => ({
    fetchAnnotation: annotationId => dispatch(fetchAnnotation(annotationId)),
})

export default connect(mSTP, mDTP)(AnnotationShow);