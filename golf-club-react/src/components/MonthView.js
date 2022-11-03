import React from "react";
import MonthViewCard from "./MonthViewCard";
import Calendar from 'react-calendar';

export default function MonthView({ availableTeeTimeDayArray, thisDay, setThisDay }) {
    
// console.log(availableTeeTimeDayArray)
    //mapover the state array and return the DayCard.js component, send each day as props to DayComponent.js
    const mapAvailableTeeTimeTimeArrayDayView = availableTeeTimeDayArray.map(dayArray => {
        // console.log(dayArray.toString().substring(0,9))
        const dayArrayZero = parseInt(dayArray.toString().substring(0,9) + "0000")
        
        return (
            <MonthViewCard key={dayArrayZero} dayArray={dayArrayZero} />
        )
    })

    return (
        <div>
            <div> MONTH VIEW</div>
            <div className="month-view-main">
                {mapAvailableTeeTimeTimeArrayDayView}
            </div>
            {/* <Calendar onChange={setThisDay} value={thisDay} /> */}
            
        </div>
    )
}