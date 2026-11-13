/**
 * Central media base URL and path resolver for AWS Amplify Storage (S3 / CloudFront).
 * Override via REACT_APP_MEDIA_BASE_URL in .env or Amplify Hosting environment variables.
 */
export const DEFAULT_MEDIA_BASE_URL =
  'https://amplify-d16vhnu5amcbsu-ma-thoughtflowsstoragebucke-0tvgcluheq7z.s3.ap-south-1.amazonaws.com/media';

export const MEDIA_BASE_URL = (
  process.env.REACT_APP_MEDIA_BASE_URL || DEFAULT_MEDIA_BASE_URL
).replace(/\/+$/, '');

/**
 * Resolves a media path relative to `src/` (e.g. "images/hero-video.mp4")
 * into a properly URL-encoded Amplify Storage URL.
 *
 * @param {string} relativePath
 * @returns {string}
 */
export function mediaUrl(relativePath) {
  if (!relativePath) return '';
  if (/^(https?:)?\/\//i.test(relativePath) || relativePath.startsWith('data:') || relativePath.startsWith('/')) {
    return relativePath;
  }
  const normalized = relativePath
    .replace(/\\/g, '/')
    .replace(/^\/+/, '');
  const encodedPath = normalized
    .split('/')
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join('/');
  return `${MEDIA_BASE_URL}/${encodedPath}`;
}
