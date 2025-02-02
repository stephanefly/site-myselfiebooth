/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Permet d'exporter un site statique
  trailingSlash: true, // Ajoute un "/" à la fin des URLs
  images: {
    unoptimized: true, // ✅ Désactive l’optimisation des images
  },
};

module.exports = nextConfig;
