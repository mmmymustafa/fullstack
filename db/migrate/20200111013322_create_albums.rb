class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.string :release_date, null: false
      t.integer :user_id, null: false # user_id	integer	not null, indexed
      t.text :body, null: false, default: "" # body	text	not null
      t.timestamps
    end

    add_index :albums, :title
  end
end
