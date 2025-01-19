import { useEffect } from 'react';

export function useImagePreloader(puzzle, themeId = '1') {
  useEffect(() => {
    if (!puzzle) return;

    // Preload images for actor tiles
    const actorTiles = puzzle.tiles.filter(tile => tile.type === 'Actor');
    actorTiles.forEach(tile => {
      const img = new Image();
      img.src = `/images/themes/${themeId}/actors/${tile.data.name}.png`;
    });

    // No cleanup needed - browser will handle image cache
  }, [puzzle, themeId]);
}
