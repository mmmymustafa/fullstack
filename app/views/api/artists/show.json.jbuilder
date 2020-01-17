json.set! @artist.id do
    json.extract! @artist, :id, :name, :about, :picture_url, :header_pic_url
    json.trackIds @artist.tracks.pluck(:id)
    json.albumIds @artist.albums.pluck(:id)
end


