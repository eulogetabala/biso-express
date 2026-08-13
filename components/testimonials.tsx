'use client'

import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { cn } from '@/lib/utils'

const reviews = [
  {
    name: 'Grâce Ngoma',
    role: 'Entrepreneure, Poto-Poto',
    brand: 'Biso Express',
    brandClass: 'bg-accent/15 text-accent',
    text: "Avec Biso Express je livre mes clientes en moins d'une heure. Mon business a doublé depuis que je travaille avec eux.",
    initials: 'GN',
  },
  {
    name: 'Patrick Massamba',
    role: 'Étudiant, Bacongo',
    brand: 'Biso Taxi',
    brandClass: 'bg-primary/10 text-primary',
    text: "Biso Taxi la nuit, c'est ma tranquillité. Les prix sont clairs et les chauffeurs sérieux. Je ne prends plus rien d'autre.",
    initials: 'PM',
  },
  {
    name: 'Nadège Loubaki',
    role: 'Maman de 3 enfants, Moungali',
    brand: 'Biso Market',
    brandClass: 'bg-secondary/15 text-secondary',
    text: "Biso Market me sauve chaque semaine. Produits frais du marché livrés à la maison, je gagne un temps précieux pour ma famille.",
    initials: 'NL',
  },
  {
    name: 'Joseph Mabiala',
    role: 'Gérant PME, Pointe-Noire',
    brand: 'Biso Logistics',
    brandClass: 'bg-primary/10 text-primary',
    text: "Pour la logistique de mon entreprise, Biso Logistics est fiable et couvre tout le pays. Un vrai partenaire de confiance.",
    initials: 'JM',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setIndex((v) => (v + 1) % reviews.length), [])
  const prev = useCallback(() => setIndex((v) => (v - 1 + reviews.length) % reviews.length), [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [next, paused])

  return (
    <section
      id="avis"
      className="relative overflow-hidden py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-primary/[0.05] blur-3xl" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
            <span className="h-px w-8 bg-primary" /> Ils nous font confiance
            <span className="h-px w-8 bg-primary" />
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            La parole aux Congolais
          </h2>
        </div>

        <div className="relative">
          {/* Arrows */}
          <button
            onClick={prev}
            aria-label="Avis précédent"
            className="absolute -left-4 top-1/2 z-20 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition-all hover:border-accent hover:text-accent md:flex lg:-left-16"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={next}
            aria-label="Avis suivant"
            className="absolute -right-4 top-1/2 z-20 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition-all hover:border-accent hover:text-accent md:flex lg:-right-16"
          >
            <ChevronRight className="size-5" />
          </button>

          {/* Slider viewport */}
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card p-8 shadow-xl shadow-primary/5 sm:p-12">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-primary to-secondary" />
            <Quote className="absolute right-8 top-8 size-16 text-primary/10" />

            <div className="relative min-h-[260px] sm:min-h-[230px]">
              {reviews.map((r, i) => {
                const isActive = i === index
                const offset = (i - index + reviews.length) % reviews.length
                const isBefore = offset > reviews.length / 2
                return (
                  <blockquote
                    key={r.name}
                    className={cn(
                      'absolute inset-0 flex flex-col justify-center text-center transition-all duration-700 ease-out',
                      isActive
                        ? 'translate-x-0 opacity-100'
                        : isBefore
                          ? 'pointer-events-none -translate-x-10 opacity-0'
                          : 'pointer-events-none translate-x-10 opacity-0',
                    )}
                    aria-hidden={!isActive}
                  >
                    <div className="mb-5 flex items-center justify-center gap-1">
                      {[0, 1, 2, 3, 4].map((s) => (
                        <Star key={s} className="size-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <span
                      className={cn(
                        'mx-auto mb-5 w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide',
                        r.brandClass,
                      )}
                    >
                      {r.brand}
                    </span>
                    <p className="mx-auto max-w-3xl font-display text-xl font-medium leading-snug text-balance sm:text-2xl">
                      “{r.text}”
                    </p>
                    <footer className="mt-8 flex items-center justify-center gap-4">
                      <span className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary font-display font-bold text-primary-foreground ring-2 ring-accent/60 ring-offset-2 ring-offset-card">
                        {r.initials}
                      </span>
                      <div className="text-left">
                        <p className="font-display font-bold">{r.name}</p>
                        <p className="text-sm text-muted-foreground">{r.role}</p>
                      </div>
                    </footer>
                  </blockquote>
                )
              })}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {reviews.map((r, i) => (
              <button
                key={r.name}
                onClick={() => setIndex(i)}
                aria-label={`Avis de ${r.name}`}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  i === index ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-primary/50',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
