import React from "react";
import MonthViewCard from "./MonthViewCard";

export default function MonthView({ availableTeeTimeDayArray }) {
console.log(availableTeeTimeDayArray)
    //mapover the state array and return the DayCard.js component, send each day as props to DayComponent.js
    const mapAvailableTeeTimeTimeArrayDayView = availableTeeTimeDayArray.map(dayArray => {
        // console.log(dayArray)
        return (
            <MonthViewCard key={dayArray} dayArray={dayArray} />
        )
    })

    return (
        <div>
            <div> MONTH VIEW</div>
            <div className="month-view-main">
                {mapAvailableTeeTimeTimeArrayDayView}
            </div>
        </div>
    )
}