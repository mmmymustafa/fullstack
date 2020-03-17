json.extract! @annotation, :id, :user_id, :track_id, :body, :selected_lyrics
json.author @annotation.user.username
json.commentIds @annotation.comments.pluck(:id)
json.voteIds @annotation.upvotes.pluck(:id)