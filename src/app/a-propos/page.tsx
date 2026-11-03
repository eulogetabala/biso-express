"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Zap, MapPin, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    icon: Shield,
    title: "Confiance",
    description: "Une sécurité absolue et une transparence totale pour chaque transaction, livraison et trajet. Chez Biso, nous honorons nos engagements pour mériter votre fidélité au quotidien."
  },
  {
    icon: Zap,
    title: "Rapidité",
    description: "Le temps est précieux. Nos processus sont optimisés pour vous garantir une réactivité maximale et des livraisons en un temps record dans toute la ville."
  },
  {
    icon: MapPin,
    title: "Proximité",
    description: "Une présence locale forte et une équipe à votre écoute. Nous concevons nos services pour être au plus près des besoins réels des habitants et des entreprises."
  },
  {
    icon: TrendingUp,
    title: "Évolution",
    description: "Nous innovons continuellement. Par l'adoption de technologies modernes et l'écoute active, nous faisons évoluer nos services pour anticiper vos besoins futurs."
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#002774]/15 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-brand-primary text-xs font-black uppercase tracking-widest block mb-4"
            >
              À Propos de Biso
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-black mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Plus qu&apos;un service, <br />
              <span className="text-brand-primary">une solution.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-slate-300 leading-relaxed max-w-xl font-medium"
            >
              Biso est né de la volonté de simplifier et moderniser le transport, la livraison et la logistique urbaine à Brazzaville. Nous combinons réactivité technologique et présence humaine pour répondre à chacun de vos besoins.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Presentation Block */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border border-slate-200"
            >
              <Image
                src="/3.jpeg"
                alt="Présentation Biso"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900" style={{ fontFamily: 'var(--font-outfit)' }}>
                Notre Mission
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Chez Biso, nous croyons qu&apos;un service de qualité repose sur l&apos;efficacité et la confiance mutuelle. Que ce soit pour expédier un colis urgent avec **Biso Express**, réserver un trajet sécurisé avec **Biso Taxi**, recevoir un repas chaud avec **Biso Food**, faire vos courses avec **Biso Market**, ou gérer du fret de marchandises lourdes avec **Biso Logistic**, nous apportons des solutions concrètes.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Notre engagement est de connecter les personnes et les entreprises grâce à une logistique moderne, performante et intègre à Brazzaville.
              </p>
              <div className="pt-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-blue text-white rounded-full font-bold text-sm hover:opacity-90 transition-opacity uppercase tracking-wider"
                  style={{ fontFamily: 'var(--font-outfit)' }}
                >
                  Découvrir nos services <ArrowRight className="w-4 h-4 text-brand-primary" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-blue text-xs font-black uppercase tracking-widest bg-brand-blue/5 px-4 py-1.5 rounded-full inline-block mb-3">Nos Piliers</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900" style={{ fontFamily: 'var(--font-outfit)' }}>
              Les valeurs de Biso
            </h2>
            <p className="text-slate-500 mt-4 text-xs md:text-sm">
              Quatre principes fondamentaux guident chacune de nos actions et définissent la qualité de notre relation avec vous.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white border border-slate-200 rounded-[2rem] p-8 flex flex-col items-start text-left hover:border-brand-blue hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-brand-blue/5 rounded-2xl flex items-center justify-center text-brand-blue mb-6">
                  <val.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3" style={{ fontFamily: 'var(--font-outfit)' }}>
                  {val.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
