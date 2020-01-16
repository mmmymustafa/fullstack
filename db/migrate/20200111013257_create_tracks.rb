class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :title, null: false  # title	string	not null, indexed
      t.integer :artist_id, null: false  # artist_id	integer	not null, indexed
      t.integer :album_id, null: false  # album_id	integer	not null, indexed
      t.text :about, default: "" ,null: false  # about	text not null
      t.text :lyrics, null: false  # lyrics	text	not null

      t.timestamps
    end

    add_index :tracks, :title
    add_index :tracks, :artist_id
    add_index :tracks, :album_id
  end
end
