import React, { useEffect, useState } from "react";
import TimeCard from "./TimeCard";
import { useParams } from "react-router-dom";

export default function DayCard({ removeTeeTime }) {
    // console.log(selectedDay)
    // const selectedDayConverted = new Date(selectedDay)
    // console.log(selectedDayConverted)
    const [availableTeeTimeTimeArray, setAvailableTeeTimeTimeArray] = useState([])

    const { id } = useParams()
    const selectedDayConverted = new Date(parseInt(id))
    // console.log(selectedDayConverted)

    useEffect(() => {
    
        const teeTimeTimeArrayUnix = []

        function addMinutes(selectedDayConverted) {
            console.log(id)
            // console.log(selectedDayConverted)    
            //set the number of times it needs to add 13 min
            const n = 43
                for (let i = 0; i < n; i++) {
                    let newTeeTimeHours = selectedDayConverted.setMinutes(selectedDayConverted.getMinutes() + 13)
                    console.log(newTeeTimeHours)  
                    teeTimeTimeArrayUnix.push(newTeeTimeHours)  
                }
        }
    
        addMinutes(selectedDayConverted)
        setAvailableTeeTimeTimeArray(teeTimeTimeArrayUnix)
    }, [])


    const mapAvailableTeeTimeTimeArray = availableTeeTimeTimeArray.map(teeTime => {
        return (
            // console.log(time)
            <TimeCard key={teeTime} teeTime={teeTime} removeTeeTime={removeTeeTime}/>
        )
    })

    

    return (
        <div>
            <div>---------------------</div> 
            {mapAvailableTeeTimeTimeArray}
            <div>---------------------</div> 
        </div>
    )
}