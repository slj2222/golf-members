import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/members")
        .then(res => res.json())
        .then(data => console.log(data))
}, [])

  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
