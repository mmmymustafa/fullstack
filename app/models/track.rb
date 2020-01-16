class Track < ApplicationRecord
    validates :title, :artist_id, :album_id, :about, :lyrics, presence: true

    belongs_to :artist
    belongs_to :album
end
