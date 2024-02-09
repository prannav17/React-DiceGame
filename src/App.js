import logo from './logo.svg';
import './App.css';
import Homepage from './HomePage/homepage';
import { useState } from 'react';
import MainGame from './MainGame/MainGame';

function App() {
  const [isGameStarted, setGame] = useState(false);

  const toggleGamePlay=()=>{
    setGame((prev) => !prev);
  };

  return (
    <div className="App">
      {isGameStarted ? <MainGame/> :  <Homepage toggle={toggleGamePlay}></Homepage>}
      
    </div>
  );
}

export default App;
