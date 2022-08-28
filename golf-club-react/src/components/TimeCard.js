import React from "react";
import { Link } from "react-router-dom";

export default function TimeCard({ teeTime, removeTeeTime }) {
    // console.log(day)
    const timeConverted = new Date(teeTime)

    


    return (
        <div>
            <div>
                {/* {teeTime.getDay()} */}
                {timeConverted.toLocaleDateString()} - {timeConverted.toLocaleTimeString()}
                
            </div>
            <Link to={`/${teeTime}/reserve`}>
                <button>Reserve</button>
            </Link>
        </div>
    )
}