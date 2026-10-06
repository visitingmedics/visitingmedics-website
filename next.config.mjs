/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static site in /out: works on GitHub Pages, Netlify and Vercel
  images: { unoptimized: true },
  trailingSlash: false,
  eslint: { ignoreDuringBuilds: true },
};
export default nextConfig;
