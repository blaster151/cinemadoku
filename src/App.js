import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GameBoard from './components/GameBoard';
import Tiles from './components/Tiles';
import Hints from './components/Hints';
import { demoPuzzles } from './demoPuzzles';
import './App.css';
import { useImagePreloader } from './hooks/useImagePreloader';

function App() {
  const [currentPuzzleId, setCurrentPuzzleId] = useState(1);
  const [tiles, setTiles] = useState([]);
  const [boardTiles, setBoardTiles] = useState({});
  const [activeHintColor, setActiveHintColor] = useState(null);

  const currentPuzzle = useMemo(() => 
    demoPuzzles.find(p => p.id === currentPuzzleId),
    [currentPuzzleId]
  );

  useImagePreloader(currentPuzzle);

  useEffect(() => {
    if (!currentPuzzle) return;
    
    const initialBoard = {};
    currentPuzzle.initialPlacements.forEach(placement => {
      const tile = currentPuzzle.tiles.find(t => t.id === placement.tileId);
      initialBoard[placement.position] = { ...tile, isPlaced: true };
    });
    setBoardTiles(initialBoard);

    const initialTiles = currentPuzzle.tiles.map((tile, index) => ({
      ...tile,
      originalSlot: index,
      isPlaced: currentPuzzle.initialPlacements.some(p => p.tileId === tile.id),
      puzzleId: currentPuzzleId
    }));
    setTiles(initialTiles);

    return () => {
      setBoardTiles({});
      setTiles([]);
      setActiveHintColor(null);
    };
  }, [currentPuzzleId, currentPuzzle]);

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

  const handleCheckSolution = (misplacedTiles) => {
    if (misplacedTiles === -1) {
      toast.warning("Please place all tiles before checking your solution!", {
        position: "bottom-right",
        autoClose: 3000
      });
      return;
    }
    
    if (misplacedTiles === 0) {
      toast.success("Congratulations! All tiles are in the correct position!", {
        position: "bottom-right",
        autoClose: 3000
      });
    } else {
      toast.info(`Almost there! ${misplacedTiles} tile${misplacedTiles > 1 ? 's are' : ' is'} in the wrong position.`, {
        position: "bottom-right",
        autoClose: 3000
      });
    }
  };

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

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <header className="App-header">
          <h1 className="game-title">Cinemadoku</h1>
          <div className="puzzle-selector">
            {[1, 2, 3].map(id => (
              <button 
                key={id}
                onClick={() => setCurrentPuzzleId(id)}
                className={currentPuzzleId === id ? 'active' : ''}
              >
                Puzzle {id}
              </button>
            ))}
          </div>
        </header>
        <div className="game-container">
          <div className="left-column">
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
              puzzleId={currentPuzzleId}
            />
            <Hints 
              hints={currentPuzzle.hints}
              onHintHover={handleHintHover}
              onHintLeave={handleHintLeave}
              activeHint={activeHintColor}
            />
          </div>
          <div className="right-column">
            <Tiles 
              tiles={tiles.filter(tile => !tile.isPlaced)}
              onTileDrop={handleTileReturnToSlot}
              puzzleId={currentPuzzleId}
            />
          </div>
        </div>
        <ToastContainer position="bottom-right" autoClose={3000} />
      </div>
    </DndProvider>
  );
}

export default App;