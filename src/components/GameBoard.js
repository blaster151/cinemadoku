import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';

import './GameBoard.css';
import Cell from './Cell.js';

function GameBoard({ 
  boardTiles, 
  onTilePlacement, 
  onInvalidDrop, 
  puzzle, 
  onCheckSolution, 
  activeHint, 
  hints,
  onHintHover, 
  onHintLeave,
  looseTiles = [],
  themeId = '1',
  onAutosolve,
  onTileRemoval,
}) {
  const boardRef = useRef(null);
  const boardPattern = useMemo(() => [
    ['Actor', 'Movie', 'Actor', 'Movie', 'Actor'],
    ['Movie', null, 'Movie', null, 'Movie'],
    ['Actor', 'Movie', 'Actor', 'Movie', 'Actor'],
    ['Movie', null, 'Movie', null, 'Movie'],
    ['Actor', 'Movie', 'Actor', 'Movie', 'Actor']
  ], []);

  const [tiles, setTiles] = useState(boardTiles);

  useEffect(() => {
    setTiles(boardTiles);
    return () => setTiles({});
  }, [boardTiles]);

  const handleSwap = useCallback((draggedTileId, targetRowIndex, targetCellIndex) => {
    setTiles(prevTiles => {
      const newTiles = { ...prevTiles };
      const draggedTilePosition = Object.entries(newTiles).find(([_, tile]) => tile.id === draggedTileId)?.[0];
      if (!draggedTilePosition) return prevTiles;
      
      const targetPosition = `${targetRowIndex}-${targetCellIndex}`;
      const temp = newTiles[draggedTilePosition];
      newTiles[draggedTilePosition] = newTiles[targetPosition];
      newTiles[targetPosition] = temp;

      onTilePlacement(draggedTileId, targetRowIndex, targetCellIndex);
      return newTiles;
    });
  }, [onTilePlacement]);

  const handleDrop = useCallback((tileId, rowIndex, cellIndex) => {
    onTilePlacement(tileId, rowIndex, cellIndex);
    setTiles(prevTiles => ({
      ...prevTiles,
      [`${rowIndex}-${cellIndex}`]: boardTiles[`${rowIndex}-${cellIndex}`]
    }));
  }, [onTilePlacement, boardTiles]);

  const getHintColorsForCell = useCallback((rowIndex, cellIndex) => {
    if (!puzzle?.solution) return [];
    const tileId = puzzle.solution[rowIndex][cellIndex];
    return hints
      .filter(hint => hint.relatedTiles.includes(tileId))
      .map(hint => hint.color);
  }, [puzzle?.solution, hints]);

  const handleCheckSolution = () => {
    if (!isBoardComplete()) {
      onCheckSolution(-1); // Special value to indicate incomplete board
      return;
    }

    const misplacedTiles = Object.entries(tiles).reduce((count, [position, tile]) => {
      const [row, col] = position.split('-').map(Number);
      const correctTile = puzzle.solution[row][col];
      return count + (tile && tile.id !== correctTile ? 1 : 0);
    }, 0);

    onCheckSolution(misplacedTiles);
  };

  const isBoardComplete = useCallback(() => {
    if (!puzzle?.solution) return false;
    
    // Check if all non-null positions in the solution have tiles
    return puzzle.solution.every((row, rowIndex) => 
      row.every((expectedTile, colIndex) => 
        expectedTile === null || tiles[`${rowIndex}-${colIndex}`] != null
      )
    );
  }, [puzzle?.solution, tiles]);

  const handleAutosolve = useCallback(() => {
    console.log('GameBoard handleAutosolve called');
    if (!puzzle?.solution) {
      console.log('No puzzle solution found');
      return;
    }
    
    // Create a map of where each tile should go
    const tileDestinations = puzzle.solution.flatMap((row, rowIndex) => 
      row.map((tileId, colIndex) => {
        if (!tileId) return null;
        
        // Skip if tile is already in correct position
        const currentPos = Object.entries(tiles).find(([_, tile]) => tile?.id === tileId)?.[0];
        const targetPos = `${rowIndex}-${colIndex}`;
        if (currentPos === targetPos) {
          console.log(`Tile ${tileId} already in correct position`);
          return null;
        }
        
        console.log(`Found tile ${tileId} to move to ${rowIndex}-${colIndex}`);
        return {
          tileId,
          targetPos: { row: rowIndex, col: colIndex }
        };
      }).filter(Boolean)
    );

    console.log('Tile destinations:', tileDestinations);
    return tileDestinations;
  }, [puzzle?.solution, tiles]);

  const handleAutosolveButton = useCallback(() => {
    const tileDestinations = handleAutosolve();
    if (tileDestinations) {
      onAutosolve(tileDestinations);
    }
  }, [handleAutosolve, onAutosolve]);

  return (
    <div className="game-board-section">
      <h2>Game Board</h2>
      <div className="game-board-container">
        <div 
          className="game-board" 
          ref={boardRef}
          onDragOver={(e) => e.preventDefault()}
        >
          {boardPattern.map((row, rowIndex) => (
            row.map((cellType, cellIndex) => (
              <Cell
                key={`puzzle${puzzle.id}-cell${rowIndex}-${cellIndex}-tile${boardTiles[`${rowIndex}-${cellIndex}`]?.id || 'empty'}`}
                type={cellType}
                rowIndex={rowIndex}
                cellIndex={cellIndex}
                onDrop={handleDrop}
                onInvalidDrop={onInvalidDrop}
                onSwap={handleSwap}
                placedTile={tiles[`${rowIndex}-${cellIndex}`]}
                hintColors={getHintColorsForCell(rowIndex, cellIndex)}
                isHighlighted={activeHint && hints.find(h => h.color === activeHint)?.relatedTiles.includes(puzzle.solution[rowIndex][cellIndex])}
                onHintHover={onHintHover}
                onHintLeave={onHintLeave}
                activeHint={activeHint}
                themeId={themeId}
              />
            ))
          ))}
        </div>

        <div className="button-container">
          <button 
            className={`check-solution-button ${!isBoardComplete() ? 'incomplete' : ''}`}
            onClick={handleCheckSolution}
          >
            Check Solution
          </button>
          <button 
            className="autosolve-button"
            onClick={handleAutosolveButton}
          >
            Autosolve
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameBoard;