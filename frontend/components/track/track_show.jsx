import React from 'react';
import { Link } from 'react-router-dom';
import LyricsContainer from './lyrics_container';

class TrackShow extends React.Component{
    componentDidMount() {
       this.props.fetchTrack(this.props.trackId)
           .then(() => this.props.fetchArtist(this.props.track.artist_id))
           .then(() => this.props.fetchAlbum(this.props.track.album_id))
           .then(() => this.props.track.annotationIds.map((annId) => this.props.fetchAnnotation(annId)))
    }
    


    render() {
        return (
          <div className="track-page">
            <div className="track-header">
                    <img className={`track-album-cover ${this.props.track.id}`} src={this.props.album.album_cover_url}/>
                {/* Using Frozen Soundtrack picture only for testing purposes */}
                <div className="track-header-titles">
                <span className="track-title"><h2>{this.props.track.title}</h2></span>
                <span id="track-artist-name"><Link to={`/artists/${this.props.artist.id}`} className="track-artist-name">{this.props.artist.name}</Link></span>
                <span id="track-album-title">Album<Link className="track-album-title">{this.props.album.title}</Link></span>
                </div>
            </div>
            <div className="track-body">
                <p className="track-lyrics-title">{this.props.track.title} lyrics</p>
                <LyricsContainer />
            </div >
          </div>
        )
    }
}

export default TrackShow;