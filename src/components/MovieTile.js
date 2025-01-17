import React, { useState, useEffect } from 'react';
import { normalizeForImagePath } from '../utils/textNormalizer';

function MovieTile({ title }) {
  const [imageExists, setImageExists] = useState(false);
  const normalizedTitle = normalizeForImagePath(title);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageExists(true);
    img.onerror = () => setImageExists(false);
    img.src = `/images/movies/${normalizedTitle}.png`;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [title]);

  if (imageExists) {
    return (
      <>
        <img 
          src={`/images/movies/${normalizedTitle}.png`}
          alt=""
          className="movie-image"
        />
        <p>{title}</p>
      </>
    );
  }

  return (
    <p className="movie-title-only">{title}</p>
  );
}

export default MovieTile; 