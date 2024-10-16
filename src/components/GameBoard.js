import React, { useState, useCallback } from 'react';
import { useDrop } from 'react-dnd';
import './GameBoard.css';

function Cell({ type, rowIndex, cellIndex, onDrop, placedTile, onInvalidDrop, onSwap }) {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: 'tile',
    drop: (item, monitor) => {
      if (monitor.didDrop()) {
        return;
      }
      if (item.type === type) {
        if (placedTile) {
          onSwap(item.id, rowIndex, cellIndex);
        } else {
          onDrop(item.id, rowIndex, cellIndex);
        }
      } else {
        onInvalidDrop();
      }
    },
    canDrop: (item) => item.type === type,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }), [type, rowIndex, cellIndex, onDrop, onInvalidDrop, onSwap, placedTile]);

  const classNames = [
    'cell',
    type ? type.toLowerCase() : 'empty',
    isOver ? 'is-over' : '',
    canDrop ? 'can-drop' : ''
  ].filter(Boolean).join(' ');

  return (
    <div ref={drop} className={classNames}>
      {type && <span className="cell-type">{type}</span>}
      {placedTile && (
        <div className={`tile ${placedTile.type.toLowerCase()}`}>
          {placedTile.type === 'Actor' ? (
            <>
              <img src={`https://placekitten.com/50/50?image=${placedTile.id}`} alt={placedTile.data.name} />
              <p>{placedTile.data.name}</p>
            </>
          ) : (
            <p>{placedTile.data.title}</p>
          )}
        </div>
      )}
    </div>
  );
}

function GameBoard({ boardTiles, onTilePlacement, onInvalidDrop }) {
  const boardPattern = [
    ['Movie', 'Actor', 'Movie', 'Actor', 'Movie'],
    ['Actor', null, 'Actor', null, 'Actor'],
    ['Movie', 'Actor', 'Movie', 'Actor', 'Movie'],
    ['Actor', null, 'Actor', null, 'Actor'],
    ['Movie', 'Actor', 'Movie', 'Actor', 'Movie']
  ];

  const [tiles, setTiles] = useState(boardTiles);

  const handleSwap = useCallback((draggedTileId, targetRowIndex, targetCellIndex) => {
    setTiles(prevTiles => {
      const newTiles = { ...prevTiles };
      const draggedTilePosition = Object.entries(newTiles).find(([_, tile]) => tile.id === draggedTileId)[0];
      const targetPosition = `${targetRowIndex}-${targetCellIndex}`;
      
      // Swap the tiles
      const temp = newTiles[draggedTilePosition];
      newTiles[draggedTilePosition] = newTiles[targetPosition];
      newTiles[targetPosition] = temp;

      return newTiles;
    });
  }, []);

  const handleDrop = useCallback((tileId, rowIndex, cellIndex) => {
    onTilePlacement(tileId, rowIndex, cellIndex);
    setTiles(prevTiles => ({
      ...prevTiles,
      [`${rowIndex}-${cellIndex}`]: boardTiles[`${rowIndex}-${cellIndex}`]
    }));
  }, [onTilePlacement, boardTiles]);

  return (
    <div className="game-board">
      {boardPattern.map((row, rowIndex) => (
        row.map((cellType, cellIndex) => (
          <Cell
            key={`${rowIndex}-${cellIndex}`}
            type={cellType}
            rowIndex={rowIndex}
            cellIndex={cellIndex}
            onDrop={handleDrop}
            onInvalidDrop={onInvalidDrop}
            onSwap={handleSwap}
            placedTile={tiles[`${rowIndex}-${cellIndex}`]}
          />
        ))
      ))}
    </div>
  );
}

export default GameBoard;