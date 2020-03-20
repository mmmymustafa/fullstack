json.extract! @album, :id, :title, :release_date, :artist_id, :about, :album_cover_url, :track_banner
json.tracksIds @album.tracks.pluck(:id)
