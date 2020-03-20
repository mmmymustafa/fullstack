import React from 'react';
import VideoPlayer from './video_player'

class Videos extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showVideoPlayer: false,
            videoUrl: ""
        }
        this.toggleVideoPlayer = this.toggleVideoPlayer.bind(this)
    }

    toggleVideoPlayer(url){
        this.setState({showVideoPlayer: !this.state.showVideoPlayer, videoUrl: url})
    }
    render() {
        return(
        <div className="videos">
            <div className="videos-header">VIDEOS</div>
            <div className="main-video-container">
                    <div className="main-video"><iframe width="767" height="431" src="https://www.youtube.com/embed/33XZb3HFGyY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    <div className="main-video-info">
                        <div className="main-video-topic"><img className="main-video-topic-img" src="https://milnersblog.files.wordpress.com/2019/04/star-wars-the-mandalorian-hi-res-black-logo-.jpg"/></div>
                        <div className="main-video-title">Top 10 Best Moments from The Mandalorian</div>
                        <div className="main-video-desc">From Mando's first fight with Cara Dune, to fighting the Mudhorn, to meeting Baby Yoda first time, these moments from The Mandalorian will have you reaching for your bone broth and Beskar steel. What was your favorite moment from The Mandalorian?</div>
                        <div className="main-video-sub-info">
                            <div className="main-video-author">By <a className="main-video-author-link" href="https://www.youtube.com/user/WatchMojo" target="_blank">WatchMojo.com</a> / </div>
                            <div className="main-video-release-date">Dec 28 2019</div>
                        </div>
                    </div>
            </div> 
            <div className="other-videos-container">
                <div className="other-video-card">
                        <div className="other-video-topic"><img className="other-video-topic-img" src="https://lumiere-a.akamaihd.net/v1/images/f_mulan2020_trailer_logo_18288_459b0bd6.png"/></div>
                        <div onClick={() => this.toggleVideoPlayer("https://www.youtube.com/embed/KK8FHdFluOQ")} className="other-video-thumbnail"><img className="other-video-thumbnail-img" src="https://i.ytimg.com/vi/KK8FHdFluOQ/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLCElCHiTC72ZNvfafWL-UA9yvHiRw"/></div>
                        <div className="other-video-title">Disney's Mulan | Official Trailer</div>
                        <div className="other-video-sub-info">
                            <div className="other-video-author">By <a className="other-video-author-link" href="https://www.youtube.com/user/DisneyMovieTrailers" target="_blank">Walt Disney Studios</a> / <div className="other-video-release-date">Dec 5 2019</div></div>
                        </div>
                </div>
                <div className="other-video-card">
                        <div className="other-video-topic-two"><img className="other-video-topic-img-two" src="https://images-na.ssl-images-amazon.com/images/I/71woZk7n3dL._SX425_.jpg"/></div>
                        <div onClick={() => this.toggleVideoPlayer("https://www.youtube.com/embed/cC03A0OgMuA")} className="other-video-thumbnail"><img className="other-video-thumbnail-img" src="https://i.ytimg.com/vi/cC03A0OgMuA/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCv4-Nnq4BByNlSpaenzm8Mj3Oivw"/></div>
                        <div className="other-video-title">Mickey Saves Santa | Full Episode</div>
                        <div className="other-video-sub-info">
                            <div className="other-video-author">By <a className="other-video-author-link" href="https://www.youtube.com/channel/UCNcdbMyA59zE-Vk668bKWOg" target="_blank">Disney Junior</a> / <div className="other-video-release-date">Dec 2 2016</div></div>
                        </div>
                </div>
                <div className="other-video-card">
                        <div className="other-video-topic-three"><img className="other-video-topic-img-three" src="https://kmsptsa.ourschoolpages.com/Image/PantherPlayhouse/SE_HSM_Title.png"/></div>
                        <div onClick={() => this.toggleVideoPlayer("https://www.youtube.com/embed/0qj67KE5VXI")} className="other-video-thumbnail"><img className="other-video-thumbnail-img" src="https://i.ytimg.com/vi/0qj67KE5VXI/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCEMvIeOKp-MtRaMXiDi6hnMoASwQ"/></div>
                        <div className="other-video-title">Troy, Gabriella - Breaking Free (From "High School Musical")</div>
                        <div className="other-video-sub-info">
                            <div className="other-video-author">By <a className="other-video-author-link" href="https://www.youtube.com/user/DisneyMusicVEVO" target="_blank">DisneyMusicVEVO</a> / <div className="other-video-release-date">Aug 22 2019</div></div>
                        </div>
                </div>
                    <div className="other-video-card other-video-card-four">
                        <div className="other-video-topic-four"><img className="other-video-topic-img-four" src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Ducktales_80s_logo_transparent.png"/></div>
                        <div onClick={() => this.toggleVideoPlayer("https://www.youtube.com/embed/kwOommPOn28")} className="other-video-thumbnail"><img className="other-video-thumbnail-img" src="https://i.ytimg.com/vi/kwOommPOn28/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBbzm2MpdmX-HbeIq7Im63PImeEnw"/></div>
                        <div className="other-video-title">Della Reunites with Scrooge and the Boys!</div>
                        <div className="other-video-sub-info">
                            <div className="other-video-author">By <a className="other-video-author-link" href="https://www.youtube.com/user/disneyxd" target="_blank">Disney XD</a> / <div className="other-video-release-date">Mar 17 2020</div></div>
                        </div>
                </div>
            </div>
                {this.state.showVideoPlayer ? <VideoPlayer videoUrl={this.state.videoUrl} showVideoPlayer={this.state.showVideoPlayer}/> : null}
        </div>
        )
    }
}



export default Videos

