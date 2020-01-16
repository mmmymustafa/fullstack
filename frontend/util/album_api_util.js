export const fetchAlbums = id => (
    $.ajax({
        method: 'GET',
        url: `api/albums`
    })
);

export const fetchAlbum = id => (
    $.ajax({
        method: 'GET',
        url: `api/albums/${id}`
    })
);