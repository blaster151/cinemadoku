export function normalizeForImagePath(text) {
  return text
    .normalize('NFD')                 // Separate accented characters
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^a-zA-Z0-9\s]/g, '')  // Remove special characters
    .replace(/\s+/g, ' ')            // Normalize spaces
    .trim();                         // Remove leading/trailing spaces
} 