json.extract! @annotation, :id, :user_id, :track_id, :body
json.author @annotation.user.username