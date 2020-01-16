json.set! @artist.id do
    json.extract! @artist, :id, :name, :about
    json.trackIds @artist.tracks.pluck(:id)
    json.albumIds @artist.albums.pluck(:id)
end


