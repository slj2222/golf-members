class Api::V1::ReservationsController < ApplicationController
    def create 
        newReservation = Reservation.create(newReservationParams)
        render json: newReservation
    end


    private
    def newReservationParams
        params.permit( :member_id, :time)
    end
end