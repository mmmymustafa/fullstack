class Artist < ApplicationRecord
    validates :name, :about, presence: true

    has_many :tracks, dependent: :destroy
    has_many :albums, dependent: :destroy
end
