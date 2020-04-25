class AddTrackLinkColumnToTracksTable < ActiveRecord::Migration[5.2]
  def change
        add_column :tracks, :track_link, :string
  end
end
