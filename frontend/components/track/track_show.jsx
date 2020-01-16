import React from 'react';
import { Link } from 'react-router-dom';

class TrackShow extends React.Component{
    componentDidMount() {
       this.props.fetchTrack(this.props.trackId)
           .then(() => this.props.fetchArtist(this.props.track.artist_id))
           .then(() => this.props.fetchAlbum(this.props.track.album_id))
    }
    


    render() {
        if(this.props.track.lyrics === undefined) return null;
        const renderLyrics = () => (
            this.props.track.lyrics.split("\n").map((line) => <div className="lyrics-line">{line}</div>)
        )
        return (
          <div className="track-page">
            <div className="track-header">
                <img className="track-album-cover" src="https://upload.wikimedia.org/wikipedia/en/8/89/Frozen_2013_soundtrack.png"/>
                {/* Using Frozen Soundtrack picture only for testing purposes */}
                <div className="track-header-titles">
                <span className="track-title"><h2>{this.props.track.title}</h2></span>
                <span id="track-artist-name"><Link to={`/artists/${this.props.artist.id}`} className="track-artist-name">{this.props.artist.name}</Link></span>
                <span id="track-album-title">Album<Link className="track-album-title">{this.props.album.title}</Link></span>
                </div>
            </div>
            <div className="track-body">
                <div className="track-lyrics">
                        <p className="track-lyrics-title">{this.props.track.title} lyrics</p>
                        <span><p className="track-lyrics-body">{renderLyrics()}</p></span>
                </div>
            </div >
          </div>
        )
    }
}

export default TrackShow;