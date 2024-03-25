/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
      }
    ],
  },
  env: {
    POKEDEX_URL: process.env.POKEDEX_URL,
    SPRITES_URL: process.env.SPRITES_URL
  }
};

export default nextConfig;
