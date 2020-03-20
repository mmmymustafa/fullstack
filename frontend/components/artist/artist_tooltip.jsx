import React from 'react';

class ArtistTooltip extends React.Component {
    render(){
        return(
            this.props.showTooltip === true ?
            <div className="artist-tooltip on right">
                <div className="tooltip-inner">
                    <div className="tooltip-content">
                        <div className="tooltip-artist-photo"><img className="tooltip-artist-img" src={this.props.artist.picture_url}/></div>
                        <div className="tooltip-artist-name">{this.props.artist.name}</div>
                    </div>
                        <div className="tooltip-artist-about">{this.props.artist.about}</div>
                </div> 
            </div> : null
        )
    }
}

export default ArtistTooltip;