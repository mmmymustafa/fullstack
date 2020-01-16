class CreateAnnotations < ActiveRecord::Migration[5.2]
  def change
    create_table :annotations do |t|
      t.integer :user_id, null: false   # user_id	integer	not null, indexed
      t.integer :track_id, null: false   # track_id	integer	not null, indexed
      t.text :body, null: false   # body	text	not null
      t.timestamps
    end

    add_index :annotations, :user_id
    add_index :annotations, :track_id
  end
end
