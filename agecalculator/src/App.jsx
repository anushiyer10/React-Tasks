import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style.css'

function App() {
  const [dateOfbirth , setDateofBirth] = useState('');
  const [age, setAge] = useState(null);
  
  const calculateAge = () => {
    const parts = dateOfbirth.split('-');
    if (parts.length === 3) {
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
  
      const birthDate = new Date(year, month, day);
      const currentDate = new Date();
      const ageInMilliseconds = currentDate - birthDate;
      const ageDate = new Date(ageInMilliseconds);
      const years = Math.abs(ageDate.getUTCFullYear() - 1970);
  
      setAge(years);
    } else {
      // Handle invalid date format or empty input
      setAge(null);
    }
  }
  return (
    <>
       <h1>Age Calculator</h1>
       <label htmlFor='dob'>Enter your Date of Birth:</label>
       <input type="date" id="dob" value={dateOfbirth} onChange={(e) => setDateofBirth(e.target.value)}/>
       <button onClick={calculateAge}>Calculate Age</button>
       {age !== null && <h2>Your current Age is {age} years</h2>}
    </>
  )
 
}

export default App
