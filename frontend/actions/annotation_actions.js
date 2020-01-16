import * as AnnotationApiUtil from '../util/annotation_api_util';

export const RECEIVE_ANNOTATION = 'RECEIVE_ANNOTATION';

const receiveAnnotation = annotation => ({
    type: RECEIVE_ANNOTATION,
    annotation
})

export const fetchAnnotation= annotationId => dispatch => {
    return AnnotationApiUtil.fetchAnnotation(annotationId)
        .then(annotation => dispatch(receiveAnnotation(annotation)))
}

export const createAnnotation = (annotation) => dispatch => {
    return AnnotationApiUtil.createAnnotation(annotation)
        .then(annotation => dispatch(receiveAnnotation(annotation)));
}

export const updateAnnotation = (annotation) => dispatch => {
    return AnnotationApiUtil.updateAnnotation(annotation)
        .then(annotation => dispatch(receiveAnnotation(annotation)));
}