
import React, { useEffect, useState } from "react"
import TimeCard from "./TimeCard"


export default function LandingPage( {allMembers} ) {
// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// const times = ["7:00 am", "8:00 am", "9:00 am", "12:00 pm", "1:00 pm", "2:00 pm"]

// const dayTwoWeeks = useState([])
const [availableTeeTimeTimeArray, setAvailableTeeTimeTimeArray] = useState([])
console.log(availableTeeTimeTimeArray)
   
    useEffect(() => {
        
        let teeTimeTimeArrayUnix = []
        console.log(teeTimeTimeArrayUnix)


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
                    // console.log(newTeeTimeHours)    
                    let newTimeVersion = new Date(newTeeTimeHours)
                    teeTimeTimeArrayUnix.push(newTimeVersion)    
                }
        }
        
        indexDay()
        setAvailableTeeTimeTimeArray(teeTimeTimeArrayUnix)
        
    }, [])


// ++++++++++++++++++++++++++++++++++++++++++



// +++++++++++++++++++++++++++++++++++++++++++
    
    const mapAvailableTeeTimeTimeArray = availableTeeTimeTimeArray.map(time => {
        return (
            // console.log(time)
            <TimeCard key={time} date={time.toLocaleDateString()} time={time.toLocaleTimeString()} />
        )
    })

    return (
        <div>
            {mapAvailableTeeTimeTimeArray}
        </div>
    )
}