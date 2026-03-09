"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Send } from 'lucide-react';

const footerLinks = {
  company: [
    { label: "À propos", href: "#" },
    { label: "Comment ça marche", href: "#comment-ca-marche" },
    { label: "Services", href: "#services" },
    { label: "Zone de livraison", href: "#zone-de-livraison" },
  ],
  services: [
    { label: "Livraison Particuliers", href: "#" },
    { label: "Livraison Professionnels", href: "#" },
    { label: "Suivi de colis", href: "#" },
    { label: "Tarifs", href: "#" },
  ],
  support: [
    { label: "Centre d'aide", href: "#" },
    { label: "Contact", href: "#contact" },
    { label: "Conditions d'utilisation", href: "#" },
    { label: "Confidentialité", href: "#" },
  ]
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 text-slate-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image src="/logo-2.jpg" alt="Biso Express" width={200} height={65} className="transition-all duration-300 rounded-lg" />
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Biso Express est votre partenaire de confiance pour toutes vos livraisons urbaines. 
              Rapide, sécurisé et ultra-simple.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6" style={{ fontFamily: 'var(--font-outfit)' }}>Entreprise</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6" style={{ fontFamily: 'var(--font-outfit)' }}>Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6" style={{ fontFamily: 'var(--font-outfit)' }}>Contact</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>1302 Avenue de la base Batignolles, Brazzaville, Congo</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+242 06 763 48 48</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>contact@biso-express.com</span>
              </li>
            </ul>
            
            <div className="relative">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <button className="absolute right-1 top-1 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Biso Express. Tous droits réservés.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Politique de confidentialité</Link>
            <Link href="#" className="hover:text-white transition-colors">Conditions d&apos;utilisation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
