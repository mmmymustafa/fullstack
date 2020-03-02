json.annotation do
    json.extract! @annotation, :id, :user_id, :track_id, :body, :selected_lyrics
    json.author @annotation.user.username
end

json.track do
    json.extract! @track, :id, :title, :album_id, :artist_id, :about, :lyrics
    json.annotated_lyrics @track.annotations.pluck(:selected_lyrics)
    json.annotationIds @track.annotations.pluck(:id)
end
