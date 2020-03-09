import React from 'react';
import { Link } from 'react-router-dom';
import TrackShowContainer from '../track/track_show_container';

class CommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.comment;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showSubmitButton = this.showSubmitButton.bind(this);
    }

    // componentDidMount() {
    //     this.props.fetchUser(this.props.currentUserId)
    // }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    showSubmitButton(){
        document.getElementsByClassName("comment-submit")[0].setAttribute("style", "display: block")    
    }

    handleSubmit(e) {
        e.preventDefault();
        let trackId = this.props.trackId;
        let type = this.props.commentableType
        const comment = Object.assign({}, this.state, {
            commentable_id: trackId,
            commentable_type: type,
        });
        this.props.action(comment);
    }

    render() {
        return (
            this.props.userId ? 
            <div className="comment-form">
                <form onSubmit={this.handleSubmit}>
                    <div className="comment-form-body">
                        <textarea
                            placeholder="Add a Comment"
                            className="comment-textarea"
                            value={this.state.body}
                            onChange={this.update('body')}
                            onClick={this.showSubmitButton}
                        />
                    </div>
                    <div className="comment-form-buttons">
                        <div className="wtf"><div className="comment-form-save-button"><input className="comment-submit" type="submit" value="Submit" /></div></div>
                    </div>
                </form>
                </div> : <div className="not-signed-creating-comment">
                            <Link className="anno-link" to="/signup">Sign up </Link>
                            or
                            <Link className="anno-link" to="/login"> login </Link>
                            to add comments
                        </div> 
        )
    }
}

export default CommentForm