
import './App.css';
// import React, { Component } from 'react';
// import axios from 'axios';
import LandingPage from './components/LandingPage';
import { useEffect, useState } from 'react';


function App() {

  const [currentUser, setCurrentUser] = useState(null)

    // constructor(props) {
    //   super(props);
    //   this.state = { 
    //     isLoggedIn: false,
    //     user: {}
    //   };
    //   console.log(this.state)
    // };

    
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/v1/members")
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //       setAllMembers(data)
  //     })
  // }, [])
  
  //auth function
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/me", {credentials: 'include'}).then((response) => {
      if (response.ok) {
        response.json().then((authUser) => setCurrentUser(authUser))
        // setCurrentUser(authUser));
      }
    });
  }, [])
  function getCSRFToken() {
    return unescape(document.cookie.split('=')[1])
  }

  function handleLogin(loggedInUser) {
    setCurrentUser(loggedInUser)
  }

  function handleLogout() {
    setCurrentUser(null)
  }

  // handleLogin = (data) => {
  //   this.setState({
  //     isLoggedIn: true,
  //     user: data.user
  //   })
  // }
  // handleLogout = () => {
  //     this.setState({
  //     isLoggedIn: false,
  //     user: {}
  //     })
  //   }


  // function onLogin(loggedInUser) {
  //   setUser(loggedInUser)
  // }

  // function onLogout() {
  //   setUser(null)
  // }

  
    return (
      <div className="App">
        <LandingPage currentUser={currentUser} handleLogin={handleLogin} handleLogout={handleLogout} getCSRFToken={getCSRFToken}/>
      </div>
    );
  
}

export default App;
