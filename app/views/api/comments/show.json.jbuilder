json.extract! @comment, :id, :user_id, :commentable_id, :body, :commentable_type, :created_at
json.author @comment.user.username
json.voteIds @comment.upvotes.pluck(:id)


