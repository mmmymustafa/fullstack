json.extract! @annotation, :id, :user_id, :track_id, :body, :selected_lyrics
json.author @annotation.user.username
