import React, { useEffect } from "react";

export default function MyReservationsCard({ myReservation, getCSRFToken}) {
    console.log(myReservation.reservation_time)
    const timeConverted = new Date(myReservation.reservation_time)
  

    return (
        <div>
            <span>
                {timeConverted.toLocaleDateString()}
            </span>
            <span>
                {timeConverted.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}
            </span>
        </div>
    )
}