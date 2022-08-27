class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.integer :membership_number
      t.datetime :time

      t.timestamps
    end
  end
end
