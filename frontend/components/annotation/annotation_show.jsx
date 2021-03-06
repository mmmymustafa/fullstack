import React from 'react';
import { Link } from 'react-router-dom';
import EditAnnotationForm from '../annotation/edit_annotation_form_container'
import AnnotationCommentFormContainer from '../comments/annotation_create_comment_form_container';
import AnnotationCommentShowContainer from '../comments/annotation_comment_show_container';
import UpvoteShowContainer from '../upvote/upvote_container'
import Lyrics from '../track/lyrics';



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
        this.handleDeleteAnnotation = this.handleDeleteAnnotation.bind(this)
    }

    componentDidMount(){
        this.props.annotation.commentIds.map((comId) => this.props.fetchAnnotationComment(this.props.annotationId, comId))
        // this.props.annotation.voteIds.map((voteId) => this.props.fetchUpvote(voteId))
        // this.props.fetchUpvotes()
    }

    showAnnotationInfo(){
        this.setState({showComponent: true})
    }

    toggleAnnotationInfo(){
        this.setState({showComponent: !this.state.showComponent})
    }

    handleDeleteAnnotation(annBody){
        this.props.destroyAnnotation(this.props.annotation.id)
         .then(() => {
                let divs = document.getElementsByClassName("yinw");
                let searchText = annBody;
                let found;

                for (let i = 0; i < divs.length; i++) {
                    if (divs[i].textContent === searchText) {
                        found = i;
                        break;
                    }
                }
                divs[found].setAttribute("style", "background-color: transparent; cursor: text;")
            }
         )
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
                <UpvoteShowContainer votes={this.props.upvotes} voteableId={this.props.annotation.id} voteableType="Annotation" userId={this.props.curUserId}/>
                {this.props.curUserId === this.props.annotation.user_id ?
                            <div className="annotation-author-suugestions">
                            <div className="anno-user-buttons"> 
                            <span className="aeb"><button onClick={this.handleEdit} className="annotation-edit-button">Edit</button></span>
                                    <div className="delete-anno-button" onClick={() => this.handleDeleteAnnotation(this.props.annotation.selected_lyrics)}>Delete</div>
                            </div>
                                {this.props.comments.length > 0 ? <div className="annotation-suggestions-show">
                                    <div className="suggestions-header">Disneyus community suggestions:</div>
                        <div className="annotation-comments">
                            <AnnotationCommentShowContainer comments={this.props.comments} />
                            </div></div> : null}
                        </div> 
                        : <div className="annotation-suggestions"><AnnotationCommentFormContainer annotationId={this.props.annotation.id} commentableType="Annotation" userId={this.props.curUserId} />
                                <div className="annotation-comments">
                                    {this.props.comments.length > 0 ? <div className="suggestions-header-not-author">Disneyus community suggestions:</div> : null}
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