import React from 'react';
import { normalizeForImagePath } from '../utils/textNormalizer';

function ActorImage({ name, onLoad, className = '', themeId = '1' }) {
  const normalizedName = normalizeForImagePath(name);
  
  return (
    <img 
      src={`/images/themes/${themeId}/actors/${normalizedName}.png`}
      alt=""
      className={className}
      onLoad={onLoad}
    />
  );
}

export default ActorImage;
