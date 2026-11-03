"use client";

import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  MapPin,
  Headset,
  User,
  Store,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { sectionHeaderStagger, staggerItem, viewportOnce, springSoft } from "@/lib/motion";
import { cn } from "@/lib/utils";

const perks = [
  {
    icon: Zap,
    title: "Rapidité express",
    desc: "Des interventions en moins de 15 minutes et des livraisons en un temps record dans toute la ville.",
    span: "md:col-span-3",
    bg: "bg-gradient-to-br from-brand-blue to-brand-blue-light",
    text: "text-white",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité garantie",
    desc: "Professionnels identifiés, colis suivis, transactions transparentes : la confiance au cœur de chaque mission.",
    span: "md:col-span-3",
    bg: "bg-white",
    text: "text-secondary",
  },
  {
    icon: MapPin,
    title: "Couverture urbaine totale",
    desc: "Présents partout à Brazzaville et dans les zones périphériques pour être toujours à proximité de vous.",
    span: "md:col-span-3",
    bg: "bg-gradient-to-br from-brand-orange to-orange-500",
    text: "text-white",
  },
  {
    icon: Headset,
    title: "Accompagnement humain",
    desc: "Une équipe dédiée, joignable par WhatsApp ou téléphone, du premier appel à la remise finale.",
    span: "md:col-span-3",
    bg: "bg-white",
    text: "text-secondary",
  },
];

const audiences = [
  { icon: User, label: "Particuliers", desc: "Envoyez un colis, commandez un repas ou réservez un taxi en toute simplicité." },
  { icon: Store, label: "Commerçants", desc: "Livrez vos clients sans gérer la logistique, de la boutique à la porte." },
  { icon: Building2, label: "Entreprises", desc: "Logistique B2B, fret et envois récurrents avec un partenaire dédié." },
];

export default function WhatWeOffer() {
  return (
    <section id="ce-que-nous-offrons" className="relative overflow-hidden bg-brand-blue-deep py-24 text-white md:py-32">
      {/* Décor */}
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.12) 1px, transparent 0)",
        backgroundSize: "30px 30px",
      }} aria-hidden />
      <div className="pointer-events-none absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-brand-blue/30 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-brand-orange/15 blur-3xl" aria-hidden />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center md:mb-20"
          variants={sectionHeaderStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p
            variants={staggerItem}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md"
          >
            Ce que nous offrons
          </motion.p>
          <motion.h2
            variants={staggerItem}
            className="mb-5 text-4xl font-extrabold leading-tight md:text-5xl"
          >
            Des garanties <span className="text-gradient">concrètes</span> au quotidien
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg leading-relaxed text-white/70">
            Chez Biso, chaque prestation repose sur les mêmes engagements : vitesse, sécurité, couverture
            et proximité humaine.
          </motion.p>
        </motion.div>

        {/* Grille des engagements */}
        <div className="grid gap-5 md:grid-cols-12">
          {perks.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ ...springSoft, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className={cn("rounded-[1.75rem] p-8 shadow-xl", perk.bg, perk.text, perk.span)}
              >
                <span
                  className={cn(
                    "mb-5 flex h-14 w-14 items-center justify-center rounded-2xl",
                    perk.bg.includes("bg-white") ? "bg-brand-blue/10 text-brand-blue" : "bg-white/15 text-white"
                  )}
                >
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mb-2 text-xl font-extrabold">{perk.title}</h3>
                <p className={cn("text-sm leading-relaxed", perk.text === "text-white" ? "text-white/80" : "text-slate-500")}>
                  {perk.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Pour qui ? */}
        <motion.div
          variants={sectionHeaderStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid gap-5 md:grid-cols-3"
        >
          {audiences.map((aud, i) => {
            const Icon = aud.icon;
            return (
              <motion.div
                key={aud.label}
                variants={staggerItem}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-md transition-colors hover:border-brand-orange/40"
              >
                <div className="mb-4 flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange/20 text-brand-orange">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-extrabold">{aud.label}</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70">{aud.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-xs font-bold text-brand-orange">
                  <CheckCircle2 className="h-4 w-4" />
                  Solution adaptée
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
