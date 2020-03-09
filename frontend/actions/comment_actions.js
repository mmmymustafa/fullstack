import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComments = payload => ({
    type: RECEIVE_COMMENTS,
    payload
})

const receiveComment = payload => ({
    type: RECEIVE_COMMENT,
    payload
})

const removeComment = () => ({
    type: REMOVE_COMMENT,
})

export const fetchAnnotationComments = annotationId => dispatch => {
    return CommentApiUtil.fetchAnnotationComments(annotationId)
        .then(payload => dispatch(receiveComments(payload)))
}

export const fetchTrackComments = trackId => dispatch => {
    return CommentApiUtil.fetchTrackComments(trackId)
        .then(payload => dispatch(receiveComments(payload)))
}

export const fetchAlbumComments = albumId => dispatch => {
    return CommentApiUtil.fetchAlbumComments(albumId)
        .then(payload => dispatch(receiveComments(payload)))
}

export const fetchAnnotationComment = (annId, commId) => dispatch => {
    return CommentApiUtil.fetchAnnotationComment(annId, commId)
        .then(payload => dispatch(receiveComment(payload)))
}

export const fetchTrackComment = (trackId, commId) => dispatch => {
    return CommentApiUtil.fetchTrackComment(trackId, commId)
        .then(payload => dispatch(receiveComment(payload)))
}

export const fetchAlbumComment = (albumId, commId) => dispatch => {
    return CommentApiUtil.fetchAlbumComment(albumId, commId)
        .then(payload => dispatch(receiveComment(payload)))
}

export const createAnnotationComment = comment => dispatch => {
    return CommentApiUtil.createAnnotationComment(comment)
        .then(payload => dispatch(receiveComment(payload)))
}

export const createTrackComment = comment => dispatch => {
    return CommentApiUtil.createTrackComment(comment)
        .then(payload => dispatch(receiveComment(payload)))
}

export const createAlbumComment = comment => dispatch => {
    return CommentApiUtil.createAlbumComment(comment)
        .then(payload => dispatch(receiveComment(payload)))
}

export const updateAnnotationComment = comment => dispatch => {
    return CommentApiUtil.updateAnnotationComment(comment)
        .then(payload => dispatch(receiveComment(payload)))
}

export const updateTrackComment = comment => dispatch => {
    return CommentApiUtil.updateTrackComment(comment)
        .then(payload => dispatch(receiveComment(payload)))
}

export const updateAlbumComment = comment => dispatch => {
    return CommentApiUtil.updateAlbumComment(comment)
        .then(payload => dispatch(receiveComment(payload)))
}

export const destroyAnnotationComment = comment => dispatch => {
    return CommentApiUtil.destroyAnnotationComment(comment)
        .then(() => dispatch(removeComment()))
}

export const destroyTrackComment = comment => dispatch => {
    return CommentApiUtil.destroyTrackComment(comment)
        .then(() => dispatch(removeComment()))
}

export const destroyAlbumComment = comment => dispatch => {
    return CommentApiUtil.destroyAlbumComment(comment)
        .then(() => dispatch(removeComment()))
}

