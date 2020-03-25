import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAnnotations } from '../../actions/annotation_actions'


const mSTP = (state, ownProps) => {
    let userAnns = Object.values(state.entities.annotations).filter((ann) => ann.user_id === ownProps.curUserId)
    return {
        disneyPoints: userAnns.length * 5
    }
}

const mDTP = dispatch => ({
        fetchAnnotations: () => dispatch(fetchAnnotations())
})

class ProfileDropdown extends React.Component {
    constructor() {
        super();
        this.state = { displayProfileMenu: false };
        this.showProfileMenu = this.showProfileMenu.bind(this);
        this.hideProfileMenu = this.hideProfileMenu.bind(this);

    };

    componentDidMount(){
        this.props.fetchAnnotations()
    }

    showProfileMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideProfileMenu);
        });
    }

    hideProfileMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideProfileMenu);
        });

    }

    render() {
        return (
            <div className="dropdown">
                <div className="profile-buttons">
                    <div className="disneyus-points-container">
                        <div className="disneyus-points-text">DP: <div className="disneyus-points">{this.props.disneyPoints}</div></div>
                        <div className="hover-border dp"></div>
                    </div>
                    <div className="profile-pic-container" onClick={this.showProfileMenu}>
                        <img className="profile-img" src="https://pic.chinesefontdesign.com/uploads/2014/08/2992e388d12934d7082c8527d3f6c9aa.gif" />
                        <div className="hover-border img"></div>
                    </div>
                </div>
                {this.state.displayMenu ? (
                    <ul className="profile-dropdown">
                        <li className="dropdown-header"><p>ACCOUNT</p></li>
                        <div className="dropdown-item logout-button" onClick={this.props.logout}>Sign Out</div>
                    </ul>) : null}
            </div>

        );
    }
}

export default connect(mSTP, mDTP)(ProfileDropdown)

// source: https://www.skptricks.com/2018/05/create-dropdown-using-reactjs.html 
// by Sumit Kumar Pradhan on May 13, 2018 May 13, 2018 in REACT, web development