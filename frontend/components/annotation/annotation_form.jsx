import React from 'react';
import { Link } from 'react-router-dom';

class AnnotationForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.annotation;
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
        this.props.formType === "Create Annotation" ? trackId = parseInt(this.state.trackId) : trackId = parseInt(this.state.track_id)
        const annotation = Object.assign({}, this.state, {
            track_id: trackId
        });
        this.props.action(annotation);
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
                        <div className="acab"><Link to={`/tracks/${this.state.trackId}`}><button className="annotation-cancel-action-button">Cancel</button></Link></div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AnnotationForm