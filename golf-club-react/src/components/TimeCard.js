import React from "react";

export default function TimeCard({ date, time }) {
    // function timeConverted(oldTimeVersion) {
    //     let newTimeVersion = new Date(oldTimeVersion)
    //     console.log(newTimeVersion)
    // }
    // timeConverted(time)
    return (
        <div>
            date: {date}
            time: {time}
        </div>
    )
}