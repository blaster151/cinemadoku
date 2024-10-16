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
      <main className="App-main">
        <div className="game-section">
          <GameBoard />
        </div>
        <div className="tiles-section">
          <Tiles />
        </div>
      </main>
    </div>
  );
}

export default App;