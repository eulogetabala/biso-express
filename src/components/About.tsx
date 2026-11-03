"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, PhoneCall, Rocket } from "lucide-react";
import { sectionHeaderStagger, staggerItem, viewportOnce, springSoft, fadeUp } from "@/lib/motion";

const stats = [
  { value: "5", label: "Univers de services" },
  { value: "45 min", label: "Livraison express" },
  { value: "24/7", label: "À votre écoute" },
  { value: "100%", label: "Zone urbaine couverte" },
];

const pillars = [
  { icon: Rocket, title: "Rapidité", desc: "Des interventions express et des délais records dans toute la ville." },
  { icon: HeartHandshake, title: "Proximité", desc: "Une équipe locale à l'écoute, des solutions pensées pour Brazzaville." },
  { icon: PhoneCall, title: "Accompagnement", desc: "Un suivi humain du début à la fin, par WhatsApp ou téléphone." },
];

export default function About() {
  return (
    <section id="a-propos" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-blue/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-brand-orange/[0.05] blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Visuel */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-6"
          >
            <div className="relative mx-auto max-w-lg">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-brand-blue/15 via-transparent to-brand-orange/15 blur-lg" aria-hidden />
              <div className="relative overflow-hidden rounded-[2.25rem] shadow-2xl shadow-brand-blue-deep/20 ring-1 ring-slate-200/70">
                <Image
                  src="/3.jpeg"
                  alt="L'équipe Biso au service des Brazzavillois"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-deep/60 via-transparent to-transparent" />
              </div>

              {/* Carte flottante chiffre */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ ...springSoft, delay: 0.25 }}
                className="absolute -bottom-6 -left-4 rounded-2xl border border-white/70 bg-white/95 px-6 py-4 shadow-xl backdrop-blur-md sm:left-0"
              >
                <p className="font-heading text-3xl font-black text-brand-blue">Biso</p>
                <p className="text-xs font-bold text-slate-500">Plus qu&apos;un service, une solution</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Texte */}
          <div className="lg:col-span-6">
            <motion.div
              variants={sectionHeaderStagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.p
                variants={staggerItem}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-brand-blue/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-blue"
              >
                À propos de Biso
              </motion.p>
              <motion.h2
                variants={staggerItem}
                className="mb-5 text-4xl font-extrabold leading-tight text-secondary md:text-5xl"
              >
                Un écosystème urbain, <span className="text-gradient-blue">un seul partenaire</span>
              </motion.h2>
              <motion.p variants={staggerItem} className="text-lg leading-relaxed text-muted-foreground">
                Biso est né de la volonté de simplifier et moderniser le transport, la livraison et la
                logistique urbaine à Brazzaville. Nous combinons réactivité technologique et présence
                humaine pour répondre à chacun de vos besoins.
              </motion.p>
              <motion.p variants={staggerItem} className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Colis, déplacements, repas, courses ou fret : nos équipes interviennent avec le même
                exigence de qualité, de transparence et de rapidité.
              </motion.p>
            </motion.div>

            {/* Piliers */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportOnce}
                    transition={{ ...springSoft, delay: 0.15 + i * 0.1 }}
                    className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5 transition-colors hover:border-brand-blue/25 hover:bg-white"
                  >
                    <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-sm font-extrabold text-secondary">{p.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">{p.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Chiffres */}
            <motion.div
              variants={sectionHeaderStagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-10 grid grid-cols-2 gap-6 border-t border-slate-100 pt-8 sm:grid-cols-4"
            >
              {stats.map((s) => (
                <motion.div key={s.label} variants={staggerItem}>
                  <p className="font-heading text-2xl font-black text-brand-orange md:text-3xl">{s.value}</p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={staggerItem}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-10"
            >
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white shadow-lg shadow-brand-blue/25 transition-all hover:bg-brand-blue/90"
              >
                En savoir plus <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
