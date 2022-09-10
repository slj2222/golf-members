import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup({ getCSRFToken }) {
    // const { username, email, password, password_confirmation } 
    const [username, setUsername] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState ('')
    const [membershipNumber, setMembershipNumber] = useState ('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [errors, setErrors] = useState ([])
     const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        if (password === confirmPassword) {
            fetch("http://localhost:3000/api/v1/members", {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'X-CSRF-Token': getCSRFToken(),
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,
                    membership_number: membershipNumber,
                    phone_number: phoneNumber,
                    email_address: emailAddress,
                    username: username, 
                    password: password,
                    is_admin: false
                })
            })
            .then(res => {
                if (res.ok) {
                    res.json().then(data => console.log(data))
                    navigate("/")
                } else {
                    res.json().then(data => setErrors(data))
                }
            })
 
        } else {
            // setErrors(["passwords do not match"])
            console.log("passwords do not match")
            
        }
        
    };
        
    return (
        <div>
            <Link to="/" >
                back to login
            </Link>
            <h1>Sign Up</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <input
                    placeholder="username"
                    type="text"
                    name="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    placeholder="email address"
                    type="text"
                    name="email_address"
                    value={emailAddress}
                    onChange={e => setEmailAddress(e.target.value)}
                />
                <input
                    placeholder="first name"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <input
                    placeholder="last name"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <input
                    placeholder="membership number"
                    type="text"
                    name="membershipNumber"
                    value={membershipNumber}
                    onChange={e => setMembershipNumber(e.target.value)}
                />
                <input
                    placeholder="phone number"
                    type="text"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                />               
                <input
                    placeholder="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <input
                    placeholder="password confirmation"
                    type="password"
                    name="password_confirmation"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                />

                <button to="/" placeholder="submit" type="submit">
                    Sign Up
                </button>

            </form>
        </div>
    );
}
