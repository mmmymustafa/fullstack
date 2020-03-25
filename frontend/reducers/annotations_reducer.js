import { RECEIVE_ANNOTATION, RECEIVE_ANNOTATIONS, RECEIVE_ANNOTATION_AND_TRACK, REMOVE_ANNOTATION } from '../actions/annotation_actions';

const annotationsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ANNOTATIONS:
            return action.payload;
        case RECEIVE_ANNOTATION:
            newState[action.annotation.id] = action.annotation;
            return newState
        case RECEIVE_ANNOTATION_AND_TRACK:
            newState[action.payload.annotation.id] = action.payload.annotation;
            return newState
        case REMOVE_ANNOTATION:
            delete newState[action.payload.id];
            return newState
        default:
            return oldState;
    }
}

export default annotationsReducer;