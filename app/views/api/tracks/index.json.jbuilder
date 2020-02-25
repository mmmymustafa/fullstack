@tracks.each do |track|
    json.set! track.id do
        json.extract! track, :id, :title, :album_id, :artist_id, :about, :lyrics
        json.annotated_lyrics track.annotations.pluck(:selected_lyrics)
        json.annotationIds track.annotations.pluck(:id)
        json.album_cover track.album.album_cover_url
    end
end

