json.extract! @track, :id, :title, :album_id, :artist_id, :about, :lyrics
json.annotated_lyrics @track.annotations.pluck(:selected_lyrics)
json.annotationIds @track.annotations.pluck(:id)