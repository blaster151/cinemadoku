import React from 'react';
import { useDrag } from 'react-dnd';
import './Tile.css';

function Tile({ id, type, data, isDraggable }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'tile',
    item: { id, type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    canDrag: isDraggable,
  }), [id, type, isDraggable]);

  return (
    <div ref={drag} className={`tile ${isDragging ? 'dragging' : ''}`}>
      {type === 'Actor' ? (
        <img 
          src={`https://placekitten.com/50/50?image=${id}`} 
          alt={data.name} 
          onError={(e) => e.target.src = 'https://via.placeholder.com/50'} // Fallback image
        />
      ) : (
        <p>{data.title}</p>
      )}
      <p>{data.name || data.title}</p>
    </div>
  );
}

export default Tile;