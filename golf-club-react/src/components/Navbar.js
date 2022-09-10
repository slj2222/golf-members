import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";


export default function Navbar({ handleLogout, getCSRFToken, currentUser }) {

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
        <div className="navbar-outer">
            <div>
                <Link to="/">
                    <span>Home</span>
                </Link>
                <Link to="/friends">
                    <span>Friends</span>
                </Link>
                <Link to="/reservations">
                    <span>Reservations</span>
                </Link>
            </div>

            <SearchBar getCSRFToken={getCSRFToken} />

            <div>
                <span>
                    Welcome, {currentUser.username}
                </span>
                <button>
                    <Link to="/" onClick={handleClick}>Logout</Link>
                </button>
            </div>
        </div>
        
        
    )
}