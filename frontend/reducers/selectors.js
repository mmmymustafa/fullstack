export const selectTrack = ({ tracks }, trackId) => {
    return tracks[trackId] || {};
};

export const selectAlbum = ({ albums }, albumId) => {
    return albums[albumId] || {};
};

export const selectAnnotation = ({ annotations }, annotationId) => {
    return annotations[annotationId] || {};
};

export const selectUser = ({ users }, userId) => {
    return users[userId] || {};
};

export const selectTracksAlbum = ({ albums }, track) => {
    return albums[track.album_id] || {};
};

export const selectTracksArtist = ({ artists }, track) => {
    return artists[track.artist_id] || {};
};

export const selectAlbumsArtist = ({ artists }, album) => {
    return artists[album.artist_id] || {};
};

export const selectAlbumsTracks = ({ tracks }, album) => {
    return album.tracksIds.map(id => tracks[id])
};

export const selectTracksAnnotations = ({ annotations }, track) => {
    return track.annotationIds.map(id => annotations[id])
};

export const selectArtist = ({ artists }, artistId) => {
    return artists[artistId] || {};
}

export const selectArtistTracks = ({ tracks }, artist) => {
    return artist.trackIds.map(trackId => tracks[trackId])
}

export const selectArtistAlbums = ({ albums }, artist) => {
    return artist.albumIds.map(albumId => albums[albumId])
}

export const selectAllTracks = state => Object.values(state.entities.tracks);

export const selectAllAlbums = state => Object.values(state.entities.albums);

export const selectAllArtists = state => Object.values(state.entities.artists);




