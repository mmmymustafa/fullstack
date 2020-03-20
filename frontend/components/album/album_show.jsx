import React from 'react';
import { Link } from 'react-router-dom';
import UpvoteContainer from '../upvote/upvote_container'
import AlbumCommentShowContainer from '../comments/album_comment_show_container';
import AlbumCommentFormContainer from '../comments/album_create_comment_form_container';
import ArtistTooltip from '../artist/artist_tooltip'

class AlbumShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showTooltip: false
        }
        this.toggleShowTooltip = this.toggleShowTooltip.bind(this)
    }

    componentDidMount() {
        this.props.fetchAlbum(this.props.albumId)
        .then(() => this.props.fetchArtist(this.props.album.artist_id))
        .then(() => this.props.fetchTracks())
        .then(() => this.props.fetchUpvotes())
        .then(() => this.props.fetchAlbumComments(this.props.albumId))
    }

    toggleShowTooltip(){
      if (document.getElementsByClassName("album-show-artist-link")[0]){
        const artistLink = document.getElementsByClassName("album-show-artist-link")[0];
        artistLink.onmouseenter = () => (this.setState({showTooltip: true}))
        artistLink.onmouseleave = () => (this.setState({showTooltip: false}))
      }
    }

    render() {
        this.toggleShowTooltip()
        // const fetchArtistTracks = () => {
        // this.props.artist.trackIds.map((trackId) => <p>{this.props.tracks[trackId].title}</p>)
        // }
        // if (this.props.artist === undefined || this.props.artist[0] === undefined) return null;
        return (
            <div className="album-show-page">
                <div className="album-show-banner">
                    <div className="album-show-cover">
                        <img className="album-show-cover-image" src={this.props.album.album_cover_url} />
                    </div>
                    <div className="album-show-info">
                        <p className="album-banner-header">ALBUM</p>
                        <div className="album-show-title">{this.props.album.title}</div>
                        {this.props.artist ? <div className="album-show-artist"><Link href="#"
                                                                                 className="album-show-artist-link tooltip-right"
                                                                                 to={`/artists/${this.props.artist.id}`}>{this.props.artist.name}</Link>
                                                                                 <ArtistTooltip artist={this.props.artist} showTooltip={this.state.showTooltip}/>
                                                                                 </div> : null}

                        <p className="album-show-release-date">Released {this.props.album.release_date}</p>
                    </div>
                </div>
                <div className="album-show-contents">
                    <div className="album-tracks-list">
                        <div className="album-tracks-list-header">{this.props.album.title ? this.props.album.title.toUpperCase() : null} TRACKLIST</div>
                        {this.props.tracks && this.props.tracks[0] !== undefined ? <ol className="album-show-track-list" type="1">
                            {this.props.tracks.map((track, idx) => {
                                return <div>
                                    <Link to={`/tracks/${track.id}`}>
                                        <li className="album-show-track-item">
                                            <p className="album-show-tracks-bullets">{idx + 1}</p>
                                            <div className="album-show-track-title">{track.title}<p className="album-show-track-des">LYRICS</p></div>
                                        </li>
                                    </Link>
                                </div>
                            })}
                        </ol> : null}
                    </div>
                    <div className="album-show-about">
                        <div className="album-show-about-header">about "{this.props.album.title}"</div>
                        <div className="album-show-about-body">{this.props.album.about}</div>
                    </div>
                </div>
                <div className="comments-component">
                    <div className="comments-form">
                        <AlbumCommentFormContainer albumId={this.props.album.id} commentableType="Album" userId={this.props.userId} />
                    </div>
                    <div className="comments">
                        <AlbumCommentShowContainer comments={this.props.comments} upvotes={this.props.upvotes} />
                    </div>
                </div>
            </div>
        )
    }
}

export default AlbumShow;