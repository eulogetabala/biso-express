'use client'

import { useState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { services } from '@/lib/services'
import { cn } from '@/lib/utils'

const accentText: Record<string, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  accent: 'text-accent',
}
const accentBg: Record<string, string> = {
  primary: 'bg-primary text-primary-foreground',
  secondary: 'bg-secondary text-secondary-foreground',
  accent: 'bg-accent text-accent-foreground',
}

export function ServicesShowcase() {
  const [active, setActive] = useState(0)

  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
            <span className="h-px w-8 bg-accent" /> Nos marques
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Six marques indépendantes, un même groupe
          </h2>
        </div>
        <p className="max-w-sm text-muted-foreground">
          Survolez ou appuyez sur une marque pour l&apos;explorer. Chaque entité
          Biso opère de façon autonome, avec sa propre expertise métier.
        </p>
      </div>

      {/* Desktop expanding panels */}
      <div className="mt-12 hidden gap-3 lg:flex lg:h-[520px]">
        {services.map((s, i) => (
          <button
            key={s.id}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            className={cn(
              'group relative overflow-hidden rounded-3xl border border-border text-left transition-all duration-500 ease-out',
              active === i ? 'flex-[4]' : 'flex-[1]',
            )}
            aria-label={s.name}
          >
            <img
              src={s.image || '/placeholder.svg'}
              alt={s.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />

            {/* Collapsed label */}
            <div
              className={cn(
                'absolute inset-0 flex items-end p-5 transition-opacity duration-300',
                active === i ? 'opacity-0' : 'opacity-100',
              )}
            >
              <span className="font-display text-xl font-bold text-white [writing-mode:vertical-rl] rotate-180">
                {s.name}
              </span>
            </div>

            {/* Expanded content */}
            <div
              className={cn(
                'absolute inset-0 flex flex-col justify-end p-8 transition-opacity duration-500',
                active === i ? 'opacity-100 delay-150' : 'pointer-events-none opacity-0',
              )}
            >
              <span
                className={cn(
                  'mb-4 w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide',
                  accentBg[s.accent],
                )}
              >
                {s.sector}
              </span>
              <h3 className="font-display text-3xl font-bold text-white">{s.name}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">
                {s.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-1.5 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs backdrop-blur"
                  >
                    <Check className={cn('size-3.5', accentText[s.accent])} /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-flex w-fit items-center gap-1.5 font-semibold text-white hover:underline"
              >
                En savoir plus <ArrowUpRight className="size-4" />
              </a>
            </div>
          </button>
        ))}
      </div>

      {/* Mobile stacked cards */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:hidden">
        {services.map((s) => (
          <article
            key={s.id}
            className="overflow-hidden rounded-3xl border border-border bg-card"
          >
            <div className="relative h-52">
              <img
                src={s.image || '/placeholder.svg'}
                alt={s.name}
                className="h-full w-full object-cover"
              />
              <span
                className={cn(
                  'absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold uppercase',
                  accentBg[s.accent],
                )}
              >
                {s.tagline}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl font-bold">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs"
                  >
                    <Check className={cn('size-3.5', accentText[s.accent])} /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
