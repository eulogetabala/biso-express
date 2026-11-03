"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { PHONE_DISPLAY, PHONE_WHATSAPP_HREF, PHONE_TEL_HREF } from "@/lib/contact";

// Dynamically import leaflet map to prevent SSR issues
const DynamicMap = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400 font-medium">
      Chargement de la carte...
    </div>
  )
});

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    service: "express",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", contact: "", service: "express", message: "" });
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Navbar />

      {/* Header */}
      <section className="relative pt-32 pb-16 bg-[#0F172A] text-white">
        <div className="container mx-auto px-4 text-center">
          <span className="text-brand-primary text-xs font-black uppercase tracking-widest block mb-3">Nous Contacter</span>
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: 'var(--font-outfit)' }}>
            Une question ? Une demande ?
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-xs md:text-sm leading-relaxed font-medium">
            Notre équipe est à votre entière disposition pour répondre à toutes vos interrogations.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 flex-1 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left side: Information and Map */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-6">
                <h2 className="text-3xl font-extrabold text-slate-900" style={{ fontFamily: 'var(--font-outfit)' }}>
                  Nos coordonnées
                </h2>
                <p className="text-slate-500 leading-relaxed text-xs">
                  Venez nous rencontrer à notre agence principale ou écrivez-nous directement via nos différents canaux.
                </p>
              </div>

              <div className="space-y-6">
                {/* Address block */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#002774]/5 flex items-center justify-center text-brand-blue shrink-0 mt-0.5">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-xs uppercase tracking-wider">Adresse de l&apos;agence</h4>
                    <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                      1302 Avenue de la base Batignolles, Brazzaville
                    </p>
                  </div>
                </div>

                {/* Telephone block */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#002774]/5 flex items-center justify-center text-brand-blue shrink-0 mt-0.5">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-xs uppercase tracking-wider">Téléphone / WhatsApp</h4>
                    <p className="text-slate-600 text-xs mt-1 font-bold">
                      {PHONE_DISPLAY}
                    </p>
                    <div className="flex gap-4 mt-2">
                      <a href={PHONE_TEL_HREF} className="text-xs text-brand-blue hover:underline font-bold">
                        Appeler directement
                      </a>
                      <span className="text-slate-300">|</span>
                      <a href={PHONE_WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="text-xs text-green-600 hover:underline font-bold">
                        Discuter sur WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                {/* Mail block */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#002774]/5 flex items-center justify-center text-brand-blue shrink-0 mt-0.5">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-xs uppercase tracking-wider">Email professionnel</h4>
                    <p className="text-slate-600 text-xs mt-1 font-medium">
                      contact@biso.cg
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Container */}
              <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden border border-slate-200 bg-slate-100 shadow-sm relative">
                <DynamicMap />
              </div>
            </div>

            {/* Right side: Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 border border-slate-200/80 rounded-[2.5rem] p-8 md:p-10 shadow-sm">
                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-2">Votre nom complet</label>
                        <input
                          type="text"
                          required
                          placeholder="Ex: Jean Dupont"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 text-xs focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all font-medium text-slate-800"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-2">Votre numéro ou adresse email</label>
                        <input
                          type="text"
                          required
                          placeholder="Ex: +242 05 000 00 00 / email@domain.com"
                          value={formData.contact}
                          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                          className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 text-xs focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all font-medium text-slate-800"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-2">Service concerné</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 text-xs focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all font-semibold text-slate-700"
                        >
                          <option value="express">Biso Express (Livraison colis)</option>
                          <option value="taxi">Biso Taxi (Déplacement urbain)</option>
                          <option value="food">Biso Food (Livraison de repas)</option>
                          <option value="market">Biso Market (Courses en ligne)</option>
                          <option value="logistic">Biso Logistic (Fret / Logistique)</option>
                          <option value="autre">Autre demande</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-2">Votre message</label>
                        <textarea
                          required
                          rows={5}
                          placeholder="Comment pouvons-nous vous aider ?"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 text-xs focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all font-medium text-slate-800 resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-16 rounded-2xl bg-brand-blue text-white font-black text-xs flex items-center justify-center gap-3 hover:opacity-90 active:scale-[0.99] transition-all disabled:opacity-50 cursor-pointer uppercase tracking-wider"
                      style={{ fontFamily: 'var(--font-outfit)' }}
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          Envoyer le message <Send className="w-4 h-4 text-white" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-2 justify-center text-[10px] text-slate-400 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                      <span>Vos informations sont cryptées et confidentielles.</span>
                    </div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900" style={{ fontFamily: 'var(--font-outfit)' }}>
                      Message envoyé !
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed max-w-sm mx-auto">
                      Merci pour votre confiance. Notre équipe étudie votre message avec attention et vous recontactera dans les plus brefs délais.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-8 py-3 bg-brand-blue text-white rounded-full font-bold text-xs hover:opacity-90 transition-opacity"
                    >
                      Envoyer un autre message
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
