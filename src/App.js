import React from 'react';
import GameBoard from './GameBoard';
import Tiles from './Tiles';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My React Game</h1>
      </header>
      <main>
        <GameBoard />
        <Tiles />
      </main>
    </div>
  );
}

export default App;