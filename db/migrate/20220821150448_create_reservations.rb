class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.integer :member_id
      t.integer :number_of_players
      t.integer :reservation_time

      t.timestamps
    end
  end
end
