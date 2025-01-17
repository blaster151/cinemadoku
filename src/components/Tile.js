import React from 'react';
import { useDrag } from 'react-dnd';

function Tile({ id, type, data, isPlaced }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TILE',
    item: { id, type, data },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }), [id, type, data]);

  // Simplified image path construction
  const imagePath = type === 'Actor' ? `/images/${data.name}.png` : null;

  // Debug log to see what IDs we're getting
  console.log('Rendering tile:', id, type, data.name || data.title);

  return (
    <div
      ref={drag}
      className={`loose-tile ${type.toLowerCase()}`}
      style={{ 
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
      // Add data attributes for debugging
      data-tile-id={id}
      data-tile-type={type}
    >
      {type === 'Actor' ? (
        <>
          <img 
            src={imagePath}
            alt={data.name}
            onLoad={() => console.log('Image loaded:', imagePath)}
            onError={() => console.log('Image failed to load:', imagePath)}
          />
          <p>{data.name}</p>
        </>
      ) : (
        <p>{data.title}</p>
      )}
    </div>
  );
}

export default Tile;