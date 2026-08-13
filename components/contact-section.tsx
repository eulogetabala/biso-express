'use client'

import { useState } from 'react'
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react'

const infos = [
  {
    icon: Phone,
    label: 'Téléphone',
    value: '05 021 03 03',
    href: 'tel:050210303',
    hint: 'Lun – Sam · 8h – 18h',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'direction@bisoexpress.com',
    href: 'mailto:direction@bisoexpress.com',
    hint: 'Réponse sous 24h ouvrées',
  },
  {
    icon: MapPin,
    label: 'Siège',
    value: '1302 Avenue de la base Batignolles, Brazzaville',
    hint: 'République du Congo',
  },
  {
    icon: Clock,
    label: 'Horaires',
    value: 'Lundi – Samedi : 8h00 – 18h00',
    hint: 'Accueil sur rendez-vous',
  },
]

const subjects = [
  'Partenariat',
  'Devenir coursier',
  'Devenir chauffeur',
  'Restaurateur / commerçant',
  'Entreprise (logistique)',
  'Autre demande',
]

const inputClass =
  'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20'

export function ContactSection() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Left — infos */}
        <div>
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
            <span className="h-px w-8 bg-accent" /> Contactez-nous
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl">
            Nous sommes à votre écoute
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Une question, un partenariat, une candidature&nbsp;? Nos équipes vous
            répondent rapidement. Passez nous voir au siège, appelez ou écrivez-nous.
          </p>

          <ul className="mt-10 space-y-4">
            {infos.map((info) => (
              <li
                key={info.label}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <info.icon className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="mt-0.5 block font-display text-lg font-bold text-foreground transition-colors hover:text-primary"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="mt-0.5 font-display text-lg font-bold">{info.value}</p>
                  )}
                  <p className="mt-1 text-sm text-muted-foreground">{info.hint}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — form */}
        <div className="rounded-[2.5rem] border border-border bg-card p-8 shadow-xl shadow-primary/5 sm:p-10">
          <h3 className="font-display text-2xl font-bold">Envoyez-nous un message</h3>
          <p className="mt-2 text-muted-foreground">
            Remplissez le formulaire, nous reviendrons vers vous rapidement.
          </p>

          {sent ? (
            <div className="mt-10 flex flex-col items-center rounded-3xl border border-accent/40 bg-accent/10 px-6 py-14 text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Send className="size-6" />
              </span>
              <h4 className="mt-5 font-display text-2xl font-bold">Message envoyé !</h4>
              <p className="mt-2 max-w-sm text-muted-foreground">
                Merci pour votre message. Notre équipe vous répondra dans les plus
                brefs délais à l&apos;adresse indiquée.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 text-sm font-semibold text-primary hover:underline"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                    Nom complet *
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Votre nom"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-semibold">
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="05 000 00 00"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                  E-mail *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="vous@exemple.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-semibold">
                  Sujet
                </label>
                <select id="subject" name="subject" className={inputClass}>
                  {subjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Décrivez votre besoin…"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02]"
              >
                Envoyer le message
                <Send className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
