import React from "react";
import { Link } from "react-router-dom";


export default function MonthViewCard({ dayArray, setSelectedDay }) {
    

    const converted =  new Date(dayArray[0])
    // console.log(converted)

    function handleClick(dayArray) {
        // console.log(dayArray)
        setSelectedDay(dayArray)
    }

    

    return(
        <Link to={`/${dayArray[0]}`} className="month-view-outer" onClick={() => handleClick(dayArray)}>
            <div >
                <div className="month-view-card">
                    {converted.toLocaleDateString()}
                </div>
            </div>
        </Link> 
    )
}