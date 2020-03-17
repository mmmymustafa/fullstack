@comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :id, :user_id, :commentable_id, :body, :commentable_type, :created_at
        json.author comment.user.username
        json.voteIds comment.upvotes.pluck(:id)
    end
end