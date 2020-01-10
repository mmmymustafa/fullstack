import React from 'react';
import { Link } from 'react-router-dom';
import ProfileDropdown from '../profile_dropdown/profile_dropdown'



const User = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">SIGN IN</Link>
            &nbsp; &nbsp;
            <Link to="/signup">SIGN UP</Link>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <button><i class="material-icons" id="activity-button">today</i></button>
            <button ><i class="material-icons" id="notification-button">notifications_active</i></button>
            <ProfileDropdown logout={logout}/>
            {/* <button className="profile-button" onClick={logout}><img className="profile-img" src="https://pic.chinesefontdesign.com/uploads/2014/08/2992e388d12934d7082c8527d3f6c9aa.gif"/></button> */}
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default User;