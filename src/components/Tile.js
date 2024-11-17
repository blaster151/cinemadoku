import React from 'react';
import { useDrag } from 'react-dnd';
import './Tile.css';

function Tile({ id, type, data, isPlaced }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'tile',
    item: { id, type, data },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }), [id, type, data]);

  return (
    <div
      ref={drag}
      className={`loose-tile ${type.toLowerCase()}`}
      style={{ 
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move'
      }}
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

export default Tile;