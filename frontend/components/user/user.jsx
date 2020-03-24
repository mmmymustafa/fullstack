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
        <div className="header-group">
            <ProfileDropdown logout={logout} curUserId = {currentUser}/>
        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default User;