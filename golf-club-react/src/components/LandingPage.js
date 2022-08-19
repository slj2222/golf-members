import TwoWeekCalendar from "./TwoWeekCalendar"

export default function LandingPage( {allMembers} ) {
// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// const times = ["7:00 am", "8:00 am", "9:00 am", "12:00 pm", "1:00 pm", "2:00 pm"]


  


    function addMinutes(date = new Date('August 19, 2022 07:00:00')) {
        date.setMinutes(date.getMinutes() + 13)
        console.log(date)
    }

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