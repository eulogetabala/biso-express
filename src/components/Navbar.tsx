"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, Phone } from 'lucide-react';
import { buttonVariants, Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useBookingModal, useContactModal } from '@/hooks/use-booking-modal';

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Comment ça marche", href: "#comment-ca-marche" },
  { label: "Pourquoi nous", href: "#pourquoi-nous" },
  { label: "Zones", href: "#zone-de-livraison" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { onOpen: openBooking } = useBookingModal();
  const { onOpen: openContact } = useContactModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
      scrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative w-40 h-12 md:w-52 md:h-16 transition-all duration-300">
            <Image src="/logo-2.png" alt="Biso Express" fill className="object-contain" />
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href} 
                className="text-secondary font-bold hover:text-primary transition-colors text-sm uppercase tracking-wider"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={openContact}
              className={cn(buttonVariants({ size: "lg" }), "rounded-full bg-primary text-white font-bold h-11 px-8 border-none")}
            >
              Nous Contacter
            </button>
            <div className="lg:hidden p-2 rounded-xl bg-slate-100 text-secondary">
              <Menu className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
