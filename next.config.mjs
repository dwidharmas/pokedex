/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'img.pokemondb.net',
        port: '',
      }
    ],
  },
  env: {
    POKEDEX_URL: process.env.POKEDEX_URL,
    POKEMONDB_URL: process.env.POKEMONDB_URL,
  }
};

export default nextConfig;
