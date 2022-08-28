import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            NAVBAR
            <Link to="/">
                <span>Home</span>
            </Link>

            <span>Previous Reservations</span>
        </div>
    )
}