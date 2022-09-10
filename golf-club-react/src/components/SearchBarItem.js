import React from "react";

export default function SearchBarItem({ publicMember }) {
    

    return (
        <div>
            {publicMember.username} - {publicMember.firstName} {publicMember.lastName}
        </div>
    )
}