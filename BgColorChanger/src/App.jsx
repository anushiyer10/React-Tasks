
import { useState } from 'react';

import './style.css'
import './App.css'
function App() {

  const [backgroundColor, setBackgroundColor] = useState('white');

  const changePageColor = (newColor) => {
    document.documentElement.style.setProperty('--page-background-color', newColor);  // Use the state setter function to update the background color
  };
  const pageStyle = {
    backgroundColor: backgroundColor,
    height: '100%',
    transition: 'background-color 0.5s',
  };
  return (

    <div className="page" style={pageStyle}>
      <div className="window">
        <div className="button-groups">
          <button onClick={() => changePageColor('red')}>Red</button>
          <button onClick={() => changePageColor('yellow')}>Yellow</button>
          <button onClick={() => changePageColor('blue')}>Blue</button>
          <button onClick={() => changePageColor('green')}>Green</button>
          <button onClick={() => changePageColor('orange')}>Orange</button>
          <button onClick={() => changePageColor('grey')}>Grey</button>
          <button onClick={() => changePageColor('black')}>Black</button>
        </div>
      </div>
    </div>

  )
}

export default App
