class AddLyricsSelectedToAnnotations < ActiveRecord::Migration[5.2]
  def change
    add_column :annotations, :selected_lyrics, :string, null: false
  end
end
