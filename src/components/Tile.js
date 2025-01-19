import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import ActorImage from './ActorImage';
import MovieTile from './MovieTile';

function LooseTile({ tile, themeId }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'tile',
    item: { id: tile.id, type: tile.type, data: tile.data },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }), [tile]);

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      ref={drag}
      className={`loose-tile ${tile.type.toLowerCase()}`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      data-tile-id={tile.id}
    >
      {tile.type === 'Actor' ? (
        <>
          <ActorImage 
            name={tile.data.name}
            onLoad={() => setImageLoaded(true)}
            className={imageLoaded ? 'loaded' : ''}
            themeId={themeId}
          />
          <p>{tile.data.name}</p>
        </>
      ) : (
        <MovieTile 
          title={tile.data.title}
          themeId={themeId}
        />
      )}
    </div>
  );
}

export default LooseTile;