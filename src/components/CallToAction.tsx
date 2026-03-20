"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Send, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { PHONE_DISPLAY, PHONE_TEL_HREF, PHONE_WHATSAPP_HREF } from "@/lib/contact";
import { springSoft, viewportOnce } from "@/lib/motion";

export default function CallToAction() {
  return (
    <section
      id="contact"
      className="relative py-16 pb-24 md:py-20 md:pb-32 overflow-hidden bg-slate-100 border-b border-slate-200/90"
    >
      <div className="pointer-events-none absolute -top-20 -left-24 h-[28rem] w-[28rem] rounded-full bg-brand-blue/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[22rem] w-[22rem] rounded-full bg-primary/[0.08] blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.22) 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="mx-auto max-w-6xl rounded-[1.75rem] border border-slate-200/80 bg-white p-8 shadow-[0_32px_90px_-40px_rgba(15,23,42,0.25)] md:rounded-[2.25rem] md:p-11 lg:p-14"
          initial={{ opacity: 0, y: 36, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={viewportOnce}
          transition={springSoft}
        >
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ ...springSoft, delay: 0.08 }}
              whileHover={{ scale: 1.01 }}
              className="relative lg:col-span-5 lg:order-1"
            >
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[320px] sm:max-w-[380px] lg:mx-0 lg:max-w-none">
                <div className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-primary/15 via-transparent to-brand-blue/10 blur-sm" />
                <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] ring-1 ring-slate-200/90 shadow-xl">
                  <Image
                    src="/3.jpeg"
                    alt="Équipe Biso Express en livraison"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 85vw, 420px"
                  />
                </div>
                <div className="absolute -bottom-4 -right-2 flex items-center gap-2 rounded-2xl border border-slate-100 bg-white px-4 py-2.5 text-secondary shadow-lg md:-right-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <div className="text-left leading-tight">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Réponse
                    </p>
                    <p className="text-sm font-extrabold text-secondary">Sous peu</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ ...springSoft, delay: 0.12 }}
              className="text-center lg:col-span-7 lg:order-2 lg:pl-4 lg:text-left"
            >
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Une livraison ?
              </p>

              <h2
                className="mb-5 text-3xl font-extrabold leading-[1.12] text-secondary sm:text-4xl md:text-5xl lg:text-[2.65rem] xl:text-6xl"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Besoin d’envoyer{" "}
                <span className="text-primary">un colis</span> ?
              </h2>

              <p className="mx-auto mb-9 max-w-lg text-base font-medium text-muted-foreground sm:text-lg lg:mx-0">
                Écrivez-nous ou appelez : on vient récupérer votre colis et on le livre en toute sécurité.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                  <Link
                    href={PHONE_TEL_HREF}
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "h-14 rounded-full border-none px-8 text-base font-bold shadow-lg shadow-primary/25 sm:px-10 sm:text-lg"
                    )}
                  >
                    <Phone className="h-5 w-5 shrink-0" /> Appeler maintenant
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                  <Link
                    href={PHONE_WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ size: "lg", variant: "outline" }),
                      "h-14 rounded-full border-2 border-[#25D366] bg-white px-8 text-base font-bold text-[#128C7E] hover:bg-[#25D366] hover:text-white sm:px-10 sm:text-lg"
                    )}
                  >
                    <MessageCircle className="h-5 w-5 shrink-0" /> WhatsApp
                  </Link>
                </motion.div>
              </div>

              <div className="mt-9 flex flex-col items-center gap-2 border-t border-slate-100 pt-8 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-4 lg:justify-start">
                <span className="flex items-center gap-2">
                  <Send className="h-4 w-4 shrink-0 text-primary" />
                  Disponible dans toute la ville
                </span>
                <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:inline-block" aria-hidden />
                <span className="font-semibold tabular-nums text-secondary">{PHONE_DISPLAY}</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
