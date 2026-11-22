/**
 * Static export (JAMstack): `npm run build` writes plain HTML/CSS/JS to `out/`,
 * which can be hosted on GitHub Pages or any static host.
 *
 * BASE_PATH is set by the GitHub Pages workflow to "/<repository-name>" because
 * project sites are served from https://<user>.github.io/<repository-name>/.
 * Locally it is empty, so the site runs at http://localhost:3000/.
 */
const basePath = process.env.BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
