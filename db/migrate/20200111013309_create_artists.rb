class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.string :name, null: false  # name	string	not null, indexed
      t.text :about, null: false, default: ""  # about	text	optional
      t.string :nickname, null: false, default: "" # nickname	string	optional, indexed
      t.timestamps
    end

    add_index :artists, :name
  end
end
