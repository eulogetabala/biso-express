"use client";

import { motion } from 'framer-motion';
import { User, Store, Building2 } from 'lucide-react';

const targets = [
  {
    icon: User,
    title: "Particuliers",
    description: "Envoyez facilement un colis à un ami ou un membre de votre famille.",
    color: "from-orange-400 to-orange-500",
  },
  {
    icon: Store,
    title: "Commerçants",
    description: "Faites livrer vos produits à vos clients sans gérer vous-même la logistique.",
    color: "from-secondary to-slate-800",
  },
  {
    icon: Building2,
    title: "Entreprises",
    description: "Envoyez des documents ou du matériel rapidement dans la ville.",
    color: "from-primary to-orange-600",
  }
];

export default function TargetAudience() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-secondary mb-6">
            Un service pour particuliers et professionnels
          </h2>
          <p className="text-lg text-muted-foreground">
            Biso Express est la solution flexible qui s&apos;adapte à tous vos besoins de livraison urbaine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {targets.map((target, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-96 rounded-[2.5rem] overflow-hidden p-10 flex flex-col justify-end text-white shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Permanent Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${target.color} transition-transform duration-700 group-hover:scale-110`} />
              
              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.2)_0%,_transparent_60%)]" />

              <div className="absolute top-10 left-10 p-5 bg-white/20 backdrop-blur-xl rounded-[1.5rem] border border-white/30 shadow-xl group-hover:rotate-6 transition-transform">
                <target.icon className="w-10 h-10" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-4xl font-black mb-4" style={{ fontFamily: 'var(--font-outfit)' }}>{target.title}</h3>
                <p className="text-white/90 text-lg font-semibold leading-relaxed max-w-[280px]">{target.description}</p>
              </div>

              {/* Background Icon */}
              <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <target.icon className="w-40 h-40 transform -rotate-12" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
