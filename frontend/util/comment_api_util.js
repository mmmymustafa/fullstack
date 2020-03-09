export const fetchAnnotationComments = id => (
    $.ajax({
        method: 'GET',
        url: `api/annotations/${id}/comments`
    })
);

export const fetchTrackComments = id => (
    $.ajax({
        method: 'GET',
        url: `api/tracks/${id}/comments`
    })
);

export const fetchAlbumComments = id => (
    $.ajax({
        method: 'GET',
        url: `api/albums/${id}/comments`
    })
);

export const createAnnotationComment = comment => (
    $.ajax({
        method: 'POST',
        url: `/api/annotations/${comment.commentable_id}/comments`,
        data: { comment }
    })
);

export const createTrackComment = comment => (
    $.ajax({
        method: 'POST',
        url: `/api/tracks/${comment.commentable_id}/comments`,
        data: { comment }
    })
);

export const createAlbumComment = comment => (
    $.ajax({
        method: 'POST',
        url: `/api/albums/${comment.commentable_id}/comments`,
        data: { comment }
    })
);

export const updateAnnotationComment = (comment) => (
    $.ajax({
        url: `/api/annotations/${comment.commentable_id}/comments/${comment.id}`,
        method: 'PATCH',
        data: { comment }
    })
)

export const updateTrackComment = (comment) => (
    $.ajax({
        url: `/api/tracks/${comment.commentable_id}/comments/${comment.id}`,
        method: 'PATCH',
        data: { comment }
    })
)

export const updateAlbumComment = (comment) => (
    $.ajax({
        url: `/api/albums/${comment.commentable_id}/comments/${comment.id}`,
        method: 'PATCH',
        data: { comment }
    })
)

export const destroyAnnotationComment = (comment) => (
    $.ajax({
        url: `/api/annotations/${comment.commentable_id}/comments/${comment.id}`,
        method: 'DELETE',
    })
)

export const destroyTrackComment = (comment) => (
    $.ajax({
        url: `/api/tracks/${comment.commentable_id}/comments/${comment.id}`,
        method: 'DELETE',
    })
)

export const destroyAlbumComment = (comment) => (
    $.ajax({
        url: `/api/albums/${comment.commentable_id}/comments/${comment.id}`,
        method: 'DELETE',
    })
)
export const fetchAnnotationComment = (annId, commId) => (
    $.ajax({
        url: `/api/annotations/${annId}/comments/${commId}`,
        method: 'GET',
    })
)

export const fetchTrackComment = (trackId, commId) => (
    $.ajax({
        url: `/api/tracks/${trackId}/comments/${commId}`,
        method: 'GET',
    })
)

export const fetchAlbumComment = (albumId, commId) => (
    $.ajax({
        url: `/api/albums/${albumId}/comments/${commId}`,
        method: 'GET',
    })
)







