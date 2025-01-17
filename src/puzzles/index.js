// This will be our puzzle loader
export async function loadPuzzle(id) {
  // Dynamic import based on puzzle ID
  const module = await import(`./puzzle${id}.js`);
  return module.default;
} 