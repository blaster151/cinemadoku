import React from 'react';
import { useDrop } from 'react-dnd';
import PlacedTile from './PlacedTile';

function Cell({ type, rowIndex, cellIndex, onDrop, onInvalidDrop, onSwap, placedTile, hintColors, isHighlighted, onHintHover, onHintLeave, activeHint, themeId }) {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: 'tile',
    drop: (item) => onDrop(item.id, rowIndex, cellIndex),
    canDrop: (item) => {
      if (type === null) return false;
      if (item.type !== type) return false;
      return true;
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }), [rowIndex, cellIndex, onDrop, type]);

  return (
    <div 
      ref={drop}
      className={`cell ${type ? '' : 'empty'} ${isOver ? 'is-over' : ''} ${canDrop ? 'can-drop' : ''} ${isHighlighted ? 'highlighted' : ''}`}
      data-position={`${rowIndex}-${cellIndex}`}
    >
      {type && (
        <div className="cell-type">
          <img 
            src={`/icons/${type.toLowerCase()}-placeholder.png`}
            alt=""
            aria-hidden="true"
          />
        </div>
      )}
      {placedTile && (
        <PlacedTile 
          tile={placedTile}
          onSwap={(draggedId) => onSwap(draggedId, rowIndex, cellIndex)}
          themeId={themeId}
        />
      )}
      {hintColors.map((color, index) => (
        <div
          key={color}
          className={`hint-marker hint-marker-${index} ${color === activeHint ? 'active' : ''}`}
          style={{ backgroundColor: color }}
          onMouseEnter={() => onHintHover(color)}
          onMouseLeave={onHintLeave}
        />
      ))}
    </div>
  );
}

export default Cell;
