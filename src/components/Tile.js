import React from 'react';
import './Tile.css';

const Tile = ({ value, onClick, isLoose }) => {
  const className = `tile ${value === null ? 'empty' : ''} ${isLoose ? 'loose-tile' : ''}`;
  
  return (
    <div className={className} onClick={onClick}>
      {value !== null && value}
    </div>
  );
};

export default Tile;