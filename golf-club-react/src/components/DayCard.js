import React from "react";
import TimeCard from "./TimeCard";

export default function DayCard({ dayArray, removeTeeTime }) {

    
    



    const mapDayArray = dayArray.map(teeTime => {
        return (
            // console.log(time)
            <TimeCard key={teeTime} teeTime={teeTime} removeTeeTime={removeTeeTime}/>
        )
    })

    

    return (
        <div>
            <div>---------------------</div> 
            {mapDayArray}
            <div>---------------------</div> 
        </div>
    )
}