@upvotes.each do |upvote|
    json.set! upvote.id do
        json.extract! upvote, :id, :user_id, :voteable_id, :vote_type, :voteable_type, :created_at
        json.author upvote.user.username
    end
end