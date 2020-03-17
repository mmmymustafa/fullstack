json.extract! @upvote, :id, :user_id, :voteable_id, :vote_type, :voteable_type
json.author @upvote.user.username
