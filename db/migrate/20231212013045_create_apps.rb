class CreateApps < ActiveRecord::Migration[7.1]
  def change
    create_table :apps do |t|
      t.string :name
      t.text :description
      t.link :link
      t.string :demo

      t.timestamps
    end
  end
end

