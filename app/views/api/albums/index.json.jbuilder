@albums.each do |album|
    json.set! album.id do
        json.extract! album, :id, :title, :release_date, :artist_id, :about
    end
end