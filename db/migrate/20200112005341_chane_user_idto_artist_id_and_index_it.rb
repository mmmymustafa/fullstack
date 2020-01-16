class ChaneUserIdtoArtistIdAndIndexIt < ActiveRecord::Migration[5.2]
  def change
    rename_column :albums, :user_id, :artist_id
    add_index :albums, :artist_id
  end
end
