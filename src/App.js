import React, { useState, useCallback, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GameBoard from './components/GameBoard';
import Tiles from './components/Tiles';
import Hints from './components/Hints';
import { demoPuzzles } from './demoPuzzles';
import './App.css';

function App() {
  const [currentPuzzleId, setCurrentPuzzleId] = useState(1);
  const [tiles, setTiles] = useState([]);
  const [boardTiles, setBoardTiles] = useState({});
  const [activeHintColor, setActiveHintColor] = useState(null);

  useEffect(() => {
    const puzzle = demoPuzzles.find(p => p.id === currentPuzzleId);
    
    const initialBoard = {};
    puzzle.initialPlacements.forEach(placement => {
      const tile = puzzle.tiles.find(t => t.id === placement.tileId);
      initialBoard[placement.position] = { ...tile, isPlaced: true };
    });
    setBoardTiles(initialBoard);

    const initialTiles = puzzle.tiles.map((tile, index) => ({
      ...tile,
      originalSlot: index,
      isPlaced: puzzle.initialPlacements.some(p => p.tileId === tile.id)
    }));
    setTiles(initialTiles);
  }, [currentPuzzleId]);

  const handleTilePlacement = useCallback((tileId, rowIndex, cellIndex) => {
    const placedTile = tiles.find(tile => tile.id === tileId);
    if (placedTile) {
      setBoardTiles(prev => {
        const newBoardTiles = { ...prev };
        const existingPlacement = Object.entries(newBoardTiles).find(([_, tile]) => tile?.id === tileId);
        
        if (existingPlacement) {
          const [oldPosition] = existingPlacement;
          // If there's a tile in the target position, swap them
          if (newBoardTiles[`${rowIndex}-${cellIndex}`]) {
            const targetTile = newBoardTiles[`${rowIndex}-${cellIndex}`];
            newBoardTiles[oldPosition] = targetTile;
          } else {
            // If no tile in target position, just remove from old position
            delete newBoardTiles[oldPosition];
          }
        }
        
        // Place the dragged tile in the new position
        newBoardTiles[`${rowIndex}-${cellIndex}`] = { ...placedTile, isPlaced: true };
        
        return newBoardTiles;
      });

      setTiles(prev => prev.map(tile => 
        tile.id === tileId ? { ...tile, isPlaced: true } : tile
      ));
    }
  }, [tiles]);

  const handleTileRemoval = useCallback((tileId) => {
    setBoardTiles(prev => {
      const newBoardTiles = { ...prev };
      const position = Object.entries(newBoardTiles).find(([_, tile]) => tile?.id === tileId)?.[0];
      if (position) {
        delete newBoardTiles[position];
      }
      return newBoardTiles;
    });
    setTiles(prev => prev.map(tile => 
      tile.id === tileId ? { ...tile, isPlaced: false } : tile
    ));
  }, []);

  const handleInvalidDrop = useCallback(() => {
    toast.warn("Invalid tile placement!", { toastId: 'invalidDrop' });
  }, []);

  const handleCheckSolution = useCallback((misplacedTiles) => {
    if (misplacedTiles === 0) {
      toast.success("Congratulations! All tiles are correctly placed!");
    } else {
      toast.warn(`So close! ${misplacedTiles} tile${misplacedTiles > 1 ? 's are' : ' is'} in the wrong place!`);
    }
  }, []);

  const handleHintHover = useCallback((color) => {
    setActiveHintColor(color);
  }, []);

  const handleHintLeave = useCallback(() => {
    setActiveHintColor(null);
  }, []);

  const handleTileReturnToSlot = useCallback((tileId, slotIndex) => {
    setBoardTiles(prev => {
      const newBoardTiles = { ...prev };
      const position = Object.entries(newBoardTiles).find(([_, tile]) => tile?.id === tileId)?.[0];
      if (position) {
        delete newBoardTiles[position];
      }
      return newBoardTiles;
    });

    setTiles(prev => prev.map(tile => 
      tile.id === tileId ? { ...tile, isPlaced: false } : tile
    ));
  }, []);

  const currentPuzzle = demoPuzzles.find(p => p.id === currentPuzzleId);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <header className="App-header">
          <h1>Movie-Actor Puzzle Game</h1>
        </header>
        <main className="App-main">
          <GameBoard 
            boardTiles={boardTiles} 
            onTilePlacement={handleTilePlacement}
            onInvalidDrop={handleInvalidDrop}
            puzzle={currentPuzzle}
            onCheckSolution={handleCheckSolution}
            activeHint={activeHintColor}
            hints={currentPuzzle.hints}
            onHintHover={handleHintHover}
            onHintLeave={handleHintLeave}
            isHighlighted={(rowIndex, cellIndex) => {
              const cellHints = currentPuzzle.hints
                .filter(hint => hint.relatedTiles.includes(currentPuzzle.solution[rowIndex][cellIndex]))
                .map(hint => hint.color);
              return activeHintColor && cellHints.includes(activeHintColor);
            }}
            onTileRemoval={handleTileRemoval}
          />
          <Tiles 
            tiles={tiles.filter(tile => !tile.isPlaced)}
            onTileDrop={handleTileReturnToSlot}
          />
          <Hints 
            hints={currentPuzzle.hints}
            onHintHover={handleHintHover}
            onHintLeave={handleHintLeave}
            activeHint={activeHintColor}
          />
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