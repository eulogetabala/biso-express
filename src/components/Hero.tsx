"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { heroItem, heroStagger } from '@/lib/motion';
import { Badge } from '@/components/ui/badge';
import { Phone, ArrowRight, Truck } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useBookingModal } from '@/hooks/use-booking-modal';

export default function Hero() {
  const { onOpen } = useBookingModal();

  return (
    <section id="accueil" className="relative pt-32 pb-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="visible"
            className="will-change-transform"
          >
            <motion.div variants={heroItem}>
              <Badge variant="outline" className="mb-6 py-1.5 px-4 rounded-full border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider">
                Livraison Express en Ville
              </Badge>
            </motion.div>
            <motion.h1 variants={heroItem} className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-secondary leading-[1.1] mb-6">
              Livrez vos colis rapidement avec <span className="text-gradient">Biso Express</span>
            </motion.h1>
            <motion.p variants={heroItem} className="text-xl font-semibold text-secondary mb-4 leading-relaxed">
              Vous avez un colis à envoyer ? Contactez-nous, nous venons le récupérer et nous le livrons à votre destinataire en toute sécurité.
            </motion.p>
            <motion.p variants={heroItem} className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl">
              Biso Express simplifie la livraison en ville. Pas besoin de boutique en ligne ni de passer commande sur une plateforme. Vous avez déjà votre marchandise ou votre colis ? Nous nous occupons du reste.
            </motion.p>

            <motion.div variants={heroItem} className="flex flex-col sm:flex-row gap-4">
              <motion.button
                type="button"
                onClick={onOpen}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className={cn(buttonVariants({ size: "lg" }), "rounded-full h-14 px-8 text-lg font-bold shadow-xl shadow-primary/20 bg-primary text-white border-none")}
              >
                Demander une livraison
              </motion.button>
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                <Link
                  href="#comment-ca-marche"
                  className={cn(buttonVariants({ size: "lg", variant: "outline" }), "rounded-full h-14 px-8 text-lg font-bold border-2 hover:bg-secondary hover:text-white transition-colors flex items-center gap-2")}
                >
                  En savoir plus <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={heroItem} className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[2, 3, 4, 5].map((n, i) => (
                  <motion.div
                    key={n}
                    initial={{ opacity: 0, scale: 0.5, x: -12 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 0.55 + i * 0.08, type: "spring", stiffness: 260, damping: 18 }}
                    className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative ring-2 ring-white shadow-sm"
                  >
                    <Image src={`/${n}.jpeg`} alt="" fill className="object-cover" sizes="40px" />
                  </motion.div>
                ))}
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                <span className="font-bold text-secondary text-base">+100</span> livraisons
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.88, rotate: 4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="relative"
          >
            <div className="relative aspect-square w-full max-w-[500px] mx-auto">
              {/* Main Image with Card effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-[2rem] -rotate-3 -z-10" />
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-2xl">
                <Image 
                  src="/1.jpeg" 
                  alt="Livraison Biso Express" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                  priority
                />
              </div>

              {/* Float Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4 z-10"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Statut</p>
                  <p className="text-sm font-extrabold text-secondary">Récupération en cours</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 -right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4 z-10"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center text-white">
                   <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Contact</p>
                  <p className="text-sm font-extrabold text-secondary">Client Livré !</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
