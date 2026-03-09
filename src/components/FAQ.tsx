"use client";

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Quels types de colis livrez-vous ?",
    answer: "Nous livrons une large gamme de colis : documents, plis urgents, petits paquets, produits de boutiques en ligne, cadeaux, et même des produits alimentaires bien emballés. Nous évitons les matières dangereuses ou illégales."
  },
  {
    question: "Quels sont vos délais de livraison ?",
    answer: "Pour les livraisons standard en ville, nous livrons généralement en moins de 2 heures après récupération. Nous proposons aussi un service 'Éclair' pour des livraisons en moins de 45 minutes."
  },
  {
    question: "Comment sont calculés les tarifs ?",
    answer: "Nos tarifs commencent à partir de 1000 FCFA. Le prix final dépend de la distance entre le point de départ et la destination, ainsi que de l'urgence de la livraison."
  },
  {
    question: "Mes colis sont-ils en sécurité ?",
    answer: "Absolument. Tous nos livreurs sont identifiés et formés. De plus, chaque colis est suivi étroitement par notre centre de contrôle dès sa récupération jusqu'à sa remise en main propre."
  },
  {
    question: "Proposez-vous des contrats pour les entreprises ?",
    answer: "Oui ! Nous avons des offres dédiées aux restaurants, pharmacies et e-commerçants qui ont besoin de livraisons quotidiennes. Contactez-nous pour un tarif préférentiel."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            <HelpCircle className="w-4 h-4" /> Vos questions fréquentes
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-secondary mb-6"
          >
            Tout ce que vous devez savoir
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Vous avez des questions sur nos services ? Voici les réponses aux interrogations les plus fréquentes pour vous aider.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="border border-slate-100 rounded-3xl px-6 py-2 bg-slate-50/50 hover:bg-slate-50 transition-colors overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-lg font-bold text-secondary hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
        
        {/* Decorative element */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 font-medium italic">
            Vous ne trouvez pas votre réponse ? N&apos;hésitez pas à nous appeler directement.
          </p>
        </div>
      </div>
    </section>
  );
}
