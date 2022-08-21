import React from "react";
import TimeCard from "./TimeCard";

export default function DayCard({ dayArray }) {


    



    const mapDayArray = dayArray.map(time => {
        return (
            // console.log(time)
            <TimeCard key={time} date={time.toLocaleDateString()} time={time.toLocaleTimeString()} />
        )
    })

    

    return (
        <div>
            
                {mapDayArray}
            <div>________________________</div>
        </div>
    )
}