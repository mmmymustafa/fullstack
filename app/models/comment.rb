class Comment < ApplicationRecord
    validates :body, :user_id, :commentable_id, :commentable_type, presence: true

    belongs_to :user
    belongs_to :commentable,
    polymorphic: true
    has_many :upvotes, as: :voteable
end
