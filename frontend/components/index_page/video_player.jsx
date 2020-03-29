import React from 'react';

class VideoPlayer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {showVideoPlayer: this.props.showVideoPlayer}
        this.handleCloseButton = this.handleCloseButton.bind(this)
    }

    handleCloseButton(){
        this.setState({showVideoPlayer: false})
    }

    render(){
        return(
            this.state.showVideoPlayer ? 
                <div className="video-player-container" style={{ top: `${window.scrollY + document.querySelector('#videos').getBoundingClientRect().top}px`}}>
                <div className="video-player-close-button" onClick={this.handleCloseButton}>x</div>
                <div className="video-player">
                    <iframe width="767" height="431" src={`${this.props.videoUrl}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div> : null
        )
    }
}

export default VideoPlayer