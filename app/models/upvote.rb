class Upvote < ApplicationRecord
    validates :vote_type, :user_id, :voteable_id, :voteable_type, presence: true
    
    belongs_to :user
    belongs_to :voteable,
    polymorphic: true
end
