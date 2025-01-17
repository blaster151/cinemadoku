import React, { useState, useEffect } from 'react';

function ImageWithFallback({ name, onLoad, className = '' }) {
  const [currentFormat, setCurrentFormat] = useState('png');
  const [imageFailed, setImageFailed] = useState(false);
  const [attemptedFormats, setAttemptedFormats] = useState(new Set());

  useEffect(() => {
    const img = new Image();
    
    img.onload = () => {
      onLoad?.();
      setImageFailed(false);
    };

    img.onerror = () => {
      const newAttempted = new Set(attemptedFormats);
      newAttempted.add(currentFormat);
      setAttemptedFormats(newAttempted);

      if (!attemptedFormats.has('jpeg')) {
        console.log(`${currentFormat} failed for ${name}, trying JPEG...`);
        setCurrentFormat('jpeg');
      } else {
        console.log('Failed to load image:', name);
        setImageFailed(true);
      }
    };

    img.src = `/images/${name}.${currentFormat}`;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [name, currentFormat, attemptedFormats, onLoad]);

  if (imageFailed) {
    return null;
  }

  return (
    <img 
      src={`/images/${name}.${currentFormat}`}
      alt={name}
      className={className}
    />
  );
}

export default ImageWithFallback;
