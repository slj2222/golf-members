import React from "react";
import { Link } from "react-router-dom";

export default function MonthViewCard({ dayArray }) {
    const converted =  new Date(dayArray[0])
    console.log(converted)

    function handleClick() {
        
        
        console.log("clicked")
    }


    return(
        <Link to="/day" className="month-view-outer">
            <div  onClick={() => handleClick()}>
                <div className="month-view-card">
                    {converted.toLocaleDateString()}
                </div>
            </div>
        </Link>
    )
}