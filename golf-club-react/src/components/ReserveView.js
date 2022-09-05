import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function ReserveView({ getCSRFToken }) {

    const { id } = useParams()
    const intId = parseInt(id)
    const timeConverted = new Date(intId)
    // console.log(timeConverted)
    const defaultPlayers = 1
    const [numberOfPlayers, setNumberOfPlayers] = useState(defaultPlayers)
    // console.log(numberOfPlayers)

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:3000/api/v1/reservations", {
            method: 'POST',
            credentials: 'include',
            headers: { 
                'X-CSRF-Token': getCSRFToken(),
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                member_id: 1,
                number_of_players: numberOfPlayers,
                reservation_time: intId,
            })
        })
            .then(res => res.json())
            // .then(data => console.log(data))
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    {timeConverted.toLocaleDateString()}
                </div>
                <div>
                    {timeConverted.toLocaleTimeString()}
                </div>
                <div>
                    Number of Players: 
                    {/* <input onChange={(e) => setNumberOfPlayers(e.target.value)} /> */}
                    <select onChange={(e) => setNumberOfPlayers(e.target.value)}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
                        {numberOfPlayers === "2" ? (
                            <div>
                                <select>
                                    <option>select a friend</option>
                                </select>
                            </div>
                        ) : numberOfPlayers === "3" ? (
                            <div>
                                <select>
                                    <option>select a friend</option>
                                </select>
                                <select>
                                    <option>select a friend</option>
                                </select>
                            </div>
                        ) : numberOfPlayers === "4" ? (
                            <div>
                                <select>
                                    <option>select a friend</option>
                                </select>
                                <select>
                                    <option>select a friend</option>
                                </select>
                                <select>
                                    <option>select a friend</option>
                                </select>
                            </div>
                        ) : null}
                        
                <button type="sumbit">Confirm Reservation</button>
            </form>
        </div>
    )
}