import React from "react";

export default function TimeCard({ teeTime, removeTeeTime }) {
    // console.log(day)
    const timeConverted = new Date(teeTime)

    


    return (
        <div>
            <div>
                {/* {teeTime.getDay()} */}
                {timeConverted.toLocaleDateString()} - {timeConverted.toLocaleTimeString()}
            </div>
            
        </div>
    )
}