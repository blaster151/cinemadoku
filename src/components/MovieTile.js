import React, { useState, useEffect } from 'react';
import { normalizeForImagePath } from '../utils/textNormalizer';

function MovieTile({ title, themeId = '1' }) {
  const [imageExists, setImageExists] = useState(false);
  const normalizedTitle = normalizeForImagePath(title);
  const imagePath = `/themes/${themeId}/movies/${normalizedTitle}.png`;

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageExists(true);
    };
    img.onerror = () => {
      setImageExists(false);
    };
    img.src = imagePath;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [title, normalizedTitle, themeId, imagePath]);

  if (imageExists) {
    return (
      <div className="movie-tile">
        <img 
          src={imagePath}
          alt=""
          className="movie-image"
        />
      </div>
    );
  }

  return (
    <p className="movie-title-only">{title}</p>
  );
}

export default MovieTile; 