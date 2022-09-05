import React, { useState, Component } from "react";
import { Link } from "react-router-dom";


export default function Login({ handleLogin, getCSRFToken }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // const [emailAddress, setEmailAddress] = useState('')
    const [errors, setErrors] = useState('')
    console.log(errors)
    console.log(username)
   


    // constructor(props) {
    //     super(props);
    //     this.state = { 
    //         username: '',
    //         email: '',
    //         password: '',
    //         errors: ''
    //     };
    // }

    // handleChange = (event) => {
    //     const {name, value} = event.target
    //     this.setState({
    //         [name]: value
    //     })
    // };

    function handleSubmit(e) {
        e.preventDefault()
        // let member = {
        //     username: username,
        //     // email_address: emailAddress,
        //     password: password
        // }
        
            fetch("http://localhost:3000/api/v1/login", {
                method: "POST",
                credentials: 'include',
                headers: {
                    'X-CSRF-Token': getCSRFToken(),
                    "Content-Type": "application/json",
                },
            body: JSON.stringify({username: username, password: password }),
        }).then(res => {
            if (res.ok) {
                console.log(res)
                res.json().then(data => handleLogin(data))
                // this.props.history.push('/')
            } else {
                res.json().then(data => setErrors(data))
            }
        })
    };


// handleSubmit = (event) => {
//     event.preventDefault()
//     const {username, email, password} = this.state
//     let member = {
//         username: username, 
//         email: email,
//         password: password
//     }
// console.log(user)



return (
    <div>
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
            <input
                placeholder="username"
                type="text"
                name="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            {/* <input
                placeholder="email"
                type="text"
                name="email"
                value={emailAddress}
                onChange={e => setEmailAddress(e.target.value)}
            /> */}
            <input
                placeholder="password"
                type="password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button placeholder="submit" type="submit">
                Log In
            </button>
            <div>
                or <Link to='/signup'>sign up</Link>
            </div>
        </form>
    </div>
);
}


