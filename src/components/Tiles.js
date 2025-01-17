import React, { useMemo, useEffect, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import ActorImage from './ActorImage';
import MovieTile from './MovieTile';
import './Tiles.css';

function Tile({ id, type, data }) {
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
    >
      {type === 'Actor' ? (
        <>
          <ActorImage 
            name={data.name}
            onLoad={() => setImageLoaded(true)}
            className={imageLoaded ? 'loaded' : ''}
          />
          <p>{data.name}</p>
        </>
      ) : (
        <MovieTile title={data.title} />
      )}
    </div>
  );
}

function TileSlot({ index, tile, onTileDrop }) {
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
    >
      {tile && <Tile {...tile} />}
    </div>
  );
}

function Tiles({ tiles, onTileDrop }) {
  const unplacedTiles = useMemo(() => 
    tiles.filter(t => !t.isPlaced),
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
  const puzzleId = tiles[0]?.puzzleId;

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
          />
        ))}
      </div>
    </div>
  );
}

export default Tiles;