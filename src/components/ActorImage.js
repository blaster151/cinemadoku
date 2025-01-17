import React from 'react';
import { normalizeForImagePath } from '../utils/textNormalizer';

function ActorImage({ name, onLoad, className = '' }) {
  const normalizedName = normalizeForImagePath(name);
  
  return (
    <img 
      src={`/images/${normalizedName}.png`}
      alt=""
      className={className}
      onLoad={onLoad}
    />
  );
}

export default ActorImage;
