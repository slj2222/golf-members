class CreateReservationTimes < ActiveRecord::Migration[7.0]
  def change
    create_table :reservation_times do |t|
      t.integer :day_id
      t.string :res_time 
      t.timestamps
    end
  end
end
