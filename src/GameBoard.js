import React from 'react';
import './GameBoard.css';

function GameBoard() {
  const boardPattern = [
    ['Movie', 'Actor', 'Movie', 'Actor', 'Movie'],
    ['Actor', null, 'Actor', null, 'Actor'],
    ['Movie', 'Actor', 'Movie', 'Actor', 'Movie'],
    ['Actor', null, 'Actor', null, 'Actor'],
    ['Movie', 'Actor', 'Movie', 'Actor', 'Movie']
  ];

  const renderCell = (type, rowIndex, cellIndex) => {
    if (type === null) {
      return <div key={`${rowIndex}-${cellIndex}`} className="cell empty"></div>;
    }
    return (
      <div key={`${rowIndex}-${cellIndex}`} className={`cell ${type.toLowerCase()}`}>
        {type}
      </div>
    );
  };

  const renderRow = (row, rowIndex) => {
    return (
      <div key={rowIndex} className="row">
        {row.map((cellType, cellIndex) => renderCell(cellType, rowIndex, cellIndex))}
      </div>
    );
  };

  return (
    <div className="game-board">
      {boardPattern.map((row, rowIndex) => renderRow(row, rowIndex))}
    </div>
  );
}

export default GameBoard;