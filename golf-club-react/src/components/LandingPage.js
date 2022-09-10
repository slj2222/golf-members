
import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import TwoWeekCalendar from "./TwoWeekCalendar";
import DayView from "./DayView"
import MonthView from "./MonthView"
import ReserveView from "./ReserveView";
import Navbar from "./Navbar";
import Login from "./Login";
import Signup from "./Signup";
import MyReservationsView from "./MyReservationsView";

export default function LandingPage({ currentUser, handleLogin, getCSRFToken, handleLogout }) {
    

    const [availableTeeTimeDayArray, setAvailableTeeTimeDayArray] = useState([])
    const [allPublicMembers, setAllPublicMembers] = useState([])
    // const [selectedDay, setSelectedDay] = useState([])
        // console.log(availableTeeTimeDayArray)
    // console.log(selectedDay)
   
     useEffect(() => {
    fetch("http://localhost:3000/api/v1/members")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setAllPublicMembers(data)
      })
  }, [])

    useEffect(() => {        
        const teeTimeDayArrayUnix = []
        // console.log(teeTimeDayArrayUnix)
        // const chunkedArray = [];

        function indexDay() {
            //get todays date and set time to 6:47am to offset the start time of 7:00am in for loop
            const changeHours = new Date().setHours(6,47,0)
            // console.log(changeHours)
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

const [apiReservations, setApiReservations] = useState([])
const [myReservations, setMyReservations] = useState([])

useEffect(() => {
    fetch("http://localhost:3000/api/v1/reservations")
        .then(res => res.json())
        .then(data => setApiReservations(data))
}, [])

useEffect(() => {
    fetch("http://localhost:3000/api/v1/myReservations", {
            credentials: 'include',
            headers: {
                'X-CSRF-Token': getCSRFToken(),
                "Content-Type": "application/json",
            },
        })
        .then(res => res.json())
        .then(data => console.log(data))
}, [currentUser])
// console.log(myReservations)


// +++++++++++++++++++++++++++++++++++++++++++


    return (
        <Router>
            {currentUser ? (
                <>
                    <Navbar currentUser={currentUser} handleLogout={handleLogout} getCSRFToken={getCSRFToken} allPublicMembers={allPublicMembers}/>
                    
                </>
            ) : null}
            <Routes>
                {currentUser ? (
                    <>
                        <Route path="/" element={<MonthView availableTeeTimeDayArray={availableTeeTimeDayArray} currentUser={currentUser} />}/>
                        <Route path="/:id" element={<DayView currentUser={currentUser} apiReservations={apiReservations}/>}/>
                        <Route path="/:id/reserve" element={<ReserveView getCSRFToken={getCSRFToken} currentUser={currentUser}/>}/>        
                        <Route path="/reservations" element={<MyReservationsView myReservations={myReservations} getCSRFToken={getCSRFToken} />} />
                    </>
                ) : (
                    <>
                        <Route path="/" element={<Login handleLogin={handleLogin} getCSRFToken={getCSRFToken}/>} />    
                        <Route path="/signup" element={<Signup getCSRFToken={getCSRFToken}/>} />
                    </>
                )}
            </Routes>
        </Router>
    )
}