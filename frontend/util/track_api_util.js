export const fetchTracks = id => (
    $.ajax({
        method: 'GET',
        url: `api/tracks`
    })
);

export const fetchTrack = id => (
    $.ajax({
        method: 'GET',
        url: `api/tracks/${id}`
    })
);