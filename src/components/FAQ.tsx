"use client";

import { motion } from 'framer-motion';
import { sectionHeaderStagger, springBouncy, staggerItem, viewportOnce } from '@/lib/motion';
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
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={sectionHeaderStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div
            variants={staggerItem}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            <motion.span
              animate={{ rotate: [0, 12, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <HelpCircle className="w-4 h-4" />
            </motion.span>
            Vos questions fréquentes
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-4xl md:text-5xl font-extrabold text-secondary mb-6">
            Tout ce que vous devez savoir
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg text-muted-foreground">
            Vous avez des questions sur nos services ? Voici les réponses aux interrogations les plus fréquentes pour vous aider.
          </motion.p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ ...springBouncy, delay: index * 0.07 }}
                whileHover={{ x: 4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
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
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-slate-400 font-medium italic">
            Vous ne trouvez pas votre réponse ? N&apos;hésitez pas à nous appeler directement.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
