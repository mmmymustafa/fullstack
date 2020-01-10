import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => {
    return {
        demoUser: {
            username: 'HannahMontana4Ever',
            password: '123456'
        },
        user: {
            username: '',
            password: ''
        },
        errors: errors.session,
        formType: 'login',
        navLink: <Link className="testing" to="/signup">Sign up here.</Link>,
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
    };
};

export default connect(mSTP, mDTP)(SessionForm);