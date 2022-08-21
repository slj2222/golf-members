
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
        // console.log(teeTimeTimeArray)

        //get todays date and set time to 6:47am to offset the start time of 7:00am in for loop
        const todaysDate = new Date().setHours(6,47,0)
        // console.log(todaysDate)
        //converts back to date/time object with another new Date()
        const resetTime = (new Date(todaysDate))
        // console.log(resetTime)
        function addMinutes(teeTimeHours) {
            // console.log(typeof(todaysDate))
            //set the number of times it needs to add 13 min
            const n = 43
                for (let i = 0; i < n; i++) {
                    let newTeeTimeHours = teeTimeHours.setMinutes(teeTimeHours.getMinutes() + 13)
                    // console.log(newTeeTimeHours)    
                    let newTimeVersion = new Date(newTeeTimeHours)
                    teeTimeTimeArrayUnix.push(newTimeVersion)    
                }
                // console.log(teeTimeTimeArray)
        }
        addMinutes(resetTime)
        

        setAvailableTeeTimeTimeArray(teeTimeTimeArrayUnix)
        
        
    }, [])

    // console.log(availableTeeTimeTimeArray)
    
    const mapAvailableTeeTimeTimeArray = availableTeeTimeTimeArray.map(time => {
        return (
            // console.log(time)
            <TimeCard key={time} date={time.toLocaleDateString()} time={time.toLocaleTimeString()} />
        )
    })


    // function addDays(date = new Date()) {
    //     date.setDate(date.getDate() + 1)
    //     // console.log(date)
    // }
    // addDays()
  



    // const n = 10
    // for (let i = 0; i < n; i++) { 
    //  addMinutes()
    // }
        
    



    return (
        <div>
            {mapAvailableTeeTimeTimeArray}
        </div>
    )
}