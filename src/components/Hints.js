import React from 'react';
import './Hints.css';

function Hints({ hints, onHintHover, onHintLeave, activeHint }) {
  return (
    <div className="hints-container">
      <h2>Hints</h2>
      <ul className="hints-list">
        {hints.map((hint) => (
          <li
            key={hint.id}
            className={`hint-item ${hint.color === activeHint ? 'active' : ''}`}
            onMouseEnter={() => onHintHover(hint.color)}
            onMouseLeave={onHintLeave}
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