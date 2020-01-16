import { RECEIVE_ANNOTATION } from '../actions/annotation_actions';

const annotationsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ANNOTATION:
            newState[action.annotation.id] = action.annotation;
            return newState
        default:
            return oldState;
    }
}

export default annotationsReducer;