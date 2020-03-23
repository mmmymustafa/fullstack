import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAlbums } from '../../actions/album_actions'
import { fetchArtists } from '../../actions/artist_actions'
import { fetchTracks } from '../../actions/track_actions'


const mSTP = (state, ownProps) => {
    return {
        tracks: state.entities.tracks,
        artists: state.entities.artists,
        albums: state.entities.albums
    }
}

const mDTP = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks()),
    fetchArtists: () => dispatch(fetchArtists()),
    fetchAlbums: () => dispatch(fetchAlbums())
})

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showDropdown: false,
            searchBody: "",
        }
        if (this.state.searchBody === ""){
            this.state.tracks = [];
            this.state.artists = [];
            this.state.albums = [];
        }
        this.toggleSearchDropdown = this.toggleSearchDropdown.bind(this)
        this.update = this.update.bind(this)
        this.resetSB = this.resetSB.bind(this)
    }

    componentDidMount(){
        this.props.fetchTracks()
        this.props.fetchArtists()
        this.props.fetchAlbums()
    }

    resetSB(){
        this.setState({tracks: [], albums: [], artists: [], searchBody: ""})
    }

    update() {
        const capitalize = (str) => {
            let splitStr = str.toLowerCase().split(' ');
            for (let i = 0; i < splitStr.length; i++) {
               
                splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
            }
            return splitStr.join(' ');
        }
        return e => {
            this.setState({ 
                            searchBody: e.currentTarget.value, 
                            tracks: e.currentTarget.value.length > 0 ? Object.values(this.props.tracks).filter((track) => track.title.includes(capitalize(e.currentTarget.value))) : [],
                            albums: e.currentTarget.value.length > 0 ? Object.values(this.props.albums).filter((album) => album.title.includes(capitalize(e.currentTarget.value))) : [],
                            artists: e.currentTarget.value.length > 0 ? Object.values(this.props.artists).filter((artist) => artist.name.includes(capitalize(e.currentTarget.value))) : [],

                          })
        }
    }

    toggleSearchDropdown() {
        this.setState({showDropdown: !this.state.showDropdown})
    }

    render(){
        return(
            <div className="search-bar">
                    <div className="search-bar-container">   
                    <input type="text" value={this.state.searchBody} onChange={this.update()} className="search-bar-input" placeholder="Search lyrics & more" />
                    <ul className="search-dropdown">
                    {this.state.tracks.length > 0 ? (
                        <ul className="track-search-dropdown">
                            <div className="search-tracks-header">SONGS</div>
                            {this.state.tracks.map(track => <Link onClick={this.resetSB} to={`/tracks/${track.id}`}>
                                <div className="artist-track-link search">
                                    <div className="artist-track-album-cover">
                                        <img className="artist-track-cover-img" src={track.album_cover} />
                                    </div>
                                    <div className="artist-track-info">
                                        <p>{track.title}</p>
                                        <p className="artist-name-track">{this.props.artists[track.artist_id].name}</p>
                                    </div>
                                    <br />
                                </div>
                            </Link>)}
                        </ul>) : null}
                    {this.state.artists.length > 0 ? (
                        <ul className="artist-search-dropdown">
                            <div className="search-artists-header">ARTISTS</div>
                                {this.state.artists.map(artist => <Link onClick={this.resetSB} to={`/artists/${artist.id}`}>
                                <div className="artist-link search">
                                    <div className="tooltip-content search">
                                        <div className="tooltip-artist-photo search"><img className="tooltip-artist-img search" src={artist.picture_url} /></div>
                                        <div className="tooltip-artist-name">{artist.name}</div>
                                    </div>
                                </div>
                            </Link>)}
                        </ul>) : null}
                    {this.state.albums.length > 0 ? (
                        <ul className="album-search-dropdown">
                        <div className="search-artists-header">ALBUMS</div>
                            <div className="album-search-container">
                                    {this.state.albums.map(album => <div className="album-link-search"><Link onClick={this.resetSB} to={`/albums/${album.id}`}>
                                    <img className="artist-album-cover search" src={album.album_cover_url} />
                                    <p className="artist-album-title">{album.title}</p>
                                    <p className="artist-album-year">{album.release_date.slice(album.release_date.length - 4)}</p>
                                </Link></div>)}</div>
                        </ul>) : null}
                    </ul>
                    </div> 
                <div type="submit" className="search-button">{this.state.searchBody.length === 0  ? <i id="search" class="material-icons">search</i> : <span onClick={this.resetSB} class="material-icons cancel">close</span>}</div>
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(Search);