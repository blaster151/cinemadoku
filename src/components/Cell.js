import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import PlacedTile from './PlacedTile';

function Cell({ type, rowIndex, cellIndex, onDrop, placedTile, onInvalidDrop, onSwap, hintColors, isHighlighted, onHintHover, onHintLeave, activeHint }) {
  const [dropPosition, setDropPosition] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: 'tile',
    canDrop: (item) => {
      return type === item.type;
    },
    drop: (item, monitor) => {
      if (monitor.didDrop()) return;

      const dropOffset = monitor.getClientOffset();
      const cellElement = document.querySelector(`[data-cell="${rowIndex}-${cellIndex}"]`);
      const cellRect = cellElement.getBoundingClientRect();
      
      const relativeX = dropOffset.x - cellRect.left;
      const relativeY = dropOffset.y - cellRect.top;
      
      setDropPosition({
        x: relativeX,
        y: relativeY
      });
      setIsAnimating(true);

      setTimeout(() => {
        setIsAnimating(false);
        setDropPosition(null);
      }, 300);

      if (item.type === type) {
        if (placedTile) {
          onSwap(item.id, rowIndex, cellIndex);
        } else {
          onDrop(item.id, rowIndex, cellIndex);
        }
      } else {
        onInvalidDrop();
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }), [type, rowIndex, cellIndex, onDrop, onInvalidDrop, onSwap, placedTile]);

  const tileStyle = dropPosition && isAnimating ? {
    left: `${dropPosition.x}px`,
    top: `${dropPosition.y}px`,
    transform: 'none'
  } : {
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  };

  const classNames = [
    'cell',
    type ? type.toLowerCase() : 'empty',
    isOver && canDrop ? 'is-over' : '',
    canDrop ? 'can-drop' : '',
    isHighlighted ? 'highlighted' : ''
  ].filter(Boolean).join(' ');

  return (
    <div 
      ref={drop} 
      className={`cell ${classNames}`}
      data-cell={`${rowIndex}-${cellIndex}`}
    >
      {type && <span className="cell-type">{type}</span>}
      {placedTile && (
        <div style={{
          position: 'absolute',
          ...tileStyle,
          transition: isAnimating ? 'none' : 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}>
          <PlacedTile tile={placedTile} />
        </div>
      )}
      {hintColors.map((color, index) => (
        <div 
          key={index} 
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
