import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import TrackShow from '../track/track_show';

class ArtistShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            albumCover: ""
        }
    }

    componentDidMount() {
        this.props.fetchArtist(this.props.artistId)
            .then(() => this.props.fetchAlbums())
            .then(() => this.props.fetchTracks())
            // .then(() => {debugger})
            // .then(() => { return this.setState({albumCover: document.getElementsByClassName("track-album-cover").innerHTML})})
    }



    render() {
        // const fetchArtistTracks = () => {
        // this.props.artist.trackIds.map((trackId) => <p>{this.props.tracks[trackId].title}</p>)
        // }
        if(this.props.tracks === undefined || this.props.tracks[0] === undefined) return null;

        return (
            <div className="artist-page">
                <div className="artist-header">
                    <img className="artist-img" src={this.props.artist.picture_url}/>
                    <h3 className="artist-featured-title">Featured</h3>
                </div>
                <div className="artist-body">
                <h1 className="artist-name">{this.props.artist.name}</h1>
                <div className="artist-body-contents">
                <div className="artist-about">
                    <p className="artist-about-title">About "{this.props.artist.name}"</p>
                    <p className="artist-about-body">{this.props.artist.about}</p>
                </div>
                <div className="artist-featured">
                <div className="artist-songs">
                    <h3 className="artist-songs-title">{this.props.artist.name} Songs</h3>
                    <ul className="artist-track-list">
                        {this.props.tracks.map(track => <Link className="artist-track-linkref" to={`/tracks/${track.id}`}>
                            <div className="artist-track-link">
                                <div className="artist-track-album-cover">
                                <img className="artist-track-cover-img" src={track.album_cover}/>
                                </div>
                                <div className="artist-track-info">
                                <p>{track.title}</p>
                                <p className="artist-name-track">{this.props.artist.name}</p>
                                </div>
                                <br/>
                            </div>
                            </Link>)}
                    </ul>
                </div>
                <div className="artist-albums">
                    <h3>{this.props.artist.name} Albums</h3>
                    <div className="artist-album-list">
                        {this.props.albums.map(album => <div className="artist-album-link"><Link to={`/albums/${album.id}`}>
                                                                <img className="artist-album-cover" src={album.album_cover_url} />
                                                                <p className="artist-album-title">{album.title}</p>
                                                                <p className="artist-album-year">{album.release_date.slice(album.release_date.length - 4)}</p>
                                                                </Link></div>)}
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                {/* <div hidden><TrackShow {...this.props} track={}/></div> */}
            </div>
        )
    }
}

export default ArtistShow;