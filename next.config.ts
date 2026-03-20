import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Génère un site statique dans le dossier `out/` après `next build`
  output: "export",
  // Utile pour la plupart des hébergements statiques (évite les routes sans fichier)
  trailingSlash: true,
  images: {
    // `next/image` n'est pas optimisable côté serveur en export statique
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
};

export default nextConfig;
