"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Package, MapPin, User, Phone } from 'lucide-react';
import { useBookingModal } from '@/hooks/use-booking-modal';
import { Button } from '@/components/ui/button';

export default function BookingModal() {
  const { isOpen, onClose } = useBookingModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Auto close after 3 seconds
      setTimeout(() => {
        onClose();
        // Reset state after closing animation
        setTimeout(() => setIsSuccess(false), 500);
      }, 3000);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-secondary/80 backdrop-blur-sm"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-primary p-8 text-white relative">
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-3xl font-black mb-2" style={{ fontFamily: 'var(--font-outfit)' }}>
              Demander une livraison
            </h2>
            <p className="text-white/80 font-medium text-sm capitalize">
              Simple, rapide et sécurisé.
            </p>
          </div>

          <div className="p-8">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      required
                      type="text" 
                      placeholder="Nom complet" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-primary transition-all font-medium"
                    />
                  </div>
                  
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      required
                      type="tel" 
                      placeholder="Numéro de téléphone" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-primary transition-all font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        required
                        type="text" 
                        placeholder="Départ" 
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-primary transition-all font-medium"
                      />
                    </div>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        required
                        type="text" 
                        placeholder="Destination" 
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-primary transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <Package className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                    <textarea 
                      required
                      rows={3}
                      placeholder="Description du colis (ex: petit carton, enveloppe...)" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-primary transition-all font-medium resize-none"
                    />
                  </div>
                </div>

                <Button 
                  disabled={isSubmitting}
                  type="submit" 
                  className="w-full h-16 rounded-2xl bg-primary text-white font-black text-lg gap-3 hover:scale-[1.02] transition-transform active:scale-95 disabled:grayscale"
                >
                  {isSubmitting ? (
                     <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Send className="w-6 h-6" />
                      </motion.div>
                  ) : (
                    <>Envoyer la demande <Send className="w-5 h-5" /></>
                  )}
                </Button>
                
                <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest">
                  Un livreur vous contactera dans les 5 minutes
                </p>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-6"
              >
                <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-black text-secondary" style={{ fontFamily: 'var(--font-outfit)' }}>
                  Demande envoyée !
                </h3>
                <p className="text-slate-500 font-medium">
                  Merci ! Votre demande a été reçue. Un membre de l&apos;équipe Biso Express vous contactera immédiatement sur votre numéro.
                </p>
                <Button 
                  onClick={onClose}
                  className="rounded-full px-10 h-12 bg-secondary text-white font-bold"
                >
                  Fermer
                </Button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
