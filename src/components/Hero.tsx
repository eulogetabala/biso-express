"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Phone, ArrowRight, Truck } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useBookingModal } from '@/hooks/use-booking-modal';

export default function Hero() {
  const { onOpen } = useBookingModal();

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge variant="outline" className="mb-6 py-1.5 px-4 rounded-full border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider">
              Livraison Express en Ville
            </Badge>
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-secondary leading-[1.1] mb-6">
              Livrez vos colis rapidement avec <span className="text-gradient">Biso Express</span>
            </h1>
            <p className="text-xl font-semibold text-secondary mb-4 leading-relaxed">
              Vous avez un colis à envoyer ? Contactez-nous, nous venons le récupérer et nous le livrons à votre destinataire en toute sécurité.
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl">
              Biso Express simplifie la livraison en ville. Pas besoin de boutique en ligne ni de passer commande sur une plateforme. Vous avez déjà votre marchandise ou votre colis ? Nous nous occupons du reste.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onOpen}
                className={cn(buttonVariants({ size: "lg" }), "rounded-full h-14 px-8 text-lg font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform bg-primary text-white border-none")}
              >
                Demander une livraison
              </button>
              <Link 
                href="#comment-ca-marche" 
                className={cn(buttonVariants({ size: "lg", variant: "outline" }), "rounded-full h-14 px-8 text-lg font-bold border-2 hover:bg-secondary hover:text-white transition-all flex items-center gap-2")}
              >
                En savoir plus <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative">
                    <Image src={`https://i.pravatar.cc/100?u=${i}`} alt="user" fill />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                <span className="font-bold text-secondary text-base">500+</span> livraisons réussies cette semaine
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-square w-full max-w-[500px] mx-auto">
              {/* Main Image with Card effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-[2rem] -rotate-3 -z-10" />
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-2xl">
                <Image 
                  src="/hero-delivery.png" 
                  alt="Biso Express Delivery" 
                  fill 
                  className="object-cover"
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
