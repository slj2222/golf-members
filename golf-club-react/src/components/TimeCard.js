import React from "react";
import { Link } from "react-router-dom";

export default function TimeCard({ teeTime, removeTeeTime, currentUser }) {
    // console.log(day)
    const timeConverted = new Date(teeTime)

    


    return (
        // <div className="timecard-outerdiv">
        //     <span className="timecard-span">
        //         {/* {teeTime.getDay()} */}
        //         {timeConverted.toLocaleDateString()} - {timeConverted.toLocaleTimeString()}
                
        //     </span>
        //     <Link to={`/${teeTime}/reserve`}>
        //         <span className="timecard-span">
        //             <button>Reserve</button>
        //         </span>
        //     </Link>
            
            
                
                    <tr className="table-row">
                        {/* {timeConverted.toLocaleDateString()} */}
                        <td className="table-data">
                            {timeConverted.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}
                        </td>
                        <td class_name="table-data">
                            <Link to={`/${teeTime}/reserve`}>
                                <button>Reserve</button>
                            </Link>
                        </td>
                    </tr>
                
            
        // </div>
    )
}