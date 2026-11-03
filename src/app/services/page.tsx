"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Package, Car, Utensils, ShoppingBag, Truck, Check, ArrowRight, Calculator, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { PHONE_WHATSAPP_HREF } from "@/lib/contact";

const servicesList = [
  {
    id: "express",
    name: "Biso Express",
    icon: Package,
    tagline: "Livraison urbaine rapide & sécurisée",
    description: "Le service idéal pour envoyer ou recevoir des colis, des plis administratifs urgents ou des marchandises de boutique. Nos coursiers interviennent en un temps record pour acheminer vos biens en toute sécurité.",
    image: "/1.jpeg",
    features: [
      "Récupération de colis en moins de 15 minutes",
      "Remise en main propre sécurisée",
      "Suivi de course en temps réel",
      "Tarification claire et transparente"
    ],
    ctaText: "Envoyer un colis"
  },
  {
    id: "taxi",
    name: "Biso Taxi",
    icon: Car,
    tagline: "Déplacements urbains sereins & confortables",
    description: "Réservez votre taxi de confiance à Brazzaville. Que ce soit pour vos rendez-vous professionnels, vos sorties ou vos trajets vers l'aéroport, nos chauffeurs certifiés vous garantissent un voyage confortable et sécurisé.",
    image: "/2.jpeg",
    features: [
      "Véhicules propres et climatisés",
      "Chauffeurs professionnels et discrets",
      "Tarifs fixes connus à l'avance",
      "Réservation immédiate ou planifiée"
    ],
    ctaText: "Réserver un taxi"
  },
  {
    id: "food",
    name: "Biso Food",
    icon: Utensils,
    tagline: "Vos plats préférés, livrés à domicile",
    description: "Une envie de gastronomie locale ou de cuisine internationale ? Commandez auprès de nos restaurants partenaires sélectionnés pour leur qualité et recevez vos plats encore chauds chez vous ou au bureau.",
    image: "/3.jpeg",
    features: [
      "Sac isotherme pour maintien au chaud",
      "Nombreux restaurants partenaires",
      "Livraison rapide et soignée",
      "Commandes groupées disponibles"
    ],
    ctaText: "Commander à manger"
  },
  {
    id: "market",
    name: "Biso Market",
    icon: ShoppingBag,
    tagline: "Vos courses de marché en ligne",
    description: "Évitez la cohue des marchés et des supermarchés. Nos personal shoppers font vos courses selon vos exigences de qualité et de fraîcheur, et vous les livrent directement chez vous.",
    image: "/4.jpeg",
    features: [
      "Produits frais sélectionnés avec soin",
      "Respect scrupuleux de votre liste",
      "Tarifs transparents",
      "Livraison à l'heure qui vous convient"
    ],
    ctaText: "Faire mes courses"
  },
  {
    id: "logistic",
    name: "Biso Logistic",
    icon: Truck,
    tagline: "Logistique B2B & transport lourd",
    description: "Des solutions de transport robustes pour les professionnels et les particuliers. Déménagements, acheminement de marchandises volumineuses ou approvisionnement logistique régulier, nous avons le véhicule adapté.",
    image: "/5.jpeg",
    features: [
      "Flotte variée (camionnettes, camions)",
      "Assistance au chargement et déchargement",
      "Solutions sur-mesure pour entreprises",
      "De devis gratuit et rapide"
    ],
    ctaText: "Demander un devis"
  }
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("express");

  // Estimators / Widgets states
  // Taxi Estimator
  const [taxiFrom, setTaxiFrom] = useState("Centre-ville");
  const [taxiTo, setTaxiTo] = useState("Talangaï");
  const [taxiPrice, setTaxiPrice] = useState(2500);

  const calculateTaxiPrice = () => {
    const prices: Record<string, Record<string, number>> = {
      "Centre-ville": { "Talangaï": 2500, "Bacongo": 1500, "Makélékélé": 2000, "Ouenzé": 1500 },
      "Bacongo": { "Centre-ville": 1500, "Talangaï": 3000, "Makélékélé": 1000, "Ouenzé": 2000 },
      "Makélékélé": { "Centre-ville": 2000, "Talangaï": 3500, "Bacongo": 1000, "Ouenzé": 2500 },
      "Ouenzé": { "Centre-ville": 1500, "Talangaï": 1500, "Bacongo": 2000, "Makélékélé": 2500 },
    };
    const price = prices[taxiFrom]?.[taxiTo] || 2000;
    setTaxiPrice(price);
  };

  // Express Estimator
  const [packageWeight, setPackageWeight] = useState("light");
  const [expressPrice, setExpressPrice] = useState(1500);

  const handleWeightChange = (weight: string) => {
    setPackageWeight(weight);
    if (weight === "light") setExpressPrice(1500);
    else if (weight === "medium") setExpressPrice(2500);
    else setExpressPrice(4000);
  };

  // Market list helper
  const [newItem, setNewItem] = useState("");
  const [shoppingList, setShoppingList] = useState<string[]>([
    "Bananes douces (1 régime)",
    "Poisson frais (2 kg)",
    "Huile végétale (1L)"
  ]);

  const addShoppingItem = () => {
    if (newItem.trim()) {
      setShoppingList([...shoppingList, newItem.trim()]);
      setNewItem("");
    }
  };

  const removeShoppingItem = (index: number) => {
    setShoppingList(shoppingList.filter((_, i) => i !== index));
  };

  const activeService = servicesList.find((s) => s.id === activeTab) || servicesList[0];

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Navbar />

      {/* Header */}
      <section className="relative pt-32 pb-16 bg-[#0F172A] text-white">
        <div className="container mx-auto px-4 text-center">
          <span className="text-brand-primary text-xs font-black uppercase tracking-widest block mb-3">Nos Services</span>
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: 'var(--font-outfit)' }}>
            Ce que nous faisons pour vous
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-xs md:text-sm leading-relaxed font-medium">
            Découvrez nos cinq univers conçus pour apporter de la fluidité à votre quotidien à Brazzaville.
          </p>
        </div>
      </section>

      {/* Tab Navigation (Premium pills) */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-[72px] z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-4 pb-2 md:pb-0 scrollbar-none justify-start md:justify-center">
            {servicesList.map((service) => {
              const Icon = service.icon;
              const isActive = activeTab === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full font-bold text-xs tracking-wide uppercase transition-all duration-300 shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-brand-blue text-white shadow-md shadow-brand-blue/20"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                  style={{ fontFamily: 'var(--font-outfit)' }}
                >
                  <Icon className="w-4.5 h-4.5" />
                  {service.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Slider Display Area */}
      <section className="py-20 flex-1 bg-white">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-12 gap-12 items-center"
            >
              {/* Left Column: Text Content */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-brand-primary text-xs font-black uppercase tracking-widest bg-brand-primary/10 px-4 py-1.5 rounded-full">
                  {activeService.name}
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight" style={{ fontFamily: 'var(--font-outfit)' }}>
                  {activeService.tagline}
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {activeService.description}
                </p>

                {/* Features checklist */}
                <ul className="grid sm:grid-cols-2 gap-4 pt-2">
                  {activeService.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-slate-600 text-xs md:text-sm font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Main Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <a
                    href={PHONE_WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-8 h-14 bg-brand-primary text-white rounded-full font-black shadow-lg shadow-brand-primary/15 hover:opacity-90 transition-opacity uppercase tracking-wider text-xs"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    {activeService.ctaText} <ArrowRight className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>

              {/* Right Column: Visual and interactive widgets */}
              <div className="lg:col-span-6 space-y-6">
                {/* Main Slide Image */}
                <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-xl border border-slate-200">
                  <Image
                    src={activeService.image}
                    alt={activeService.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Interactive premium widgets dependent on the active service */}
                {activeTab === "express" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4"
                  >
                    <div className="flex items-center gap-3 text-slate-800 font-bold">
                      <Calculator className="w-5 h-5 text-brand-blue" />
                      <h3 style={{ fontFamily: 'var(--font-outfit)' }}>Simulateur de Tarif de Livraison</h3>
                    </div>
                    <div className="space-y-3">
                      <label className="block text-[10px] font-black uppercase text-slate-400 tracking-wider">Taille du colis</label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { id: "light", label: "Petit (Plis, Clés)", desc: "1 500 FCFA" },
                          { id: "medium", label: "Moyen (Sac, Carton)", desc: "2 500 FCFA" },
                          { id: "heavy", label: "Volumineux (Gros carton)", desc: "4 000 FCFA" }
                        ].map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => handleWeightChange(item.id)}
                            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                              packageWeight === item.id
                                ? "border-brand-blue bg-[#002774]/5 text-brand-blue font-bold"
                                : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                            }`}
                          >
                            <p className="text-[10px] font-bold uppercase">{item.label.split(' ')[0]}</p>
                            <p className="text-[9px] opacity-75 mt-0.5">{item.desc}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="pt-2 flex justify-between items-center border-t border-slate-200/60">
                      <span className="text-xs font-bold text-slate-500">Estimation du tarif :</span>
                      <span className="text-xl font-black text-brand-blue">{expressPrice} FCFA</span>
                    </div>
                  </motion.div>
                )}

                {activeTab === "taxi" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4"
                  >
                    <div className="flex items-center gap-3 text-slate-800 font-bold">
                      <Calculator className="w-5 h-5 text-brand-blue" />
                      <h3 style={{ fontFamily: 'var(--font-outfit)' }}>Estimation Rapide Course Taxi</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-black uppercase text-slate-400 tracking-wider mb-2">Départ</label>
                        <select
                          value={taxiFrom}
                          onChange={(e) => setTaxiFrom(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs focus:outline-none focus:border-brand-blue font-semibold text-slate-700"
                        >
                          <option value="Centre-ville">Centre-ville</option>
                          <option value="Bacongo">Bacongo</option>
                          <option value="Makélékélé">Makélékélé</option>
                          <option value="Ouenzé">Ouenzé</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-black uppercase text-slate-400 tracking-wider mb-2">Arrivée</label>
                        <select
                          value={taxiTo}
                          onChange={(e) => setTaxiTo(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs focus:outline-none focus:border-brand-blue font-semibold text-slate-700"
                        >
                          <option value="Talangaï">Talangaï</option>
                          <option value="Bacongo">Bacongo</option>
                          <option value="Makélékélé">Makélékélé</option>
                          <option value="Centre-ville">Centre-ville</option>
                        </select>
                      </div>
                    </div>
                    <div className="pt-2 flex justify-between items-center border-t border-slate-200/60">
                      <button
                        onClick={calculateTaxiPrice}
                        className="px-4 py-2 bg-brand-blue text-white hover:opacity-95 transition-colors font-bold text-xs rounded-xl cursor-pointer"
                      >
                        Calculer
                      </button>
                      <span className="text-xl font-black text-brand-blue">~ {taxiPrice} FCFA</span>
                    </div>
                  </motion.div>
                )}

                {activeTab === "market" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4"
                  >
                    <div className="flex items-center gap-3 text-slate-800 font-bold">
                      <ShoppingBag className="w-5 h-5 text-brand-blue" />
                      <h3 style={{ fontFamily: 'var(--font-outfit)' }}>Créez votre Liste de Courses</h3>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Ex: Tomates (1 panier)..."
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && addShoppingItem()}
                        className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-brand-blue font-medium"
                      />
                      <button
                        onClick={addShoppingItem}
                        className="w-10 h-10 bg-brand-blue text-white rounded-xl flex items-center justify-center hover:opacity-90 cursor-pointer"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                    <ul className="space-y-2 max-h-32 overflow-y-auto">
                      {shoppingList.map((item, index) => (
                        <li key={index} className="flex justify-between items-center bg-white px-3 py-2 rounded-xl text-xs text-slate-700 border border-slate-100">
                          <span className="font-semibold">{item}</span>
                          <button onClick={() => removeShoppingItem(index)} className="text-slate-400 hover:text-red-500 cursor-pointer">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {activeTab === "logistic" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4"
                  >
                    <div className="flex items-center gap-3 text-slate-800 font-bold">
                      <Truck className="w-5 h-5 text-brand-blue" />
                      <h3 style={{ fontFamily: 'var(--font-outfit)' }}>Transport Cargo & Déménagement</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-3 text-center">
                        <div className="p-3 bg-white rounded-2xl border border-slate-200">
                          <p className="text-xs font-black text-slate-800">Petits volumes</p>
                          <p className="text-[10px] text-slate-400 mt-1">Camionnette - dès 15 000 FCFA</p>
                        </div>
                        <div className="p-3 bg-white rounded-2xl border border-slate-200">
                          <p className="text-xs font-black text-slate-800">Gros volumes</p>
                          <p className="text-[10px] text-slate-400 mt-1">Camion 5T - Devis personnalisé</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
}
