
import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TwoWeekCalendar from "./TwoWeekCalendar";
import DayCard from "./DayCard"
import MonthView from "./MonthView";


export default function LandingPage( ) {

    const [availableTeeTimeTimeArray, setAvailableTeeTimeTimeArray] = useState([])
   
    useEffect(() => {        
        const teeTimeTimeArrayUnix = []
        // console.log(teeTimeTimeArrayUnix)
        const chunkedArray = [];

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
                let newDayVersion = new Date(newTeeTimeDay)
                // console.log(newTeeTimeDay)
                addMinutes(newDayVersion)
            }
        }

        function addMinutes(teeTimeHours) {
            // console.log(typeof(teeTimeHours))
            // console.log(teeTimeHours)
            //set the number of times it needs to add 13 min
            const n = 43
                for (let i = 0; i < n; i++) {
                    let newTeeTimeHours = teeTimeHours.setMinutes(teeTimeHours.getMinutes() + 13)
                    console.log(newTeeTimeHours)  
                    teeTimeTimeArrayUnix.push(newTeeTimeHours)  
                    // let newTimeVersion = new Date(newTeeTimeHours)
                    // teeTimeTimeArrayUnix.push(newTimeVersion)    
                }
        }

        function chunk(array, chunkSize) {
            let counter = 0;
            while(counter < array.length) {
              chunkedArray.push(array.slice(counter, counter + chunkSize));  
              counter += chunkSize;
            }
            // console.log(chunkedArray)
            setAvailableTeeTimeTimeArray(chunkedArray)
          }

        // invoke indexDay and chunk function
        indexDay()
        chunk(teeTimeTimeArrayUnix, 43)
        
        // setAvailableTeeTimeTimeArray(teeTimeTimeArrayUnix)
        
    }, [])

    


// ++++++++++++++++++++++++++++++++++++++++++


function removeTeeTime(removedTeeTime) {
    // setAvailableTeeTimeTimeArray(availableTeeTimeTimeArray.filter(teeTime => teeTime !== removedTeeTime))
    console.log(removedTeeTime)
}



// +++++++++++++++++++++++++++++++++++++++++++


    return (
        <Router>
            <Routes>
                <Route path="/" element={<MonthView availableTeeTimeTimeArray={availableTeeTimeTimeArray}/>}/>
                <Route path="/day" element={<TwoWeekCalendar />}/>
            </Routes>
        </Router>
    )
}