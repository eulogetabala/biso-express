"use client";

import { Handshake, ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useContactModal } from "@/hooks/use-booking-modal";
import { motion } from "framer-motion";
import { viewportOnce, springSoft } from "@/lib/motion";
import Image from "next/image";

const benefits = [
  "Accès à une flotte de livreurs fiables et rapides.",
  "Tarifs préférentiels pour les envois réguliers.",
  "Suivi en temps réel de vos expéditions.",
  "Une équipe dédiée à votre service client B2B.",
];

export default function BecomePartner() {
  const { onOpen } = useContactModal();

  return (
    <section className="relative w-full overflow-hidden bg-white border-y border-slate-100 flex flex-col md:flex-row">
      <div className="w-full md:w-[55%] lg:w-[60%] py-20 lg:py-28 px-6 sm:px-12 lg:px-20 xl:pl-[10%] 2xl:pl-[15%] flex items-center bg-slate-50/50">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={springSoft}
          className="w-full max-w-2xl mx-auto md:ml-auto md:mr-12"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 text-primary rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-primary/10">
            <Handshake className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-secondary mb-5 leading-[1.12] tracking-tight">
            Devenir <span className="text-primary">Partenaire</span>
          </h2>
          <p className="text-slate-500 mb-10 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
            Vous êtes un e-commerçant, un restaurant ou une entreprise avec des besoins de livraison récurrents ? Simplifions votre logistique ensemble.
          </p>
          
          <ul className="space-y-4 mb-10">
            {benefits.map((benefit, i) => (
              <motion.li 
                key={i} 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ delay: 0.15 + i * 0.1, ...springSoft }}
                className="flex items-start gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-[#25D366] shrink-0" />
                <span className="text-slate-700 text-base font-bold leading-relaxed">{benefit}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-6">
            <button
              onClick={onOpen}
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto px-8 py-7 rounded-full text-lg font-extrabold shadow-xl shadow-primary/30 flex items-center justify-center gap-3 transition-transform hover:scale-105 border-none bg-primary text-white hover:bg-primary/95")}
            >
              Démarrer le partenariat <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
      
      <div className="w-full md:w-[45%] lg:w-[40%] bg-secondary p-8 lg:p-14 relative flex items-center justify-center min-h-[400px] md:min-h-full overflow-hidden">
        {/* Image en arrière-plan plus visible */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/3.jpeg" 
            alt="Partenariat Biso Express" 
            fill 
            className="object-cover opacity-50"
            quality={90}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/70 to-primary/70 z-0" />
        
        {/* Cercles décoratifs animés */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] border border-white/10 rounded-full border-dashed z-0 pointer-events-none" 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-[8px] border-primary/20 rounded-full blur-sm z-0 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-[4px] border-primary/40 rounded-full z-0 pointer-events-none" />
        
        <div className="relative text-center text-white z-10 space-y-4 max-w-xs p-8 rounded-[2rem] border border-white/10 shadow-2xl bg-white/5 backdrop-blur-md">
          <div className="mx-auto w-12 h-1 bg-primary mb-6 rounded-full" />
          <h3 className="text-4xl font-black mb-4 leading-tight tracking-tight">Offres <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#ff9900]">Exclusives</span></h3>
          <p className="text-white/80 font-bold text-lg leading-snug">
            Un réseau logistique fiable pour booster votre business.
          </p>
        </div>
      </div>
    </section>
  );
}
