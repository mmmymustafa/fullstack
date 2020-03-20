import React from 'react';
import { fetchArtists } from '../../actions/artist_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const mSTP = (state, ownProps) => {
    let letter = ownProps.match.params.letter
    let artists = Object.values(state.entities.artists).filter((artist) => artist.name[0] === letter)
    return {
        artists,
        letter
    }
}

const mDTP = dispatch => ({
    fetchArtists: () => dispatch(fetchArtists()),
})

class ArtistsList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchArtists()
    }

    render(){
        return(
            <div className="artists-list-page">
                <div className="artists-list-nav">
                    <div className="artists-list-nav-header">Artists</div>
                    <div className="artists-list-nav-arrow">></div>
                    <div className="artists-list-letter">{this.props.letter}</div>
                </div>
                <div className="artists-list-header">All {this.props.letter} Artists on Disneyus</div>
                <div className="artists-list-all">
                    {this.props.artists.map(artist => <div className="artists-list-name"><Link className="artists-list-name-link" to={`/artists/${artist.id}`}>{artist.name}</Link></div>)}
                </div>
            </div>
        )
    }

}

export default connect(mSTP,mDTP)(ArtistsList)