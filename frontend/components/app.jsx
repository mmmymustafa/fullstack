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
import IndexPage from './index_page/index_page';
import News from './index_page/news';
import TrackShowContainer from './track/track_show_container';
import ArtistShowContainer from './artist/artist_show_container';
import CreateAnnotationFormContainer from './annotation/create_annotation_form_container';
import EditAnnotationFormContainer from './annotation/edit_annotation_form_container';
import AnnotationShowContainer from './annotation/annotation_show_container';
import AlbumShowContainer from './album/album_show_container';
import Footer from './footer/footer';
import ArtistsListContainer from './artists_list/artist_list'

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
            <ProtectedRoute exact path="/annotations/:annotationId/edit" component={EditAnnotationFormContainer}/>
            <Route exact path="/tracks/:trackId" component={TrackShowContainer} />
            <Route exact path="/albums/:albumId" component={AlbumShowContainer} />
            <Route exact path="/artists/:artistId" component={ArtistShowContainer}/>
            <Route exact path="/annotations/:annotationId" component={AnnotationShowContainer}/>
            <Route exact path="/artists-list/:letter" component={ArtistsListContainer}/>
            <ProtectedRoute exact path="/annotations" component={CreateAnnotationFormContainer}/>
            <Route exact path="/featured"  component={News}/>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Route exact path="/" component={IndexPage}/>
        </Switch>
        <footer>
            <Footer component={Footer}/>
        </footer>
    </div>
);

export default App;