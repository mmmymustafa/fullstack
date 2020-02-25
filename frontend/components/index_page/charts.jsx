import React from 'react';
import { Link } from 'react-router-dom';

class Charts extends React.Component{
    
    componentDidMount(){
        this.props.fetchTracks()
        this.props.fetchArtists()
    }

    componentWillUnmount(){
        
    }

    render(){
        return(
            <div className="charts">
                <div className="charts-headers">
                    <h1 className="charts-header-title">CHARTS</h1>
                    <h3 className="charts-header-sub">TRENDING ON DISNEYUS</h3>
                </div>
                <ol className="charts-list" type="1">
                    {this.props.tracks.map((track, idx) => {
                    return <div>
                    <Link to={`/tracks/${track.id}`}>
                        <li className="charts-item">
                        <p className="charts-bullets">{idx + 1}</p>
                                <div className='charts-album-artwork'><img className="charts-album-cover" src={track.album_cover} /></div>
                        <div className="charts-track-title">{track.title}<p className="charts-track-des">LYRICS</p></div>
                        <div className="charts-artist-name">{this.props.artists.map(artist => artist.id === track.artist_id ? artist.name : null)}</div>
                        </li>
                        </Link>
                    </div>})}
                </ol>
            </div>
        )
    }
}

export default Charts