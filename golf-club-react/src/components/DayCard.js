import React from "react";
import TimeCard from "./TimeCard";

export default function DayCard({ selectedDay, removeTeeTime }) {

    
    



    const mapSelectedDay = selectedDay.map(teeTime => {
        return (
            // console.log(time)
            <TimeCard key={teeTime} teeTime={teeTime} removeTeeTime={removeTeeTime}/>
        )
    })

    

    return (
        <div>
            <div>---------------------</div> 
            {mapSelectedDay}
            <div>---------------------</div> 
        </div>
    )
}