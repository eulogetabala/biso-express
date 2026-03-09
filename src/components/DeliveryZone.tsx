"use client";

import { motion } from 'framer-motion';
import { MapPin, Info } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useBookingModal } from '@/hooks/use-booking-modal';

const DynamicMap = dynamic(() => import('./MapComponent'), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-slate-800 animate-pulse flex items-center justify-center text-slate-500">Chargement de la carte...</div>
});

export default function DeliveryZone() {
  const { onOpen } = useBookingModal();

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-video lg:aspect-square rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-[0_0_50px_rgba(255,122,0,0.1)] bg-slate-800"
            >
              <DynamicMap />
              
              <div className="absolute top-6 left-6 right-6 p-4 bg-slate-900/60 backdrop-blur-md rounded-xl border border-white/10 z-10 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-xs font-bold tracking-wider uppercase text-slate-200">
                  Système de suivi en temps réel activé
                </p>
              </div>

              <div className="absolute bottom-6 left-6 right-6 p-5 bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/10 z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary animate-bounce" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-white uppercase tracking-wider">Zone de couverture</p>
                    <p className="text-xs text-slate-400">Intervention rapide sur l'ensemble de la capitale.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold mb-8"
            >
              Nous livrons dans <span className="text-primary italic">toute la ville</span>
            </motion.h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Biso Express assure la récupération et la livraison de vos colis dans différents quartiers de la ville. 
              <br /><br />
              Que vous soyez au centre-ville ou dans les zones résidentielles, nos livreurs sont prêts à intervenir rapidement.
            </p>
            
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mb-10">
              <p className="text-lg font-semibold text-primary mb-2">Vérifiez votre zone</p>
              <p className="text-slate-400">Contactez-nous pour vérifier la disponibilité de la livraison dans votre zone spécifique.</p>
            </div>

            <button 
              onClick={onOpen}
              className={cn(buttonVariants({ size: "lg" }), "rounded-full px-10 h-14 text-lg font-bold bg-primary text-white border-none")}
            >
              Demander une info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
