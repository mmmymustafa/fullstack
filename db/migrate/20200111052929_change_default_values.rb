class ChangeDefaultValues < ActiveRecord::Migration[5.2]
  def change
    change_column :artists, :about, :string, null: false
    remove_column :artists, :nickname
    change_column :tracks, :about, :string, null: false
    change_column :albums, :about, :string, null: false
  end
end
