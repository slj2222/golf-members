import TwoWeekCalendar from "./TwoWeekCalendar"
import React from "react"
import { useState } from "react"

export default function LandingPage( {allMembers} ) {
// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// const times = ["7:00 am", "8:00 am", "9:00 am", "12:00 pm", "1:00 pm", "2:00 pm"]

const dayTwoWeeks = useState([])

    //get todays date and set time to 7:00am
    const todaysDate = new Date().setHours(7,0,0)
    //converst back to date/time object with another new Date()
    const resetTime = (new Date(todaysDate))
    // console.log(date)

    function addMinutes(todaysDate) {
        // console.log(typeof(todaysDate))

        // add 13 min to the time n times
        const n = 1
        for (let i=0; i<n; i++) {
            todaysDate.setMinutes(todaysDate.getMinutes() + 13)    
        }
        
        console.log(todaysDate)
    
    }
    addMinutes(resetTime)
    
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