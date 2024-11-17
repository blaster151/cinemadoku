import React, { useState, useCallback, useEffect } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import './GameBoard.css';

function PlacedTile({ tile }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'tile',
    item: { id: tile.id, type: tile.type, data: tile.data },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }), [tile]);

  return (
    <div
      ref={drag}
      className={`loose-tile ${tile.type.toLowerCase()}`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {tile.type === 'Actor' ? (
        <>
          <img src={`https://placekitten.com/50/50?image=${tile.id}`} alt={tile.data.name} />
          <p>{tile.data.name}</p>
        </>
      ) : (
        <p>{tile.data.title}</p>
      )}
    </div>
  );
}

function Cell({ type, rowIndex, cellIndex, onDrop, placedTile, onInvalidDrop, onSwap, hintColors, isHighlighted, onHintHover, onHintLeave, activeHint }) {
  const [dropPosition, setDropPosition] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: 'tile',
    canDrop: (item) => {
      return type === item.type;
    },
    drop: (item, monitor) => {
      if (monitor.didDrop()) return;

      const dropOffset = monitor.getClientOffset();
      const cellElement = document.querySelector(`[data-cell="${rowIndex}-${cellIndex}"]`);
      const cellRect = cellElement.getBoundingClientRect();
      
      const relativeX = dropOffset.x - cellRect.left;
      const relativeY = dropOffset.y - cellRect.top;
      
      setDropPosition({
        x: relativeX,
        y: relativeY
      });
      setIsAnimating(true);

      setTimeout(() => {
        setIsAnimating(false);
        setDropPosition(null);
      }, 300);

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
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }), [type, rowIndex, cellIndex, onDrop, onInvalidDrop, onSwap, placedTile]);

  const tileStyle = dropPosition && isAnimating ? {
    left: `${dropPosition.x}px`,
    top: `${dropPosition.y}px`,
    transform: 'none'
  } : {
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  };

  const classNames = [
    'cell',
    type ? type.toLowerCase() : 'empty',
    isOver && canDrop ? 'is-over' : '',
    canDrop ? 'can-drop' : '',
    isHighlighted ? 'highlighted' : ''
  ].filter(Boolean).join(' ');

  return (
    <div 
      ref={drop} 
      className={`cell ${classNames}`}
      data-cell={`${rowIndex}-${cellIndex}`}
    >
      {type && <span className="cell-type">{type}</span>}
      {placedTile && (
        <div 
          className={`loose-tile ${placedTile.type.toLowerCase()} ${isAnimating ? 'animating' : ''}`}
          style={{
            ...tileStyle,
            position: 'absolute',
            transition: isAnimating ? 'none' : 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
        >
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
      {hintColors.map((color, index) => (
        <div 
          key={index} 
          className={`hint-marker hint-marker-${index} ${color === activeHint ? 'active' : ''}`} 
          style={{ backgroundColor: color }}
          onMouseEnter={() => onHintHover(color)}
          onMouseLeave={onHintLeave}
        />
      ))}
    </div>
  );
}

function GameBoard({ 
  boardTiles, 
  onTilePlacement, 
  onInvalidDrop, 
  puzzle, 
  onCheckSolution, 
  activeHint, 
  hints,
  onHintHover, 
  onHintLeave
}) {
  const boardPattern = [
    ['Movie', 'Actor', 'Movie', 'Actor', 'Movie'],
    ['Actor', null, 'Actor', null, 'Actor'],
    ['Movie', 'Actor', 'Movie', 'Actor', 'Movie'],
    ['Actor', null, 'Actor', null, 'Actor'],
    ['Movie', 'Actor', 'Movie', 'Actor', 'Movie']
  ];

  const [tiles, setTiles] = useState(boardTiles);

  useEffect(() => {
    setTiles(boardTiles);
  }, [boardTiles]);

  const handleSwap = useCallback((draggedTileId, targetRowIndex, targetCellIndex) => {
    setTiles(prevTiles => {
      const newTiles = { ...prevTiles };
      const draggedTilePosition = Object.entries(newTiles).find(([_, tile]) => tile.id === draggedTileId)[0];
      const targetPosition = `${targetRowIndex}-${targetCellIndex}`;
      
      // Swap the tiles
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
    const tileId = puzzle.solution[rowIndex][cellIndex];
    return hints
      .filter(hint => hint.relatedTiles.includes(tileId))
      .map(hint => hint.color);
  }, [puzzle.solution, hints]);

  const handleCheckSolution = () => {
    const misplacedTiles = Object.entries(tiles).reduce((count, [position, tile]) => {
      const [row, col] = position.split('-').map(Number);
      const correctTile = puzzle.solution[row][col];
      return count + (tile && tile.id !== correctTile ? 1 : 0);
    }, 0);

    onCheckSolution(misplacedTiles);
  };

  return (
    <div className="game-board-container">
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
              hintColors={getHintColorsForCell(rowIndex, cellIndex)}
              isHighlighted={activeHint && hints.find(h => h.color === activeHint)?.relatedTiles.includes(puzzle.solution[rowIndex][cellIndex])}
              onHintHover={onHintHover}
              onHintLeave={onHintLeave}
              activeHint={activeHint}
            />
          ))
        ))}
      </div>
      <button className="check-solution-button" onClick={handleCheckSolution}>
        Check Solution
      </button>
    </div>
  );
}

export default GameBoard;