import React, { useEffect, useState } from "react";
import TimeCard from "./TimeCard";
import { useParams } from "react-router-dom";

export default function DayView({ apiReservations, removeTeeTime }) {
    // console.log(selectedDay)

    const [temp1, setTemp1] = useState([])
    console.log(`temp1: ${temp1}`)
    const [temp2, setTemp2] = useState([])
    console.log(`temp2: ${temp2}`)

    const { id } = useParams()
    
    const selectedDayConverted = new Date(parseInt(id))
    
    useEffect(() => {
        
        const apiReservationTimes = apiReservations.map(reservation => reservation.reservation_time) 
        // console.log(typeof(apiReservationTimes))
        
        const tempArr2 = []
                
        apiReservationTimes.forEach(time => {
            tempArr2.push(time)
            
        });

        setTemp2(tempArr2)

        function addMinutes(selectedDayConverted) {
            // console.log(id)
            // console.log(selectedDayConverted)    
            const tempArr1 = []    
            //set the number of times it needs to add 13 min
            const n = 43
                for (let i = 0; i < n; i++) {
                    const newTeeTimeHours = parseInt(selectedDayConverted.setMinutes(selectedDayConverted.getMinutes() + 13))
                    // console.log(newTeeTimeHours)
                    tempArr1.push(newTeeTimeHours)
                }
                setTemp1(tempArr1)
        }

// +++++++++++++++++++++

// +++++++++++++++++++++
        addMinutes(selectedDayConverted)
        
    }, [apiReservations])



    
    const mapteeTimeTimeArrayUnix = temp1.filter(ttime => !temp2.includes(ttime)).map(teeTime => {
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