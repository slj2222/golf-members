import React from "react";
import MonthViewCard from "./MonthViewCard";

export default function MonthView({ availableTeeTimeTimeArray, setSelectedDay }) {

    //mapover the state array and return the DayCard.js component, send each day as props to DayComponent.js
    const mapAvailableTeeTimeTimeArrayDayView = availableTeeTimeTimeArray.map(dayArray => {
        // console.log(dayArray)
        return (
            <MonthViewCard key={dayArray[0]} dayArray={dayArray} setSelectedDay={setSelectedDay}/>
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