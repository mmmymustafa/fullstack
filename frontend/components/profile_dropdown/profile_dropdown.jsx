import React from 'react';
// import { logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';


class ProfileDropdown extends React.Component {
    constructor() {
        super();
        this.state = { displayProfileMenu: false };
        this.showProfileMenu = this.showProfileMenu.bind(this);
        this.hideProfileMenu = this.hideProfileMenu.bind(this);

    };

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
                <div className="profile-button" onClick={this.showProfileMenu}>
                    <img className="profile-img" src="https://pic.chinesefontdesign.com/uploads/2014/08/2992e388d12934d7082c8527d3f6c9aa.gif" />
                    </div>
                {this.state.displayMenu ? (
                    <ul className="profile-dropdown">
                        <li className="dropdown-header"><p>ACCOUNT</p></li>
                        <li className="dropdown-item"><Link className="dropdown-item-link" to="/">View Profile</Link></li> {/*add user/:id from backend*/}
                        <li className="dropdown-item"><Link className="dropdown-item-link" to="/">Report a Problem</Link></li> {/*add report problem link later*/}
                        <li className="dropdown-item"><div className="logout-button" onClick={this.props.logout}>Sign Out</div></li>
                        <li className="dropdown-item"><Link className="dropdown-item-link" to="/">Firehose</Link></li> {/*add firehose which is showing all theactivities from all users going on link later*/}
                    </ul>) : null}
            </div>

        );
    }
}

export default ProfileDropdown

// source: https://www.skptricks.com/2018/05/create-dropdown-using-reactjs.html 
// by Sumit Kumar Pradhan on May 13, 2018 May 13, 2018 in REACT, web development