import { useState, useEffect } from 'react';
import Game from './components/Game';
import './styles/theme.css';

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
