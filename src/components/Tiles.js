import React from 'react';
import { useDrag } from 'react-dnd';
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
      className={`tile ${type.toLowerCase()}`}
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

function Tiles({ tiles }) {
  return (
    <div className="tiles-container">
      <h2>Tiles</h2>
      <div className="tiles-grid">
        {tiles.map((tile) => (
          <Tile key={tile.id} {...tile} />
        ))}
      </div>
    </div>
  );
}

export default Tiles;