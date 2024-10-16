import React from 'react';
import Tile from './Tile';
import './Tiles.css';

function Tiles() {
  const generateTiles = () => {
    const tiles = [];
    for (let i = 0; i < 21; i++) {
      const type = Math.random() < 0.5 ? 'Actor' : 'Movie';
      const data = type === 'Actor'
        ? { name: `Actor ${i + 1}` }
        : { title: `Movie ${i + 1}` };
      tiles.push({ type, data });
    }
    return tiles;
  };

  const tiles = generateTiles();

  return (
    <div className="tiles-container">
      <h2>Tiles</h2>
      <div className="tiles-grid">
        {tiles.map((tile, index) => (
          <Tile key={index} type={tile.type} data={tile.data} />
        ))}
      </div>
    </div>
  );
}

export default Tiles;