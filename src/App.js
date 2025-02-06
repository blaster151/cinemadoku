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
import ThemeSelector from './components/ThemeSelector';
import { themes } from './themes';
import { FEATURES } from './config';

function App() {
  // Define available puzzles once, at the top level of the component
  const availablePuzzles = FEATURES.DEMO_MODE 
    ? demoPuzzles.filter(p => [6, 8].includes(p.id))
    : demoPuzzles;

  // Use availablePuzzles for initial puzzle ID
  const getInitialPuzzleId = () => {
    return availablePuzzles[0]?.id || 1;
  };

  const [currentPuzzleId, setCurrentPuzzleId] = useState(getInitialPuzzleId);
  const [tiles, setTiles] = useState([]);
  const [boardTiles, setBoardTiles] = useState({});
  const [activeHintColor, setActiveHintColor] = useState(null);
  const [currentTheme, setCurrentTheme] = useState(() => {
    // In demo mode, always use Classic theme
    if (FEATURES.DEMO_MODE) return '1';
    return localStorage.getItem('selectedTheme') || '1';
  });

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

  // Apply theme styles
  useEffect(() => {
    const theme = themes[currentTheme];
    document.documentElement.style.setProperty('--color-dark-gray', theme.colors.darkGray);
    document.documentElement.style.setProperty('--color-blue-gray', theme.colors.blueGray);
    document.documentElement.style.setProperty('--color-light', theme.colors.light);
    document.documentElement.style.setProperty('--color-charcoal', theme.colors.charcoal);
    document.documentElement.style.setProperty('--font-heading', theme.fonts.heading);
    document.documentElement.style.setProperty('--font-body', theme.fonts.body);
    document.body.style.background = theme.background;
  }, [currentTheme]);

  // Add Google Fonts link dynamically
  useEffect(() => {
    const theme = themes[currentTheme];
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?family=${theme.fonts.heading.split("'")[1]}:wght@400;700&family=${theme.fonts.body.split("'")[1]}:wght@400;500&display=swap`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, [currentTheme]);

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
    if (activeHintColor !== color) {
      setActiveHintColor(color);
    }
  }, [activeHintColor]);

  const handleHintLeave = useCallback(() => {
    if (activeHintColor !== null) {
      setActiveHintColor(null);
    }
  }, [activeHintColor]);

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

  const handleThemeChange = (newTheme) => {
    setCurrentTheme(newTheme);
    localStorage.setItem('selectedTheme', newTheme);
  };

  const handleAutosolve = useCallback((tileDestinations) => {
    if (!tileDestinations) return;
    
    tileDestinations.forEach(({ tileId, targetPos }) => {
      handleTilePlacement(tileId, targetPos.row, targetPos.col);
    });
  }, [handleTilePlacement]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <header className="App-header">
          {FEATURES.DEMO_MODE ? (
            <h1 className="game-title">Cinemadoku</h1>
          ) : (
            <img src="/images/themes/2/logo.jpg" alt="Cinemadoku" className="logo" />
          )}
          <div className="puzzle-selector">
            {availablePuzzles.map((puzzle) => (
              <button
                key={puzzle.id}
                className={currentPuzzleId === puzzle.id ? 'active' : ''}
                onClick={() => setCurrentPuzzleId(puzzle.id)}
              >
                Puzzle {puzzle.id}
              </button>
            ))}
          </div>
          {!FEATURES.DEMO_MODE && (
            <div className="theme-selector">
              <ThemeSelector 
                currentTheme={currentTheme}
                onThemeChange={handleThemeChange}
              />
            </div>
          )}
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
              onAutosolve={handleAutosolve}
              isHighlighted={(rowIndex, cellIndex) => {
                const cellHints = currentPuzzle.hints
                  .filter(hint => hint.relatedTiles.includes(currentPuzzle.solution[rowIndex][cellIndex]))
                  .map(hint => hint.color);
                return activeHintColor && cellHints.includes(activeHintColor);
              }}
              onTileRemoval={handleTileRemoval}
              puzzleId={currentPuzzleId}
              themeId={currentTheme}
              key={`board-${currentTheme}`}
            />
          </div>
          <div className="right-column">
            <Tiles 
              tiles={tiles.filter(tile => !tile.isPlaced)}
              onTileDrop={handleTileReturnToSlot}
              puzzleId={currentPuzzleId}
              themeId={currentTheme}
              key={`tiles-${currentTheme}`}
            />
            <div className="hints-section">
              <h2>Hints</h2>
              <div className="inner-container">
                <div className="hints-container">
                  <Hints 
                    hints={currentPuzzle.hints}
                    onHintHover={handleHintHover}
                    onHintLeave={handleHintLeave}
                    activeHint={activeHintColor}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer position="bottom-right" autoClose={3000} />
      </div>
    </DndProvider>
  );
}

export default App;