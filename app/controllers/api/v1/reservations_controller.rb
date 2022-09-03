class Api::V1::ReservationsController < ApplicationController
    
    def index 
        render json: Reservation.all
    end
    
    def create 
        newReservation = Reservation.create(newReservationParams)
        render json: newReservation
    end


    private
    def newReservationParams
        params.permit(:member_id, :reservation_time, :number_of_players)
    end
end
