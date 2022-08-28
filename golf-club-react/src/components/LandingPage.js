
import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import TwoWeekCalendar from "./TwoWeekCalendar";
import DayView from "./DayView"
import MonthView from "./MonthView"
import ReserveView from "./ReserveView";
import Navbar from "./Navbar";


export default function LandingPage() {

    const [availableTeeTimeDayArray, setAvailableTeeTimeDayArray] = useState([])
    // const [selectedDay, setSelectedDay] = useState([])
        // console.log(availableTeeTimeDayArray)
    // console.log(selectedDay)
   
    useEffect(() => {        
        const teeTimeDayArrayUnix = []
        // console.log(teeTimeDayArrayUnix)
        // const chunkedArray = [];

        function indexDay() {
            //get todays date and set time to 6:47am to offset the start time of 7:00am in for loop
            const changeHours = new Date().setHours(6,47,0)
            //new date
            const withHoursChanged = new Date(changeHours)
            //gets previously changed time and changes the date back one day
            const changeDate = withHoursChanged.setDate(withHoursChanged.getDate() - 1)

            //converts back to date/time object with another new Date()
            const resetTime = new Date(changeDate)
            // console.log(resetTime)
            // addMinutes(resetTime)
            addDays(resetTime)
        }

        function addDays(teeTimeDays) {
            const n = 14
            for (let i = 0; i < n; i++) {
                let newTeeTimeDay = teeTimeDays.setDate(teeTimeDays.getDate() + 1)
                // console.log(newTeeTimeDay)
                teeTimeDayArrayUnix.push(newTeeTimeDay)
            }
        }


        // function chunk(array, chunkSize) {
        //     let counter = 0;
        //     while(counter < array.length) {
        //       chunkedArray.push(array.slice(counter, counter + chunkSize));  
        //       counter += chunkSize;
        //     }
        //     // console.log(chunkedArray)
        //     // setAvailableTeeTimeTimeArray(chunkedArray)
        //   }

        // invoke indexDay function
        indexDay()
        // chunk(teeTimeTimeArrayUnix, 43)
        
        setAvailableTeeTimeDayArray(teeTimeDayArrayUnix)
        
    }, [])

    


// ++++++++++++++++++++++++++++++++++++++++++


// function removeTeeTime(removedTeeTime) {
//     // setAvailableTeeTimeTimeArray(availableTeeTimeTimeArray.filter(teeTime => teeTime !== removedTeeTime))
//     // console.log(removedTeeTime)
// }



// +++++++++++++++++++++++++++++++++++++++++++


    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<MonthView availableTeeTimeDayArray={availableTeeTimeDayArray} />}/>
                <Route path="/:id" element={<DayView  />}/>
                <Route path="/:id/reserve" element={<ReserveView />}/>
            </Routes>
        </Router>
    )
}