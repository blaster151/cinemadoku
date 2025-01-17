import { useEffect } from 'react';

export function useImagePreloader(puzzle) {
  useEffect(() => {
    if (!puzzle) return;

    // Preload images for actor tiles
    const actorTiles = puzzle.tiles.filter(tile => tile.type === 'Actor');
    actorTiles.forEach(tile => {
      const img = new Image();
      img.src = `/images/${tile.data.name}.png`;
    });

    // No cleanup needed - browser will handle image cache
  }, [puzzle]);
}
