import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import './Tiles.css';

function Tile({ id, type, data }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'tile',
    item: { id, type, data },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`loose-tile ${type.toLowerCase()}`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {type === 'Actor' ? (
        <>
          <img src={`https://placekitten.com/50/50?image=${id}`} alt={data.name} />
          <p>{data.name}</p>
        </>
      ) : (
        <p>{data.title}</p>
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
  // First, create a dense layout for initial unplaced tiles
  const unplacedTiles = tiles.filter(t => !t.isPlaced);
  
  // Track the initial position in the loose tiles area
  const [initialPositions, setInitialPositions] = React.useState({});

  React.useEffect(() => {
    if (unplacedTiles.length > 0 && Object.keys(initialPositions).length === 0) {
      setInitialPositions(
        unplacedTiles.reduce((acc, tile, index) => {
          acc[tile.id] = index;
          return acc;
        }, {})
      );
    }
  }, [unplacedTiles, initialPositions]);
  
  // Create slots array with length of total initial unplaced tiles
  const slots = Array(Math.max(Object.keys(initialPositions).length, unplacedTiles.length)).fill(null).map((_, index) => {
    // Find the tile that was initially assigned this position
    const tile = unplacedTiles.find(t => initialPositions[t.id] === index);
    return {
      index: tile?.originalSlot || index,
      tile: tile
    };
  });

  return (
    <div className="tiles-container">
      <h2>Tiles</h2>
      <div className="tiles-grid">
        {slots.map(({ index, tile }) => (
          <TileSlot 
            key={index} 
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