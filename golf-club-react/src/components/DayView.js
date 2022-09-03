import React, { useEffect, useState } from "react";
import TimeCard from "./TimeCard";
import { useParams } from "react-router-dom";

export default function DayView({ apiReservations, removeTeeTime }) {
    // console.log(selectedDay)
    // const selectedDayConverted = new Date(selectedDay)
    // console.log(selectedDayConverted)
    const [availableTeeTimeTimeArray, setAvailableTeeTimeTimeArray] = useState([])
    // console.log(availableTeeTimeTimeArray)
    const [teeTimeTimeArrayUnix, setTeeTimeTimeArrayUnix] = useState([])
    // console.log(teeTimeTimeArrayUnix)
    // const [apiReservationsReservationTime, setApiReservationsReservationTime] = useState([])
    // const [actualAvailableTeeTimeArray, setActualAvailableTeeTimeArray] = useState([])
    // console.log(apiReservationsReservationTime)
    const { id } = useParams()
    
    const selectedDayConverted = new Date(parseInt(id))
    // console.log(id)
    // console.log(selectedDayConverted)
    // console.log(teeTimeTimeArrayUnix)

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


                // const apiArr = []
        // console.log(apiArr)
        // console.log(apiReservations[1])
        // function mapApiReservations(apiReservations) {
            // const tempArr2 = []
            // console.log(tempArr2)
            
            // setApiReservationsReservationTime(apiReservationTimes)
            // const apiMap = apiReservations.map(reservation => reservation.reservation_time)

            // const spreadNewArr = [...apiArr, apiMap]
            // console.log(spreadNewArr)
        // }   
        // mapApiReservations(apiReservations)

        // function compareApiReservationsAndTeeTimeTimeArrayUnix(reservationTime){
        //     console.log(reservationTime)
        //     teeTimeTimeArrayUnix.filter(teeTime => reservationteeTime !== reservationTime))
        //     // console.log(filteredTeeTimes)
        //     // setAvailableTeeTimeTimeArray(filteredTeeTimes)
        // }
        // compareApiReservationsAndTeeTimeTimeArrayUnix(newArr)
        // console.log(teeTimeTimeArrayUnix)
        // console.log(newArr1)
        

                
        
        
        



// console.log(test)

// +++++++++++++++++++++
        addMinutes(selectedDayConverted)
        // setAvailableTeeTimeTimeArray(teeTimeTimeArrayUnix)
        // setAvailableTeeTimeTimeArray(end)
        // const end = teeTimeTimeArrayUnix.filter(time => time !== 1663016760417)
        const end = teeTimeTimeArrayUnix.filter(time => apiReservationTimes.includes(time))
        setAvailableTeeTimeTimeArray(end)
        console.log(end)
    }, [])

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