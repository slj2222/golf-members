import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';
import { useEffect, useState } from 'react';

function App() {

  const [allMembers, setAllMembers] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/members")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setAllMembers(data)
      })
  }, [])

  

  return (
    <div className="App">
      <LandingPage allMembers={allMembers} />
    </div>
  );
}

export default App;
