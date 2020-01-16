class RemoveColumnFromAlbumsAndChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :albums, :body, :about
  end
end
