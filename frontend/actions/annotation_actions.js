import * as AnnotationApiUtil from '../util/annotation_api_util';

export const RECEIVE_ANNOTATION = 'RECEIVE_ANNOTATION';
export const RECEIVE_ANNOTATION_AND_TRACK = 'RECEIVE_ANNOTATION_AND_TRACK';

const receiveAnnotation = annotation => ({
    type: RECEIVE_ANNOTATION,
    annotation
})

const receiveAnnotationAndTrack = payload => ({
    type: RECEIVE_ANNOTATION_AND_TRACK,
    payload
})

export const fetchAnnotation = annotationId => dispatch => {
    return AnnotationApiUtil.fetchAnnotation(annotationId)
        .then(annotation => dispatch(receiveAnnotation(annotation)))
}

export const createAnnotation = (annotation) => dispatch => {
    return AnnotationApiUtil.createAnnotation(annotation)
        .then(payload => dispatch(receiveAnnotationAndTrack(payload)));
}

export const updateAnnotation = (annotation) => dispatch => {
    return AnnotationApiUtil.updateAnnotation(annotation)
        .then(annotation => dispatch(receiveAnnotation(annotation)));
}