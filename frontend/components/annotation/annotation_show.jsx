import React from 'react';
import { Link } from 'react-router-dom';
import EditAnnotationForm from '../annotation/edit_annotation_form_container'

class AnnotationShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            toggleEdit: false,
            showComponent: true,
        }
        this.handleEdit = this.handleEdit.bind(this)
        this.toggleEditForm = this.toggleEditForm.bind(this)
        this.showAnnotationInfo = this.showAnnotationInfo.bind(this)
        this.toggleAnnotationInfo = this.toggleAnnotationInfo.bind(this)
    }

    showAnnotationInfo(){
        this.setState({showComponent: true})
    }

    toggleAnnotationInfo(){
        this.setState({showComponent: !this.state.showComponent})
    }

    
    
    toggleEditForm() {
        this.setState({
            toggleEdit: !this.state.toggleEdit
        })
        this.toggleAnnotationInfo()
    }

    handleEdit(){
        this.setState({toggleEdit: true})
        this.toggleAnnotationInfo()
    }

    render() {
        if (this.props.annotation === undefined) return null
        return(
            <div className="annotation-show">
                <div class="arrow-left"></div>
                {this.state.showComponent ? <div className="annotation">
                <h3 className="annotation-contributer">Contributor: {this.props.annotation.author}</h3>
                <p className="annotation-body">{this.props.annotation.body}</p>
                {this.props.curUserId === this.props.annotation.user_id ? 
                            <span className="aeb"><button onClick={this.handleEdit} className="annotation-edit-button">Edit</button></span> 
                            : <span className="aeb not-logged tooltip-bottom" data-tooltip="You have to be the annotation author in order to edit!"><button className="annotation-edit-button">Edit</button></span>}
                <div className="edit-annotation">
                {this.state.toggleEdit ? <EditAnnotationForm toggleEditForm={this.toggleEditForm} annotation={this.props.annotation}/> : null}
                </div>
                </div> : null}
            </div>
        )
    }
}

export default AnnotationShow