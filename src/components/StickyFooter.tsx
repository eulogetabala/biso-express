"use client";

import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useBookingModal } from '@/hooks/use-booking-modal';

export default function StickyFooter() {
  const { onOpen } = useBookingModal();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 flex justify-center pointer-events-none">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="w-full max-w-2xl bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-full p-2 pointer-events-auto flex items-center justify-between"
      >
        <div className="hidden sm:flex items-center gap-3 pl-6">
          <p className="text-xs font-bold text-secondary uppercase tracking-widest" style={{ fontFamily: 'var(--font-outfit)' }}>Biso Express</p>
        </div>
        
        <div className="flex gap-2 w-full sm:w-auto">
          <button 
            onClick={onOpen}
            className={cn(buttonVariants({ size: "lg", variant: "secondary" }), "flex-1 sm:flex-none rounded-full bg-secondary text-white hover:bg-black gap-2 font-bold px-8 shadow-lg border-none")}
          >
            <Phone className="w-4 h-4" /> 
            <span className="hidden sm:inline">Appeler</span>
            <span className="sm:hidden">Appeler</span>
          </button>
          <button 
            onClick={onOpen}
            className={cn(buttonVariants({ size: "lg" }), "flex-1 sm:flex-none rounded-full bg-[#25D366] hover:bg-[#22c35e] text-white gap-2 font-bold px-8 shadow-lg border-none")}
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
