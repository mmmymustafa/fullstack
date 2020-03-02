import React from 'react';
import { Link } from 'react-router-dom';
import EditAnnotationForm from '../annotation/edit_annotation_form_container'

class AnnotationShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            toggleEdit: false
        }
        this.handleEdit = this.handleEdit.bind(this)
    }
    
    // componentDidMount() {
    //     this.props.fetchAnnotation(this.props.annotationId)
    // }

    handleEdit(){
        this.setState({toggleEdit: true})
    }

    render() {
        if (this.props.annotation === undefined) return null
        return(
            <div className="annotation">
            <h3 className="annotation-contributer">Contributor: {this.props.annotation.author}</h3>
            <p className="annotation-body">{this.props.annotation.body}</p>
            {this.props.curUserId === this.props.annotation.user_id ? 
            <span className="aeb"><button onClick={this.handleEdit} className="annotation-edit-button">Edit</button></span> : "you ain't da user"}
            {this.state.toggleEdit ? <EditAnnotationForm annotation={this.props.annotation}/> : null}
            </div>
        )
    }
}

export default AnnotationShow