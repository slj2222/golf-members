class Member < ApplicationRecord
    has_many :reservations
    has_secure_password
    
    validates :username, presence: true
    validates :password, presence: true
    validates :username, length: { minimum: 5 }
    validates :membership_number, presence: true



    def my_reservations
        self.reservations.map{|reservation| reservation}
    end
end
