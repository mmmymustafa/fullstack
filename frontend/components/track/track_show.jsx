import React from 'react';
import { Link } from 'react-router-dom';
import LyricsContainer from './lyrics_container';
import TrackCommentFormContainer from '../comments/track_create_comment_form_container';
import TrackCommentShowContainer from '../comments/track_comment_show_container';
import ArtistTooltip from '../artist/artist_tooltip'

class TrackShow extends React.Component{
    constructor(props){
        super(props)
        // let heightDelta;
        // if (document.querySelector('.footer').getBoundingClientRect() && document.querySelector('#player-container').getBoundingClientRect()){
        //     heightDelta = window.scrollY + document.querySelector('.footer').getBoundingClientRect().top - window.scrollY + document.querySelector('#player-container').getBoundingClientRect().top
        // } 
        this.state = {
            showTooltip: false,
            player : false,
            // scrollStop: heightDelta >= 195.1875 ? true : false
        }
        this.toggleShowTooltip = this.toggleShowTooltip.bind(this)
        this.showPlayer = this.showPlayer.bind(this)
        this.hidePlayer = this.hidePlayer.bind(this)
        this.samplePlayerScroll = this.samplePlayerScroll.bind(this)
    }

    componentDidMount() {
        this.props.fetchTrack(this.props.trackId)
        .then(() => this.props.fetchArtist(this.props.track.artist_id))
        .then(() => this.props.fetchAlbum(this.props.track.album_id))
        .then(() => this.props.track.annotationIds.map((annId) => this.props.fetchAnnotation(annId)))
        .then(() => this.props.fetchUpvotes())
        .then(() => this.props.fetchTrackComments(this.props.trackId))
    }

    toggleShowTooltip() {
        if (document.getElementsByClassName("track-artist-name")[0]) {
            const artistLink = document.getElementsByClassName("track-artist-name")[0];
            artistLink.onmouseenter = () => (this.setState({ showTooltip: true }))
            artistLink.onmouseleave = () => (this.setState({ showTooltip: false }))
        }
    }

    samplePlayerScroll(){
        $(window).scroll(function () {
            $("#player-container").css("top", Math.min(450, (window.scrollY + document.querySelector('.footer').getBoundingClientRect().top - 195.1875) - $(this).scrollTop()));
        });
    }

    showPlayer(){
        this.setState({player: true})
    }

    hidePlayer(){
        this.setState({player: false})
    }

    render() {
        this.samplePlayerScroll()
        this.toggleShowTooltip()
        return (
          <div className="track-page">
                <div className="track-sample-player-containter" id="player-container">
                    {!this.state.player ? <div className="toggle-player-button-container"><div onClick={this.showPlayer} className="toggle-player-button">SHOW MUSIC PLAYER</div> </div> : <div className="iframe-container"><div className="hide-player-button-container"><div onClick={this.hidePlayer} className="hide-player-button">x</div></div><iframe allow="autoplay *; encrypted-media *;" className="track-sample-player" frameborder="0" height="150" style={{ width: "88%", overflow: "hidden", background: "transparent", border: "solid" }} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/let-it-go/1440626755?i=1440626764&app=music"></iframe></div>}
            </div>
            <div className="track-header">
                    <img className={`track-album-cover ${this.props.track.id}`} src={this.props.album.album_cover_url}/>
                {/* Using Frozen Soundtrack picture only for testing purposes */}
                <div className="track-header-titles">
                <span className="track-title"><h2>{this.props.track.title}</h2></span>
                <div id="track-artist-name"><Link to={`/artists/${this.props.artist.id}`} className="track-artist-name">{this.props.artist.name}</Link></div>
                        <span id="track-album-title">Album<Link to={`/albums/${this.props.track.album_id}`} className="track-album-title">{this.props.album.title}</Link><ArtistTooltip artist={this.props.artist} showTooltip={this.state.showTooltip} /></span>
                </div>
            </div>
            <div className="track-body">
                <p className="track-lyrics-title">{this.props.track.title} lyrics</p>
                <LyricsContainer />
                <div className="comments-component">
                <div className="comments-form">
                <TrackCommentFormContainer trackId={this.props.track.id} commentableType="Track" userId={this.props.userId}/>
                </div>
                <div className="comments">
                <TrackCommentShowContainer comments={this.props.comments} upvotes={this.props.upvotes}/>
                </div>
                </div>
            </div >
            
          </div>
        )
    }
}

export default TrackShow;