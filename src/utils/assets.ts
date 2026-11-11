/**
 * Asset URL helper for GitHub Pages, Cloud Run, and local development.
 * Handles subdirectories and relative base paths automatically.
 */
export function getAssetUrl(path: string): string {
  if (!path) return '';
  // Data URLs and absolute external URLs should not be modified
  if (path.startsWith('data:') || path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // Remove leading slash if any
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // import.meta.env.BASE_URL is set by Vite (e.g., './' or '/repo-name/')
  const baseUrl = import.meta.env.BASE_URL || './';
  const prefix = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

  return `${prefix}${cleanPath}`;
}
