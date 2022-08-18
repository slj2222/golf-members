class CreateTeeTimes < ActiveRecord::Migration[7.0]
  def change
    create_table :tee_times do |t|
      t.datetime :unix_time
      t.integer :member_id
      t.boolean :booked

      t.timestamps
    end
  end
end
