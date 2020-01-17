import React from 'react';
import { Link } from 'react-router-dom';

class AnnotationShow extends React.Component {
    
    componentDidMount() {
        this.props.fetchAnnotation(this.props.match.params.annotationId)
    }

    render() {
        if (this.props.annotation === undefined) return null
        return(
            <div className="annotation">
            <h3 className="annotation-contributer">Contributor: {this.props.annotation.author}</h3>
            <p className="annotation-body">{this.props.annotation.body}</p>
            <Link to={`/annotations/${this.props.annotation.id}/edit`}><span className="aeb"><button className="annotation-edit-button">Edit</button></span></Link>
            </div>
        )
    }
}

export default AnnotationShow