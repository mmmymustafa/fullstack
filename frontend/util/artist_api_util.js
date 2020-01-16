export const fetchArtists = id => (
    $.ajax({
        method: 'GET',
        url: `api/artists`
    })
);

export const fetchArtist = id => (
    $.ajax({
        method: 'GET',
        url: `api/artists/${id}`
    })
);