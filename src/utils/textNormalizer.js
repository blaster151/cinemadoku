export function normalizeForImagePath(text) {
  return text
    .normalize('NFD')                 // Separate accented characters
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^a-zA-Z0-9\s]/g, '')  // Remove special characters but keep spaces
    .replace(/\s+/g, ' ')            // Normalize multiple spaces to single space
    .trim()                          // Remove leading/trailing spaces
    .replace(/\s/g, ' ');            // Replace spaces with spaces (no encoding needed)
} 