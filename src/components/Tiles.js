import React, { useMemo, useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import ActorImage from './ActorImage';
import MovieTile from './MovieTile';
import './Tiles.css';

function Tile({ id, type, data, themeId }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'tile',
    item: { id, type, data },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      ref={drag}
      className={`loose-tile ${type.toLowerCase()}`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      data-tile-id={id}
    >
      {type === 'Actor' ? (
        <>
          <ActorImage 
            name={data.name}
            onLoad={() => setImageLoaded(true)}
            className={imageLoaded ? 'loaded' : ''}
            themeId={themeId}
          />
          <p>{data.name}</p>
        </>
      ) : (
        <MovieTile 
          title={data.title}
          themeId={themeId}
        />
      )}
    </div>
  );
}

function TileSlot({ index, tile, onTileDrop, themeId }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'tile',
    drop: (item) => onTileDrop(item.id, index),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }), [index, onTileDrop]);

  return (
    <div 
      ref={drop} 
      className={`tile-slot ${isOver ? 'is-over' : ''} ${tile ? 'occupied' : 'empty'}`}
      data-slot-index={index}
    >
      {tile && <Tile {...tile} themeId={themeId} />}
    </div>
  );
}

const Tiles = forwardRef(({ tiles = [], onTileDrop, onAutosolve, boardRef, themeId }, ref) => {
  const unplacedTiles = useMemo(() => 
    tiles?.filter(t => !t.isPlaced) || [],
    [tiles]
  );
  
  const [initialPositions, setInitialPositions] = useState({});

  // Reset positions when puzzle changes
  useEffect(() => {
    if (unplacedTiles.length > 0) {
      setInitialPositions(
        unplacedTiles.reduce((acc, tile, index) => {
          acc[tile.id] = index;
          return acc;
        }, {})
      );
    }
    
    // Cleanup when puzzle changes
    return () => setInitialPositions({});
  }, [unplacedTiles]); // Changed from checking length to watching unplacedTiles
  
  const slots = useMemo(() => 
    Array(Math.max(Object.keys(initialPositions).length, unplacedTiles.length))
      .fill(null)
      .map((_, index) => {
        const tile = unplacedTiles.find(t => initialPositions[t.id] === index);
        return {
          index: tile?.originalSlot || index,
          tile: tile
        };
      }),
    [initialPositions, unplacedTiles]
  );

  // Get puzzleId from the first tile (they'll all be from the same puzzle)
  const puzzleId = tiles?.[0]?.puzzleId || 'default';

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
    <div className="tiles-container">
      <h2>Tiles</h2>
      <div className="tiles-grid">
        {slots.map(({ index, tile }) => (
          <TileSlot 
            key={tile ? `puzzle${puzzleId}-tile${tile.id}` : `puzzle${puzzleId}-empty-slot-${index}`}
            index={index} 
            tile={tile} 
            onTileDrop={onTileDrop}
            themeId={themeId}
          />
        ))}
      </div>
    </div>
  );
});

export default Tiles;