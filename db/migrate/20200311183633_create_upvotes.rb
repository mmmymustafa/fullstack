class CreateUpvotes < ActiveRecord::Migration[5.2]
  def change
    create_table :upvotes do |t|
      t.integer :user_id, null: false
      t.integer :voteable_id, null: false
      t.string :voteable_type, null: false
      t.string :vote_type, null: false
      t.timestamps
    end

    add_index :upvotes, :user_id
    add_index :upvotes, [:voteable_type, :voteable_id]
  end
end
