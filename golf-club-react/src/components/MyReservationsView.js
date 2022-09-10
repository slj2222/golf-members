import React, { useState, useEffect } from "react";
import MyReservationsCard from "./MyReservationsCard";

export default function MyReservationsView({ myReservations, getCSRFToken }) {
    // const [myReservations, setMyReservations] = useState([])
    // console.log(myReservations)
    
    // useEffect(() => {
    //     fetch("http://localhost:3000/api/v1/reservations", {
    //         method: "GET",
    //         credentials: 'include',
    //         headers: {
    //             'X-CSRF-Token': getCSRFToken(),
    //             "Content-Type": "application/json",
    //         },
    //     })
    //         .then(res => res.json())
    //         .then(data => setMyReservations(data))
    // }, [])

    
    const mapMyReservations = myReservations.map(myReservation => {
        // console.log(myReservation)
        return (
            <MyReservationsCard 
                key={myReservation.id} 
                myReservation={myReservation}
                getCSRFToken={getCSRFToken}
            />
        )
    })

    // console.log(myReservations)

    return (
        <div>
            {/* {myReservations !== [] ? {mapMyReservations} :<p>no reservations</p> } */}
            {mapMyReservations}
            
        </div>
    )
}