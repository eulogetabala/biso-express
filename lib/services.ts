export type Service = {
  id: string
  name: string
  tagline: string
  sector: string
  description: string
  image: string
  accent: 'primary' | 'secondary' | 'accent'
  features: string[]
  stat: { value: string; label: string }
}

export const services: Service[] = [
  {
    id: 'express',
    name: 'Biso Express',
    tagline: 'Livraison éclair',
    sector: 'Coursier & livraison',
    description:
      "La marque historique du groupe. Colis, documents et achats livrés en un temps record à travers Brazzaville, avec une flotte de coursiers suivie en temps réel.",
    image: '/images/biso-express.png',
    accent: 'accent',
    features: ['Suivi en direct', 'Livraison express', 'Coursiers vérifiés'],
    stat: { value: '45 min', label: 'délai moyen' },
  },
  {
    id: 'taxi',
    name: 'Biso Taxi',
    tagline: 'Déplacez-vous',
    sector: 'Mobilité urbaine',
    description:
      "Un service de transport indépendant, jour et nuit. Chauffeurs de confiance, tarifs affichés à l'avance, paiement mobile money ou cash.",
    image: '/images/biso-taxi.png',
    accent: 'primary',
    features: ['Prix fixé à l’avance', 'Disponible 24h/24', 'Mobile money & cash'],
    stat: { value: '24/7', label: 'disponibilité' },
  },
  {
    id: 'food',
    name: 'Biso Food',
    tagline: 'Régalez-vous',
    sector: 'Restauration & livraison',
    description:
      "Des ngandas aux restaurants tendance de Brazzaville, une plateforme dédiée qui livre vos plats préférés bien chauds, directement chez vous.",
    image: '/images/biso-food.png',
    accent: 'accent',
    features: ['Restaurants partenaires', 'Plats maintenus au chaud', 'Offres quotidiennes'],
    stat: { value: '150+', label: 'restaurants' },
  },
  {
    id: 'market',
    name: 'Biso Market',
    tagline: 'Faites vos courses',
    sector: 'E-commerce & épicerie',
    description:
      "Produits frais du marché, épicerie et essentiels de la maison livrés chez vous. Une activité pensée pour soutenir les vendeurs locaux congolais.",
    image: '/images/biso-market.png',
    accent: 'secondary',
    features: ['Produits frais du jour', 'Vendeurs locaux', 'Livraison programmée'],
    stat: { value: '10k+', label: 'produits' },
  },
  {
    id: 'logistics',
    name: 'Biso Logistics',
    tagline: 'Transportez tout',
    sector: 'Logistique & fret B2B',
    description:
      "La branche B2B du groupe : transport de marchandises, stockage et distribution à l'échelle nationale pour les entreprises. Fiabilité garantie.",
    image: '/images/biso-logistics.png',
    accent: 'primary',
    features: ['Fret national', 'Stockage sécurisé', 'Solutions entreprises'],
    stat: { value: '12', label: 'départements' },
  },
]
