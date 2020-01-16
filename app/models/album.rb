class Album < ApplicationRecord
    validates :title, :artist_id, :about, :release_date, presence: true

    belongs_to :artist
    has_many :tracks, dependent: :destroy
    has_one_attached :album_cover
    has_one_attached :track_banner
end
