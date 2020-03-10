import React from 'react';
import { Link } from 'react-router-dom';

class AnnotationCommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.comment;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showSubmitButton = this.showSubmitButton.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    showSubmitButton() {
        document.getElementsByClassName("annotation-comment-submit")[0].setAttribute("style", "display: block")
    }

    handleSubmit(e) {
        e.preventDefault();
        let annotationId = this.props.annotationId;
        let type = this.props.commentableType
        const comment = Object.assign({}, this.state, {
            commentable_id: annotationId,
            commentable_type: type,
        });
        this.props.action(comment);
        this.setState({ body: '' })
        document.getElementsByClassName("annotation-comment-submit")[0].setAttribute("style", "display: none")
    }

    render() {
        return (
            this.props.userId ?
                <div className="comment-form">
                    <form onSubmit={this.handleSubmit}>
                        <div className="comment-form-body">
                            <textarea
                                placeholder="Add a Suggestion"
                                className="annotation-comment-textarea"
                                value={this.state.body}
                                onChange={this.update('body')}
                                onClick={this.showSubmitButton}
                            />
                        </div>
                        <div className="comment-form-buttons">
                            <div className="wtf"><div className="comment-form-save-button"><input className="annotation-comment-submit" type="submit" value="Submit" /></div></div>
                        </div>
                    </form>
                </div> : <div className="not-signed-creating-suggestion">
                            <Link className="anno-link" to="/signup">Sign up </Link>
                            or
                            <Link className="anno-link" to="/login"> login </Link>
                            to add suggestions
                         </div>
        )
    }
}

export default AnnotationCommentForm