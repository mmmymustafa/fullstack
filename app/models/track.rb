class Track < ApplicationRecord
    validates :title, :artist_id, :album_id, :about, :lyrics, presence: true

    belongs_to :artist
    belongs_to :album
    has_many :annotations
    has_many :comments, as: :commentable
    
end
