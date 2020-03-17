export const fetchUpvotes = () => (
    $.ajax({
        method: 'GET',
        url: `api/upvotes`
    })
);
export const createUpvote = upvote => (
    $.ajax({
        method: 'POST',
        url: `/api/upvotes`,
        data: { upvote }
    })
);

export const updateUpvote = (upvote) => (
    $.ajax({
        url: `/api/upvotes/${upvote.id}`,
        method: 'PATCH',
        data: { upvote }
    })
)

export const destroyUpvote = (id) => (
    $.ajax({
        url: `/api/upvotes/${id}`,
        method: 'DELETE',
    })
)
export const fetchUpvote = (id) => (
    $.ajax({
        url: `/api/upvotes/${id}`,
        method: 'GET',
    })
)