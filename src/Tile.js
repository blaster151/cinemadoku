import React from 'react';
import '../styles/Tile.css';

const Tile = ({ image, onClick }) => {
  return (
    <div className="tile" onClick={onClick}>
      <img src={image} alt="Actor" />
    </div>
  );
};

export default Tile;