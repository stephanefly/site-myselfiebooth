/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Permet d'exporter un site statique
  assetPrefix: './', // Assure des chemins relatifs pour les fichiers
  trailingSlash: true, // Ajoute un slash à la fin des URLs
};

module.exports = nextConfig;