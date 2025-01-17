import React, { useState, useEffect } from 'react';
import { normalizeForImagePath } from '../utils/textNormalizer';

function MovieTile({ title }) {
  const [imageExists, setImageExists] = useState(false);
  const normalizedTitle = normalizeForImagePath(title);

  useEffect(() => {
    console.log('MovieTile: Checking image for:', normalizedTitle);
    const img = new Image();
    img.onload = () => {
      console.log('MovieTile: Image found for:', normalizedTitle);
      setImageExists(true);
    };
    img.onerror = () => {
      console.log('MovieTile: No image found for:', normalizedTitle);
      setImageExists(false);
    };
    img.src = `/images/movies/${normalizedTitle}.png`;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [title, normalizedTitle]);

  console.log('MovieTile: Rendering for:', title, 'imageExists:', imageExists);

  if (imageExists) {
    return (
      <div className="movie-tile-debug">
        <img 
          src={`/images/movies/${normalizedTitle}.png`}
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