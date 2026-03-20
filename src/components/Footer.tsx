"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Send } from "lucide-react";
import { PHONE_DISPLAY } from "@/lib/contact";
import { fadeUp, viewportOnce } from "@/lib/motion";

const footerLinks = {
  company: [
    { label: "À propos", href: "#" },
    { label: "Comment ça marche", href: "#comment-ca-marche" },
    { label: "Pourquoi nous", href: "#pourquoi-nous" },
    { label: "Zone de livraison", href: "#zone-de-livraison" },
  ],
};

export default function Footer() {
  return (
    <motion.footer
      className="bg-black pt-12 md:pt-14 pb-5 text-slate-300 shadow-[0_-12px_40px_-16px_rgba(0,0,0,0.35)]"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-8">
          <div className="space-y-3 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Biso Express"
                width={150}
                height={49}
                className="transition-all duration-300 rounded-lg h-auto w-[140px] sm:w-[150px]"
              />
            </Link>
            <p className="text-sm text-slate-400 leading-snug max-w-xs">
              Livraisons urbaines rapides et sécurisées. Simple et humain.
            </p>
            <div className="flex gap-2 pt-1">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4
              className="text-primary font-bold text-sm uppercase tracking-wide mb-3"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Entreprise
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-primary font-bold text-sm uppercase tracking-wide mb-3"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Contact
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-xs leading-snug">
                  1302 Avenue de la base Batignolles, Brazzaville
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm">{PHONE_DISPLAY}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm">direction@bisoexpress.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className="text-primary font-bold text-sm uppercase tracking-wide mb-2"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Newsletter
            </h4>
            <p className="text-xs text-slate-500 mb-3">Offres et actus.</p>
            <div className="relative max-w-sm">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-4 pr-11 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="button"
                className="absolute right-1 top-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Biso Express. Tous droits réservés.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
            <Link href="#" className="hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Conditions d&apos;utilisation
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
