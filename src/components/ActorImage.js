import React, { useState } from 'react';

function ActorImage({ name, onLoad, className = '' }) {
  return (
    <img 
      src={`/images/${name}.png`}
      alt={name}
      className={className}
      onLoad={onLoad}
    />
  );
}

export default ActorImage;
