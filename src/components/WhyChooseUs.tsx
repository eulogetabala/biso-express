"use client";

import { motion } from 'framer-motion';
import { sectionHeaderStagger, springSoft, staggerItem, transition, viewportOnce } from '@/lib/motion';
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
    <section id="pourquoi-nous" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            className="lg:w-1/2 space-y-4"
            variants={sectionHeaderStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.h2
              variants={staggerItem}
              className="text-4xl md:text-5xl font-extrabold text-secondary leading-tight pb-2"
            >
              Un service de livraison <br />
              <span className="text-primary tracking-tight italic">fiable et rapide</span>
            </motion.h2>
            <motion.p variants={staggerItem} className="text-lg text-muted-foreground">
              Chez Biso Express, nous croyons que la livraison ne devrait pas être une corvée. Nous avons conçu un service humain, rapide et ultra-fiable pour vous accompagner au quotidien.
            </motion.p>
            {features.slice(0, 2).map((feature, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ x: 6, backgroundColor: "rgba(248, 250, 252, 1)" }}
                transition={transition}
                className="flex items-start gap-4 p-4 rounded-xl transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 32, rotate: -1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={viewportOnce}
                transition={{ ...springSoft, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="h-full border-none shadow-xl shadow-slate-200/50 hover:shadow-primary/15 transition-shadow duration-300">
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
