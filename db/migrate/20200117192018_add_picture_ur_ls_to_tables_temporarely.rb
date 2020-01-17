class AddPictureUrLsToTablesTemporarely < ActiveRecord::Migration[5.2]
  def change
    add_column :artists, :picture_url, :string
    add_column :artists, :header_pic_url, :string
    add_column :albums, :album_cover_url, :string
    add_column :albums, :track_banner, :string
  end
end
