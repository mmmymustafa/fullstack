import React from 'react';
import { connect } from 'react-redux';
import AnnotationShow from './annotation_show';
import { fetchAnnotation } from '../../actions/annotation_actions';
// import { selectAnnotation} from '../../reducers/selectors/'


const mSTP = (state, ownProps) => {
    // let annotationId = 29
    // const annotation = state.entities.annotations[annotationId];
    // return {
    //     annotationId,
    //     annotation
    // }
    return{
        curUserId: state.session.id
    }
}

// const mDTP = dispatch => ({
//     fetchAnnotation: annotationId => dispatch(fetchAnnotation(annotationId)),
// })

export default connect(mSTP, null)(AnnotationShow);