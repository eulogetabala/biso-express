"use client";

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { sectionHeaderStagger, springBouncy, staggerItem, viewportOnce } from '@/lib/motion';
import { Phone, Package, Send } from 'lucide-react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(MotionPathPlugin);

const steps = [
  {
    icon: Phone,
    title: "Contactez-nous",
    description: "Appelez-nous ou envoyez un message avec les informations de votre livraison.",
    color: "from-blue-400 to-blue-600",
    glow: "shadow-blue-500/20",
  },
  {
    icon: Package,
    title: "On récupère le colis",
    description: "Notre livreur se déplace immédiatement à l’adresse indiquée.",
    color: "from-primary to-orange-600",
    glow: "shadow-primary/20",
  },
  {
    icon: Send,
    title: "Livraison Rapide",
    description: "Votre colis arrive à destination en toute sécurité et sans délai.",
    color: "from-green-400 to-green-600",
    glow: "shadow-green-500/20",
  }
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const particleRef = useRef<SVGCircleElement>(null);
  const particle2Ref = useRef<SVGCircleElement>(null);

  useGSAP(() => {
    if (!pathRef.current || !particleRef.current || !particle2Ref.current) return;

    const path = pathRef.current;
    
    // Main path flow effect
    gsap.to(path, {
      strokeDashoffset: -100,
      duration: 3,
      repeat: -1,
      ease: "linear",
    });

    // Particle flow animation
    const particleTl = gsap.timeline({ repeat: -1 });
    
    particleTl.to(particleRef.current, {
      motionPath: {
        path: path,
        align: path,
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      duration: 4,
      ease: "power1.inOut",
    });

    gsap.to(particle2Ref.current, {
      motionPath: {
        path: path,
        align: path,
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      duration: 4,
      delay: 2, // Staggered start
      repeat: -1,
      ease: "power1.inOut",
    });

  }, { scope: containerRef });

  return (
    <section id="comment-ca-marche" className="py-24 bg-white overflow-hidden relative" ref={containerRef}>
      {/* Background radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#f8fafc_0%,_transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-24"
          variants={sectionHeaderStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span
            variants={staggerItem}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Processus Biso
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="text-4xl md:text-6xl font-black text-secondary mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            Le chemin vers une <br /> <span className="text-primary">livraison parfaite</span>
          </motion.h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Creative Looping Connection SVG - Brought to Foreground */}
          <div className="absolute inset-0 pointer-events-none z-20 hidden md:block">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 400">
              <defs>
                <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#FF7A00" stopOpacity="1" />
                  <stop offset="100%" stopColor="#4ade80" stopOpacity="0.8" />
                </linearGradient>
                <filter id="particle-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Main Animated Path - Perfectly Aligned */}
              <path
                ref={pathRef}
                d="M 166,100 C 300,100 366,300 500,100 C 633,-100 700,100 833,100"
                fill="none"
                stroke="url(#flow-gradient)"
                strokeWidth="3"
                strokeDasharray="8, 12"
                strokeLinecap="round"
                className="opacity-60"
              />

              {/* High-speed Energy Particles */}
              <circle ref={particleRef} r="5" fill="#FF7A00" filter="url(#particle-glow)" />
              <circle ref={particle2Ref} r="4" fill="#60a5fa" filter="url(#particle-glow)" />
            </svg>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={viewportOnce}
                transition={{ ...springBouncy, delay: index * 0.12 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className={`relative z-10 flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-white/40 backdrop-blur-sm border border-white/50 shadow-2xl ${step.glow} group transition-shadow duration-300 hover:shadow-primary/15`}
              >
                <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center mb-8 shadow-2xl relative overflow-hidden ring-8 ring-white/50 group-hover:ring-primary/20 transition-all`}>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <step.icon className="w-12 h-12 relative z-10" />
                  <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-xs font-black">
                    0{index + 1}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors" style={{ fontFamily: 'var(--font-outfit)' }}>
                  {step.title}
                </h3>
                <p className="text-slate-500 leading-relaxed font-medium">
                  {step.description}
                </p>

                {/* Decorative corner element */}
                <div className="absolute bottom-6 right-6 opacity-5 group-hover:opacity-20 transition-opacity">
                  <step.icon className="w-12 h-12" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative side element */}
      <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
    </section>
  );
}
