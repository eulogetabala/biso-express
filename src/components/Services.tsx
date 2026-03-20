"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  sectionHeaderStagger,
  springSoft,
  staggerItem,
  transition,
  viewportOnce,
} from "@/lib/motion";
import {
  ChevronRight,
  Package,
  FileText,
  ShoppingBag,
  Utensils,
  Laptop,
} from "lucide-react";

const services = [
  { icon: Package, label: "Colis personnels" },
  { icon: FileText, label: "Documents importants" },
  { icon: ShoppingBag, label: "Marchandises de boutiques" },
  { icon: Utensils, label: "Repas ou produits alimentaires" },
  { icon: Laptop, label: "Petits équipements ou articles" },
];

export default function Services() {
  return (
    <section id="nos-services" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-100 via-white to-slate-50" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-primary/[0.06] blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
          variants={sectionHeaderStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p
            variants={staggerItem}
            className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary"
          >
            Nos livraisons
          </motion.p>
          <motion.h2
            variants={staggerItem}
            className="mb-5 text-4xl font-extrabold leading-tight text-secondary md:text-5xl"
          >
            Ce que nous <span className="text-primary italic">livrons</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg text-muted-foreground leading-relaxed">
            Biso Express s&apos;occupe de différents types de colis — du document urgent au repas chaud — avec
            une manipulation soignée et une livraison directe à votre destinataire.
          </motion.p>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={springSoft}
          >
            <div className="relative mx-auto max-w-md lg:sticky lg:top-28 lg:mx-0 lg:max-w-none">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/15 via-transparent to-brand-blue/10 opacity-80 blur-md" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-2xl ring-1 ring-slate-200/90 sm:aspect-[3/4]">
                <Image
                  src="/4.jpeg"
                  alt="Livreur Biso Express avec colis"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
              <div className="absolute -bottom-4 left-6 right-6 rounded-2xl border border-white/80 bg-white/95 px-5 py-4 shadow-lg backdrop-blur-sm md:left-8 md:right-auto md:min-w-[200px]">
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  En ville
                </p>
                <p className="text-lg font-black text-secondary">Tous formats</p>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-5 lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary/80 lg:pt-2">
              Types de colis acceptés
            </p>
            <ul className="flex flex-col gap-3">
              {services.map((service, index) => (
                <motion.li
                  key={service.label}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ ...transition, delay: index * 0.06 }}
                  whileHover={{ x: 4 }}
                  className="group"
                >
                  <div className="flex items-center gap-4 rounded-2xl border border-slate-200/90 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:border-primary/35 hover:shadow-md hover:shadow-primary/5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <span className="flex-1 font-bold text-secondary">{service.label}</span>
                    <ChevronRight className="h-5 w-5 shrink-0 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ ...springSoft, delay: 0.15 }}
              className="mt-4 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent p-6 md:p-8"
            >
              <p className="text-center text-base font-semibold italic leading-relaxed text-secondary md:text-lg">
                &quot;Nous récupérons la marchandise et nous la livrons directement à votre client ou à votre
                destinataire.&quot;
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
