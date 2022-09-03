import React, { useEffect, useState } from "react";
import TimeCard from "./TimeCard";
import { useParams } from "react-router-dom";

export default function DayView({ apiReservations, removeTeeTime }) {
    // console.log(selectedDay)

    const [unixState, setUnixState] = useState([])
    console.log(`unixState: ${unixState}`)
    const [apiState, setApiState] = useState([])
    console.log(`apiState: ${apiState}`)

    const { id } = useParams()
    
    const selectedDayConverted = new Date(parseInt(id))
    
    useEffect(() => {
        
        const apiReservationTimes = apiReservations.map(reservation => reservation.reservation_time) 
        // console.log(typeof(apiReservationTimes))
        
        const tempApiRes = []
                
        apiReservationTimes.forEach(time => {
            tempApiRes.push(time)
            
        });

        setApiState(tempApiRes)

        function addMinutes(selectedDayConverted) {
            // console.log(id)
            // console.log(selectedDayConverted)    
            const tempUnixRes = []    
            //set the number of times it needs to add 13 min
            const n = 43
                for (let i = 0; i < n; i++) {
                    const newTeeTimeHours = parseInt(selectedDayConverted.setMinutes(selectedDayConverted.getMinutes() + 13))
                    // console.log(newTeeTimeHours)
                    tempUnixRes.push(newTeeTimeHours)
                }
                setUnixState(tempUnixRes)
        }

// +++++++++++++++++++++

// +++++++++++++++++++++
        addMinutes(selectedDayConverted)
        
    }, [apiReservations])



    
    const mapteeTimeTimeArrayUnix = unixState.filter(ttime => !apiState.includes(ttime)).map(teeTime => {
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
            {mapteeTimeTimeArrayUnix}
            <div>---------------------</div> 
        </div>
    )
}