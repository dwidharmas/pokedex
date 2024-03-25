/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  env: {
    POKEDEX_URL: process.env.POKEDEX_URL,
    SPRITES_URL: process.env.SPRITES_URL
  }
};

export default nextConfig;
