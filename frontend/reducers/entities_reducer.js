import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import artistsReducer from "./artists_reducer";
import albumsReducer from "./albums_reducer";
import tracksReducer from "./tracks_reducer";
import annotationsReducer from "./annotations_reducer";
import commentsReducer from "./comments_reducer";
import upvotesReducer from "./upvotes_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    artists: artistsReducer,
    albums: albumsReducer,
    tracks: tracksReducer,
    annotations: annotationsReducer,
    comments: commentsReducer,
    upvotes: upvotesReducer
});

export default entitiesReducer;