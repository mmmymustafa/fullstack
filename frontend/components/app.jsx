import React from "react";
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import UserContainer from './user/user_container';
import Search from './search/search';
import SubHeader from './sub_header/sub_header';


const App = () => (
    <div>
        <header>
            <Search />
            <Link to="/" className="header-link">
                <h1>Disneyus</h1>
            </Link>
            <UserContainer />
        </header>
        <subheader>
            <SubHeader />
        </subheader>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Route exact path="/" />
        </Switch>
    </div>
);

export default App;