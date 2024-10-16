import React from 'react';
import Tile from './Tile';
import '../styles/Tiles.css';

const Tiles = ({ tiles, onTileClick }) => {
  return (
    <div className="tiles-container">
      {tiles.map((tile, index) => (
        <div key={index} className="tile-wrapper">
          <Tile
            image={tile.image}
            onClick={() => onTileClick(index)}
          />
          <div className="tile-name">{tile.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Tiles;