class Reservation < ApplicationRecord
    belongs_to :member

    validates :reservation_time, uniqueness: true
end
