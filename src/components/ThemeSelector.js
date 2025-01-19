import React from 'react';
import './ThemeSelector.css';

function ThemeSelector({ currentTheme, onThemeChange }) {
  return (
    <div className="theme-selector">
      <select 
        value={currentTheme} 
        onChange={(e) => onThemeChange(e.target.value)}
        className="theme-select"
      >
        <option value="1">Classic</option>
        <option value="2">Vintage</option>
        <option value="3">Modern</option>
        <option value="4">Noir</option>
      </select>
    </div>
  );
}

export default ThemeSelector; 