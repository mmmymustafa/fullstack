@albums.each do |album|
    json.set! album.id do
        json.extract! album, :id, :title, :release_date, :artist_id, :about, :album_cover_url, :track_banner
    end
end