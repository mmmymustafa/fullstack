import React from 'react';
import { Link } from 'react-router-dom'

class SubHeader extends React.Component {
    render() {
        return (
            <div className="sub-header">
                <Link to="/featured" className="sub-path" id="no-border-sub">FEATURED</Link>
                <br/>
                <Link to="/" className="sub-path">CHARTS</Link>
                <br/>
                <Link to="/" className="sub-path">VIDEOS</Link>
            </div>
        )
    }
}

export default SubHeader;