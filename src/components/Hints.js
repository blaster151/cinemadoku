import React from 'react';
import './Hints.css';

function Hints({ hints, onHintHover, onHintLeave }) {
  return (
    <div className="hints-container">
      <h2>Hints</h2>
      <ul className="hints-list">
        {hints.map((hint) => (
          <li
            key={hint.id}
            className="hint-item"
            onMouseEnter={() => onHintHover(hint.id)}
            onMouseLeave={() => onHintLeave()}
          >
            <span className="hint-color" style={{ backgroundColor: hint.color }}></span>
            {hint.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Hints;