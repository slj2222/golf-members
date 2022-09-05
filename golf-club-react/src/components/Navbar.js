import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ handleLogout, getCSRFToken }) {

    function handleClick() {
        fetch('http://localhost:3000/api/v1/logout', {
            method: "DELETE",
            credentials: 'include',
            headers: {
                'X-CSRF-Token': getCSRFToken(),
                "Content-Type": "application/json",
            },
        }).then(() => handleLogout())
    } 

    return (
        <div>
            NAVBAR
            <Link to="/">
                <span>Home</span>
            </Link>

        <button onClick={handleClick}>Logout</button>
            {/* <span>Previous Reservations</span> */}
        </div>
    )
}