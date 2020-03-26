import React from 'react';
import { login } from '../../util/session_api_util';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
        .then(this.props.history.goBack())
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const demoUser = this.props.demoUser;
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="header-items">
                    {this.props.formType === 'login' ? <p className='welcome-text'>Sign In</p> : <p className='welcome-text'>SIGN UP</p>}
          <br />
                    {this.props.formType === 'signup' ? <p className='signup-text'>and show off your disneyus</p> : ''}
                    </div>
                    {this.renderErrors()}
            <div className="login-signup-form">
                        <br />
                        <label className="login-signup-label">Username
                        <br />
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-signup-input"
                            />
                        </label>
                        {this.props.formType === 'signup' ? <div>
                            <label className="login-signup-label">Email 
                            <br />
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-signup-input"
                            />
                        </label>
                        <br /></div> : null}
                        <label className="login-signup-label">Password 
                        <br />
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-signup-input"
                            />
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType === 'signup' ? 'Create Account' 
                        : 'Login'} />
                        {this.props.formType === 'login' ? <input className="session-submit" type="submit" value='demo-login' 
                            onClick={() => this.props.processForm(demoUser)} />: null}
                        <br/>
                        {this.props.formType === 'signup' ? <p className="navlink-text">Already have an account? {this.props.navLink}</p> 
                        : <p className="navlink-text">Don't have an account? {this.props.navLink}</p>}
            </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;