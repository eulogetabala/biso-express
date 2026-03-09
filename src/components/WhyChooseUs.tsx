"use client";

import { motion } from 'framer-motion';
import { ShieldCheck, Zap, HeartHandshake, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Zap,
    title: "Livraison rapide",
    description: "Vos colis sont livrés rapidement dans la ville.",
  },
  {
    icon: HeartHandshake,
    title: "Service simple",
    description: "Pas besoin de plateforme complexe : un appel ou un message suffit.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité",
    description: "Nous prenons soin de vos colis jusqu’à la livraison.",
  },
  {
    icon: Users,
    title: "Disponible pour tous",
    description: "Particuliers, commerces, restaurants, entreprises… tout le monde peut utiliser Biso Express.",
  }
];

export default function WhyChooseUs() {
  return (
    <section id="pourquoi-choisir" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
             <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-secondary mb-8 leading-tight"
            >
              Un service de livraison <br />
              <span className="text-primary tracking-tight italic">fiable et rapide</span>
            </motion.h2>
            <motion.p
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-lg text-muted-foreground mb-8"
            >
              Chez Biso Express, nous croyons que la livraison ne devrait pas être une corvée. Nous avons conçu un service humain, rapide et ultra-fiable pour vous accompagner au quotidien.
            </motion.p>
            
            <div className="space-y-4">
              {features.slice(0, 2).map((feature, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-xl shadow-slate-200/50 hover:shadow-primary/10 transition-shadow">
                  <CardContent className="pt-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-primary mb-6">
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-extrabold text-secondary mb-3">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
