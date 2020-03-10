import React from 'react';
import { Link } from 'react-router-dom';
import EditAnnotationForm from '../annotation/edit_annotation_form_container'
import AnnotationCommentFormContainer from '../comments/annotation_create_comment_form_container';
import AnnotationCommentShowContainer from '../comments/annotation_comment_show_container'



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

    componentDidMount(){
        this.props.annotation.commentIds.map((comId) => this.props.fetchAnnotationComment(this.props.annotationId, comId))
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
            <div className="anno-show">
            <div className="annotation-show">
            {this.state.toggleEdit ? null : <div class="arrow-left"></div>}
                {this.state.showComponent ? <div className="annotation">
                <h3 className="annotation-contributer">Contributor: {this.props.annotation.author}</h3>
                <p className="annotation-body">{this.props.annotation.body}</p>
                {this.props.curUserId === this.props.annotation.user_id ?
                            <div className="annotation-author-suugestions"> 
                            <span className="aeb"><button onClick={this.handleEdit} className="annotation-edit-button">Edit</button></span>
                                    <div className="annotation-suggestions-show">
                                    <div className="suggestions-header">Disneyus community suggestions:</div>
                        <div className="annotation-comments">
                            <AnnotationCommentShowContainer comments={this.props.comments} />
                        </div></div>
                        </div> 
                        : <div className="annotation-suggestions"><AnnotationCommentFormContainer annotationId={this.props.annotation.id} commentableType="Annotation" userId={this.props.curUserId} />
                                <div className="annotation-comments">
                                <div className="suggestions-header-not-author">Disneyus community suggestions:</div>
                                <AnnotationCommentShowContainer comments={this.props.comments} />
                            </div></div>}
                </div> : null}
                <div className="edit-annotation">
                    {this.state.toggleEdit ? <EditAnnotationForm toggleEditForm={this.toggleEditForm} annotation={this.props.annotation} /> : null}
                </div>
            </div>
            </div >
        )
    }
}

export default AnnotationShow