import React from 'react';
import { useDrop } from 'react-dnd';
import PlacedTile from './PlacedTile';

function Cell({ type, rowIndex, cellIndex, onDrop, onInvalidDrop, onSwap, placedTile, hintColors, isHighlighted, onHintHover, onHintLeave, activeHint }) {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: 'tile',
    drop: (item) => onDrop(item.id, rowIndex, cellIndex),
    canDrop: (item) => {
      if (type === null) return false;
      if (item.type !== type) {
        onInvalidDrop?.();
        return false;
      }
      return true;
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }), [rowIndex, cellIndex, onDrop, type, onInvalidDrop]);

  return (
    <div 
      ref={drop}
      className={`cell ${type ? '' : 'empty'} ${isOver ? 'is-over' : ''} ${canDrop ? 'can-drop' : ''} ${isHighlighted ? 'highlighted' : ''}`}
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
