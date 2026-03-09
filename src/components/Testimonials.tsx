"use client";

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    text: "“Service rapide et très pratique. Le livreur est venu récupérer mon colis directement chez moi.”",
    author: "Client Particulier",
    rating: 5,
  },
  {
    text: "“Très utile pour livrer mes clients sans quitter ma boutique.”",
    author: "Commerçant Local",
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section id="temoignages" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-secondary mb-6 italic tracking-tight">
            Ils nous font <span className="text-primary">confiance</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full border-2 border-slate-50 bg-slate-50/50 hover:bg-white hover:border-primary/20 transition-all duration-500 rounded-[2.5rem] relative overflow-hidden group">
                <CardContent className="p-10 pt-16">
                   <div className="absolute top-8 left-10 text-primary/20 group-hover:text-primary transition-colors">
                     <Quote className="w-12 h-12 fill-current" />
                   </div>
                   
                   <p className="text-xl italic text-secondary/80 mb-8 leading-relaxed relative z-10">
                     {item.text}
                   </p>
                   
                   <div className="flex items-center justify-between">
                     <p className="font-bold text-secondary">{item.author}</p>
                     <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className="w-4 h-4 text-orange-400 fill-current" />
                        ))}
                     </div>
                   </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
