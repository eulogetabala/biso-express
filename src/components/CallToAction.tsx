"use client";

import { motion } from 'framer-motion';
import { Phone, MessageCircle, Send } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useBookingModal } from '@/hooks/use-booking-modal';

export default function CallToAction() {
  const { onOpen } = useBookingModal();

  return (
    <section id="contact" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative inner glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0%,_transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1]">
              Besoin d’envoyer <br /> un colis ?
            </h2>
            <p className="text-xl md:text-2xl font-medium mb-12 text-white/90">
              Contactez Biso Express maintenant et nous viendrons récupérer votre colis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={onOpen}
                className={cn(buttonVariants({ size: "lg", variant: "secondary" }), "rounded-full h-16 px-10 text-xl font-bold bg-white text-primary hover:bg-slate-100 hover:scale-105 transition-all shadow-2xl flex items-center gap-3 border-none")}
              >
                <Phone className="w-6 h-6" /> Appeler maintenant
              </button>
              <button 
                onClick={onOpen}
                className={cn(buttonVariants({ size: "lg" }), "rounded-full h-16 px-10 text-xl font-bold border-2 border-white bg-transparent text-white hover:bg-white/10 hover:scale-105 transition-all shadow-2xl flex items-center gap-3")}
              >
                <MessageCircle className="w-6 h-6" /> WhatsApp
              </button>
            </div>
            
            <p className="mt-12 text-white/70 font-medium flex items-center justify-center gap-2">
              <Send className="w-4 h-4" /> Disponible immédiatement dans toute la ville
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
