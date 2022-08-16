class CreateMembers < ActiveRecord::Migration[7.0]
  def change
    create_table :members do |t|
      t.string :first_name
      t.string :last_name
      t.integer :membership_number
      t.integer :phone_number
      t.string :email_address

      t.timestamps
    end
  end
end
