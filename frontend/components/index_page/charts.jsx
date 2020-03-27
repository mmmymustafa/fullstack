import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchTracks } from '../../actions/track_actions';
import { fetchArtists } from '../../actions/artist_actions';
import { fetchAnnotation } from '../../actions/annotation_actions';
import { fetchAlbums } from '../../actions/album_actions';
import { selectAllTracks, selectAllAlbums, selectAllArtists } from '../../reducers/selectors';


const mSTP = (state, ownProps) => {
    const tracks = selectAllTracks(state);
    const trendingTracks = selectAllTracks(state).slice(0, 10);
    const artists = selectAllArtists(state);
    return {
        tracks,
        artists,
        trendingTracks
    }
}

const mDTP = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks()),
    fetchArtists: () => dispatch(fetchArtists()),
    fetchAnnotation: (id) => dispatch(fetchAnnotation(id))
})

class Charts extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            numTracks: 10
        }
        this.chartsListing = this.chartsListing.bind(this)
        this.loadHandle = this.loadHandle.bind(this)
    }
    
    componentDidMount(){
        this.props.fetchTracks()
        this.props.fetchArtists()
    }

    chartsListing(arr){
        return arr.map((track, idx) => {
            return <div className="charts-link-container">
                <Link to={`/tracks/${track.id}`}>
                    <li className="charts-item">
                        <p className="charts-bullets">{idx + 1}</p>
                        <div className='charts-album-artwork'><img className="charts-album-cover" src={track.album_cover} /></div>
                        <div className="charts-track-title">{track.title}<p className="charts-track-des">LYRICS</p></div>
                        <div className="charts-artist-name">{this.props.artists.map(artist => artist.id === track.artist_id ? artist.name : null)}</div>
                    </li>
                </Link>
            </div>
        })
    }

    loadHandle(){
       this.setState({numTracks: this.state.numTracks + 10})
    }

    render(){
        return(
            <div className="charts">
                <div className="charts-headers">
                    <h1 className="charts-header-title">CHARTS</h1>
                    <h3 className="charts-header-sub">TRENDING ON DISNEYUS</h3>
                </div>
                <ol className="charts-list" type="1">
                    <div className="charts-list-container">
                    {this.chartsListing(this.props.tracks.slice(0, this.state.numTracks))}
                    </div>
                </ol>
                <div className="charts-load-container"><div className="charts-load-button" onClick={this.loadHandle}>LOAD MORE</div></div>
            </div>
        )
    }
}

export default withRouter(connect(mSTP, mDTP)(Charts));
