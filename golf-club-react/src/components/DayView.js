import React, { useEffect, useState } from "react";
import TimeCard from "./TimeCard";
import { useParams } from "react-router-dom";

export default function DayView({ apiReservations, removeTeeTime }) {
    // console.log(selectedDay)

    const [teeTimeTimeArrayUnix, setTeeTimeTimeArrayUnix] = useState([])

    const { id } = useParams()
    
    const selectedDayConverted = new Date(parseInt(id))

    const apiReservationTimes = apiReservations.map(reservation => reservation.reservation_time) 
    // console.log(typeof(apiReservationTimes))
    
    useEffect(() => {

        function addMinutes(selectedDayConverted) {
            // console.log(id)
            // console.log(selectedDayConverted)    
            const tempArr = []
            //set the number of times it needs to add 13 min
            const n = 43
                for (let i = 0; i < n; i++) {
                    const newTeeTimeHours = parseInt(selectedDayConverted.setMinutes(selectedDayConverted.getMinutes() + 13))
                    // tempArr.push(newTeeTimeHours)
                    // console.log(tempArr)
                    for (let j = 0; j < apiReservationTimes.length; j++ ) {                        
                        if (newTeeTimeHours === parseInt(apiReservationTimes)){
                            console.log(`${newTeeTimeHours} already booked`)
                        } else {
                            tempArr.push(newTeeTimeHours)
                        }
                    }
                }
                setTeeTimeTimeArrayUnix(tempArr)
        }

// +++++++++++++++++++++

// +++++++++++++++++++++
        addMinutes(selectedDayConverted)
        
    }, [apiReservations])

    // 1662498360262

    const mapAvailableTeeTimeTimeArray = teeTimeTimeArrayUnix.map(teeTime => {
        return (
            // console.log(time)
            <TimeCard key={teeTime} teeTime={teeTime} removeTeeTime={removeTeeTime}/>
        )
    })

   

    // setAvailableTeeTimeTimeArray(availableTeeTimeTimeArray.filter(teeTime => teeTime!== "something"))
    // setAvailableTeeTimeTimeArray(availableTeeTimeTimeArray.filter(teeTime => teeTime !== removedTeeTime))

    return (
        <div>
            DAY VIEW
            <div>---------------------</div> 
            {mapAvailableTeeTimeTimeArray}
            <div>---------------------</div> 
        </div>
    )
}