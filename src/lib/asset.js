/**
 * Prefix a path in /public with the site's base path.
 * Needed for plain <img> tags when the site is served from a sub-folder
 * (e.g. GitHub Pages project sites).
 *
 *   asset('/images/sites/casa-real-480.webp')
 *   -> '/pangasinan-heritage-showcase/images/sites/casa-real-480.webp' on GitHub Pages
 */
export function asset(path) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${base}${path}`;
}
