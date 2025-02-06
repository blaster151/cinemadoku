import React, { useMemo, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import { useDrop } from 'react-dnd';
import LooseTile from './Tile';
import './Tiles.css';

const Tiles = forwardRef(({ tiles = [], onTileDrop, onAutosolve, boardRef, themeId, onTileRemoval }, ref) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'tile',
    drop: (item) => {
      if (item.fromBoard) {
        onTileRemoval(item.id);
      }
      return undefined;
    },
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  }), [onTileRemoval]);

  const unplacedTiles = useMemo(() => 
    tiles?.filter(t => !t.isPlaced)
      .map(tile => ({
        ...tile,
      }))
    || [],
    [tiles]
  );
  
  const unplacedTilesRef = useRef(unplacedTiles);
  useEffect(() => {
    unplacedTilesRef.current = unplacedTiles;
  }, [unplacedTiles]);

  const handleAutosolve = async () => {
    console.log('Tiles handleAutosolve called');
    const tileDestinations = onAutosolve();
    console.log('Got tile destinations:', tileDestinations);
    if (!tileDestinations?.length) {
      console.log('No tiles to move');
      return;
    }

    // For each tile that needs to move
    tileDestinations.forEach(({ tileId, targetPos }) => {
      console.log(`Processing tile ${tileId} to position ${targetPos.row}-${targetPos.col}`);
      
      // Find the loose tile element
      const tileElement = document.querySelector(`.loose-tile[data-tile-id="${tileId}"]`);
      if (!tileElement) {
        console.log(`Could not find tile element for ${tileId}`);
        return;
      }

      // Find the target cell
      const targetCell = document.querySelector(`.cell[data-position="${targetPos.row}-${targetPos.col}"]`);
      if (!targetCell) {
        console.log(`Could not find target cell for position ${targetPos.row}-${targetPos.col}`);
        return;
      }

      console.log('Found both tile and target cell, calculating movement');
      // Calculate the movement
      const tileRect = tileElement.getBoundingClientRect();
      const targetRect = targetCell.getBoundingClientRect();
      const deltaX = targetRect.left - tileRect.left;
      const deltaY = targetRect.top - tileRect.top;

      console.log(`Moving tile by ${deltaX}px, ${deltaY}px`);
      // Set up the animation
      tileElement.style.setProperty('--move-x', `${deltaX}px`);
      tileElement.style.setProperty('--move-y', `${deltaY}px`);
      tileElement.classList.add('autosolving');

      // Place the tile after animation
      setTimeout(() => {
        console.log(`Placing tile ${tileId} at ${targetPos.row}-${targetPos.col}`);
        onTileDrop(tileId, targetPos.row, targetPos.col);
      }, 2000);
    });
  };


  // Expose handleAutosolve to parent through ref
  useImperativeHandle(ref, () => ({
    handleAutosolve
  }));

  return (
    <div className="tiles-section">
      <h2>Tiles</h2>
      <div className="inner-container">
        <div 
          ref={drop}
          className={`tiles-grid ${isOver ? 'is-over' : ''}`}
          onDragOver={(e) => e.preventDefault()}
        >
          {tiles.map((tile) => (
            <LooseTile
              key={tile.id}
              tile={tile}
              themeId={themeId}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

export default Tiles;