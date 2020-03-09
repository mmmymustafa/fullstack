import React from 'react';
import { connect } from 'react-redux';
import AnnotationShow from './annotation_show';
import { fetchAnnotation } from '../../actions/annotation_actions';


const mSTP = (state, ownProps) => {
    return{
        curUserId: state.session.id
    }
}

export default connect(mSTP, null)(AnnotationShow);