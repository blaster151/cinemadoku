import React from 'react';
import './Tile.css';

function Tile({ type, data }) {
  return (
    <div className={`tile ${type.toLowerCase()}`}>
      {type === 'Actor' ? (
        <>
          <img src={`https://placekitten.com/100/100?image=${Math.floor(Math.random() * 16) + 1}`} alt={data.name} />
          <p>{data.name}</p>
        </>
      ) : (
        <p>{data.title}</p>
      )}
    </div>
  );
}

export default Tile;