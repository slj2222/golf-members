import TwoWeekCalendar from "./TwoWeekCalendar"
import React, { useEffect, useState } from "react"


export default function LandingPage( {allMembers} ) {
// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// const times = ["7:00 am", "8:00 am", "9:00 am", "12:00 pm", "1:00 pm", "2:00 pm"]

// const dayTwoWeeks = useState([])
// const [teeTimeTimeArray, setTeeTimeTimeArray] = useState([])
// console.log(teeTimeTimeArray)
   
    useEffect(() => {
        
        const teeTimeTimeArray = []

        
        //get todays date and set time to 6:47am to offset the start time of 7:00am in for loop
        const todaysDate = new Date().setHours(6,47,0)
        //converst back to date/time object with another new Date()
        const resetTime = (new Date(todaysDate))
        // console.log(date)
        function addMinutes(todaysDate) {
            // console.log(typeof(todaysDate))
            //set the number of times it needs to add 13 min
            // const m = 1
            // for (let j = 0; j < m; j++) {
                // add 13 min to the time n times
                const n = 43
                for (let i = 0; i < n; i++) {
                    todaysDate.setMinutes(todaysDate.getMinutes() + 13)
                    // console.log(todaysDate)    
                    teeTimeTimeArray.push(todaysDate)
                }
                // console.log(todaysDate)
            // }
        }
        addMinutes(resetTime)
        console.log(teeTimeTimeArray)
    }, [])
    
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
            Test
        </div>
    )
}