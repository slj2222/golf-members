import React from "react";
import { Link } from "react-router-dom";


export default function MonthViewCard({ dayArray }) {
    
    const converted =  new Date(dayArray)
    // console.log(converted)

    return(
        <Link to={`/${dayArray}`} className="month-view-outer" >
            <div >
                <div className="month-view-card">
                    {converted.toLocaleDateString()}
                </div>
            </div>
        </Link> 
    )
}