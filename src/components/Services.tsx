"use client";

import { motion } from 'framer-motion';
import { Package, FileText, ShoppingBag, Utensils, Laptop } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  { icon: Package, label: "Colis personnels" },
  { icon: FileText, label: "Documents importants" },
  { icon: ShoppingBag, label: "Marchandises de boutiques" },
  { icon: Utensils, label: "Repas ou produits alimentaires" },
  { icon: Laptop, label: "Petits équipements ou articles" },
];

export default function Services() {
  return (
    <section id="nos-services" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={index === 4 ? "col-span-2" : ""}
                >
                  <Card className="border-none shadow-md hover:shadow-lg transition-all group overflow-hidden">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <service.icon className="w-6 h-6" />
                      </div>
                      <span className="font-bold text-secondary">{service.label}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-secondary mb-6 leading-tight">
                Ce que nous <span className="text-primary italic">livrons</span>
              </h2>
              <p className="text-xl text-secondary font-semibold mb-6">
                Biso Express s’occupe de la livraison de différents types de colis :
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Nous comprenons que chaque colis est important. Qu&apos;il s&apos;agisse d&apos;un document urgent, d&apos;un repas chaud ou d&apos;une commande client, nous garantissons une manipulation soignée et une livraison directe.
              </p>
              <div className="p-6 bg-white rounded-2xl border-l-4 border-primary shadow-sm italic text-secondary font-medium uppercase text-sm tracking-wide">
                &quot;Nous récupérons la marchandise et nous la livrons directement à votre client ou à votre destinataire.&quot;
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
