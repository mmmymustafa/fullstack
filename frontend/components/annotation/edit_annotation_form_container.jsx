import React from 'react';
import { connect } from 'react-redux';
import AnnotationForm from './annotation_form';
import { fetchAnnotation, updateAnnotation } from '../../actions/annotation_actions';
import { fetchUser } from '../../actions/user_actions';
import { selectUser } from '../../reducers/selectors';

class EditAnnotationForm extends React.Component {
    componentDidMount() {
        this.props.fetchAnnotation(this.props.match.params.annotationId)
    }

    render() {
        if (!this.props.annotation) return null;
        return (
            <AnnotationForm
                currentUserId={this.props.currentUserId}
                currentUser={this.props.currentUser}
                action={this.props.action}
                fetchUser={this.props.fetchUser}
                annotation={this.props.annotation}
                formType={this.props.formType}/>
        );
    }
}


const mSTP = (state, ownProps) => {
    const currentUserId = state.session.id;
    const currentUser = selectUser(state.entities, currentUserId);
    return {
        currentUserId,
        currentUser,
        annotation: state.entities.annotations[ownProps.match.params.annotationId],
        formType: 'Update Annotation'
    }
}

const mDTP = dispatch => ({
    action: annotation => dispatch(updateAnnotation(annotation)),
    fetchAnnotation: annotationId => dispatch(fetchAnnotation(annotationId)),
    fetchUser: userId => dispatch(fetchUser(userId))
})



export default connect(mSTP, mDTP)(EditAnnotationForm);