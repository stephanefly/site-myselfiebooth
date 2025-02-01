/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Permet d'exporter un site statique
  assetPrefix: './', // Charge les assets avec des chemins relatifs
  trailingSlash: true, // Ajoute un "/" à la fin des URLs
};

module.exports = nextConfig;
