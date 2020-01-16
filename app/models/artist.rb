class Artist < ApplicationRecord
    validates :name, :about, presence: true

    has_many :tracks
    has_many :albums
    has_one_attached :picture
    has_one_attached :banner_picture
end
