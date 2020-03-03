import React from 'react';
import { Link } from 'react-router-dom';
import TrackShowContainer from '../track/track_show_container';

class AnnotationForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.annotation;
        this.state.trackId = this.props.trackId;
        this.state.selectedLyrics = this.props.selectedLyrics;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.fetchUser(this.props.currentUserId)
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let trackId;
        let selectedLyrics;
        this.props.formType === "Create Annotation" ? trackId = parseInt(this.state.trackId) : trackId = parseInt(this.state.track_id)
        this.props.formType === "Create Annotation" ? selectedLyrics = this.state.selectedLyrics : selectedLyrics = this.state.selected_lyrics
        const annotation = Object.assign({}, this.state, {
            track_id: trackId,
            selected_lyrics: selectedLyrics
        });
        this.props.action(annotation);
        this.props.formType === "Create Annotation" ? this.props.toggleAnnotationForm() : this.props.toggleEditForm()
    }

    render() {
        return (
            <div className="annotation-form">
                <form onSubmit={this.handleSubmit}>
                    <div className="annotation-form-body">
                    <textarea
                            placeholder="Show off your Disney knowledge here!!!"
                            className="afb"
                            value={this.state.body}
                            onChange={this.update('body')}
                        />
                    </div>
                    <div className="annotation-form-buttons">
                    <div className="wtf"><div className="annotation-form-save-button"><input className="afsb" type="submit" value="Save" /></div></div>
                    <div className="acab"><button onClick={this.props.formType === "Create Annotation" ? this.props.toggleAnnotationForm : this.props.toggleEditForm} className="annotation-cancel-action-button">Cancel</button></div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AnnotationForm