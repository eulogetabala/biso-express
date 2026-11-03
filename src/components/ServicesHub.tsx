"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Package, Car, Utensils, ShoppingBag, Truck, ArrowRight, Check } from "lucide-react";
import { sectionHeaderStagger, staggerItem, viewportOnce, transition } from "@/lib/motion";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "express",
    name: "Biso Express",
    icon: Package,
    tagline: "Livraison urbaine rapide & sécurisée",
    desc: "Envoyez ou recevez des colis, plis urgents et marchandises de boutique. Coursiers disponibles en un temps record, remise en main propre sécurisée.",
    features: ["Récupération en moins de 15 min", "Suivi de course en temps réel", "Remise en main propre"],
    image: "/1.jpeg",
    tone: "orange",
    number: "01",
  },
  {
    id: "taxi",
    name: "Biso Taxi",
    icon: Car,
    tagline: "Déplacements urbains sereins",
    desc: "Chauffeurs certifiés, véhicules propres et climatisés, tarifs fixes connus à l'avance. Réservez votre trajet en un clic, immédiat ou planifié.",
    features: ["Chauffeurs professionnels", "Tarifs fixes à l'avance", "Réservation immédiate"],
    image: "/2.jpeg",
    tone: "blue",
    number: "02",
  },
  {
    id: "food",
    name: "Biso Food",
    icon: Utensils,
    tagline: "Vos plats préférés à domicile",
    desc: "Commandez auprès de nos restaurants partenaires sélectionnés pour la qualité et recevez vos plats encore chauds chez vous ou au bureau.",
    features: ["Sacs isothermes", "Restaurants partenaires", "Livraison rapide"],
    image: "/3.jpeg",
    tone: "orange",
    number: "03",
  },
  {
    id: "market",
    name: "Biso Market",
    icon: ShoppingBag,
    tagline: "Vos courses de marché en ligne",
    desc: "Nos personal shoppers sélectionnent les meilleurs produits frais au marché selon votre liste et vous les livrent directement chez vous.",
    features: ["Produits frais sélectionnés", "Votre liste respectée", "Livraison à l'heure choisie"],
    image: "/4.jpeg",
    tone: "blue",
    number: "04",
  },
  {
    id: "logistic",
    name: "Biso Logistic",
    icon: Truck,
    tagline: "Logistique B2B & transport lourd",
    desc: "Déménagements, fret et marchandises volumineuses. Une flotte adaptée, une assistance au chargement et un devis gratuit et rapide.",
    features: ["Flotte variée", "Assistance chargement", "Devis gratuit & rapide"],
    image: "/5.jpeg",
    tone: "orange",
    number: "05",
  },
];

export default function ServicesHub() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="nos-services" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-brand-orange/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-1/4 h-96 w-96 rounded-full bg-brand-blue/[0.07] blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center md:mb-20"
          variants={sectionHeaderStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p
            variants={staggerItem}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-brand-orange/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-orange"
          >
            Nos services
          </motion.p>
          <motion.h2
            variants={staggerItem}
            className="mb-5 text-4xl font-extrabold leading-tight text-secondary md:text-5xl"
          >
            Les 5 univers <span className="text-gradient">Biso</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg text-muted-foreground leading-relaxed">
            Une seule plateforme pour livrer, transporter, vous nourrir, faire vos courses et gérer votre logistique à Brazzaville.
          </motion.p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5 xl:gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isActive = active === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ ...transition, delay: i * 0.07 }}
                onMouseEnter={() => setActive(service.id)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(active === service.id ? null : service.id)}
                className={cn(
                  "group relative flex min-h-[26rem] cursor-pointer flex-col justify-between overflow-hidden rounded-[1.75rem] border p-6 transition-all duration-500 xl:min-h-[30rem]",
                  isActive
                    ? "border-transparent bg-brand-blue text-white shadow-2xl shadow-brand-blue/25"
                    : "border-slate-200/80 bg-white hover:border-brand-blue/30"
                )}
              >
                {/* Image de fond quand actif */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={service.image}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 1280px) 50vw, 20vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/85 to-brand-blue/60" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="relative z-10 flex items-start justify-between">
                  <div
                    className={cn(
                      "flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300",
                      isActive
                        ? "bg-white text-brand-blue shadow-lg"
                        : "bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white"
                    )}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <span
                    className={cn(
                      "font-heading text-4xl font-black transition-colors",
                      isActive ? "text-white/30" : "text-slate-200"
                    )}
                  >
                    {service.number}
                  </span>
                </div>

                <div className="relative z-10 mt-auto pt-16">
                  <h3 className="mb-1 text-xl font-black uppercase tracking-tight">
                    {service.name}
                  </h3>

                  <AnimatePresence mode="wait" initial={false}>
                    {isActive ? (
                      <motion.div
                        key="desc"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <p className="text-sm font-medium leading-relaxed text-white/90">
                          {service.desc}
                        </p>
                        <ul className="space-y-2">
                          {service.features.map((f) => (
                            <li key={f} className="flex items-center gap-2 text-xs font-bold text-white/85">
                              <Check className="h-3.5 w-3.5 shrink-0 text-brand-orange" />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href="/services"
                          className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-transform hover:scale-105"
                        >
                          Accéder au service <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </motion.div>
                    ) : (
                      <motion.p
                        key="tagline"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={cn(
                          "text-sm font-semibold",
                          isActive ? "text-white" : "text-slate-500"
                        )}
                      >
                        {service.tagline}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          variants={staggerItem}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-3 rounded-full bg-brand-blue px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white shadow-xl shadow-brand-blue/25 transition-all hover:bg-brand-blue/90"
          >
            Découvrir tous les services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
