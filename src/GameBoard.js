import React from 'react';
import Tile from './Tile';
import '../styles/GameBoard.css';

const GameBoard = ({ board, onTileClick }) => {
  return (
    <div className="game-board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((tile, colIndex) => (
            <div key={colIndex} className="board-tile">
              <Tile
                image={tile.image}
                onClick={() => onTileClick(rowIndex, colIndex)}
              />
              {tile.name && <div className="tile-name">{tile.name}</div>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;