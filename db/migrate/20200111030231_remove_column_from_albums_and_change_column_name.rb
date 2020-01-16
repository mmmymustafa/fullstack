class RemoveColumnFromAlbumsAndChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    remove_column :albums, :album_id
    rename_column :albums, :body, :about
  end
end
