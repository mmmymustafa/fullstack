class Annotation < ApplicationRecord
    validates :user_id, :track_id, :body, :selected_lyrics, presence: true

    belongs_to :user
    belongs_to :track
    has_many :comments, as: :commentable
end
