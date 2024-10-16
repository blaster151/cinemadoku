import React, { useState, useCallback, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GameBoard from './GameBoard';
import Tiles from './Tiles';
import { demoPuzzles } from './demoPuzzles';
import './App.css';

function App() {
  const [currentPuzzleId, setCurrentPuzzleId] = useState(1);
  const [tiles, setTiles] = useState([]);
  const [boardTiles, setBoardTiles] = useState({});

  useEffect(() => {
    const puzzle = demoPuzzles.find(p => p.id === currentPuzzleId);
    setTiles(puzzle.tiles.map(tile => ({ ...tile, isPlaced: false })));
    const initialBoard = {};
    puzzle.initialPlacements.forEach(placement => {
      const tile = puzzle.tiles.find(t => t.id === placement.tileId);
      initialBoard[placement.position] = { ...tile, isPlaced: true };
    });
    setBoardTiles(initialBoard);
  }, [currentPuzzleId]);

  const handleTilePlacement = useCallback((tileId, rowIndex, cellIndex) => {
    const placedTile = tiles.find(tile => tile.id === tileId);
    if (placedTile) {
      setTiles(prevTiles => prevTiles.map(tile => 
        tile.id === tileId ? { ...tile, isPlaced: true } : tile
      ));
      setBoardTiles(prev => ({
        ...prev,
        [`${rowIndex}-${cellIndex}`]: { ...placedTile, isPlaced: true }
      }));
      toast.success("Tile placed successfully!");
    }
  }, [tiles]);

  const handleInvalidDrop = useCallback(() => {
    toast.warn("Invalid tile placement!");
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <header className="App-header">
          <h1>My React Game</h1>
        </header>
        <main className="App-main">
          <div className="game-section">
            <GameBoard 
              boardTiles={boardTiles} 
              onTilePlacement={handleTilePlacement}
              onInvalidDrop={handleInvalidDrop}
            />
          </div>
          <div className="tiles-section">
            <Tiles tiles={tiles.filter(tile => !tile.isPlaced)} />
          </div>
        </main>
        <div className="puzzle-selector">
          {[1, 2, 3].map(id => (
            <button key={id} onClick={() => setCurrentPuzzleId(id)}>
              Puzzle {id}
            </button>
          ))}
        </div>
        <ToastContainer position="bottom-right" autoClose={3000} />
      </div>
    </DndProvider>
  );
}

export default App;