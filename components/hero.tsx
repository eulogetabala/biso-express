'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const SLIDE_MS = 6000

type TitlePart = { text: string; highlight?: boolean; br?: boolean }

type Slide = { eyebrow: string; title: TitlePart[]; description: string; image: string }

/**
 * 3 slides centrés sur l'entreprise, avant les services.
 * Images attendues dans public/images/ :
 *  - hero-groupe.jpg     → slide 1
 *  - hero-expertise.jpg  → slide 2
 *  - hero-impact.jpg     → slide 3
 */
const slides: Slide[] = [
  {
    eyebrow: 'Le groupe',
    title: [
      { text: 'Plus qu’un service,' },
      { text: ' une solution.', highlight: true, br: true },
    ],
    description:
      'Groupe Biso est une structure congolaise qui développe et opère des marques de services indépendantes, unies par une même exigence de fiabilité et de qualité au service du quotidien.',
    image: '/images/4.jpg',
  },
  {
    eyebrow: 'Notre expertise',
    title: [
      { text: 'Cinq métiers' },
      { text: ' maîtrisés', highlight: true },
      { text: ',', br: true },
      { text: ' par des équipes dédiées.' },
    ],
    description:
      'De la livraison éclair à la logistique nationale, chaque marque Biso est pilotée par des experts du terrain qui connaissent parfaitement leur métier et les réalités congolaises.',
    image: '/images/7.jpg',
  },
  {
    eyebrow: 'Notre impact',
    title: [
      { text: 'Créer de l’emploi,' },
      { text: ' faire vivre', highlight: true },
      { text: ' l’économie locale.', br: true },
    ],
    description:
      'Coursiers, chauffeurs, restaurateurs, vendeurs de marché : le groupe Biso crée des opportunités et accompagne des centaines de partenaires congolais au quotidien.',
    image: '/images/1.jpg',
  },
]

function SlideImage({ src, alt, className, active }: { src: string; alt: string; className: string; active?: boolean }) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(className, active && 'scale-115')}
    />
  )
}

export function Hero() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [progress, setProgress] = useState(0)

  // Auto-advance + progress bar
  useEffect(() => {
    if (paused) return
    const start = performance.now()
    setProgress(0)
    const id = setInterval(() => {
      const p = Math.min((performance.now() - start) / SLIDE_MS, 1)
      setProgress(p)
      if (p >= 1) setActive((v) => (v + 1) % slides.length)
    }, 40)
    return () => clearInterval(id)
  }, [active, paused])

  const slide = slides[active]
  const next = () => setActive((v) => (v + 1) % slides.length)
  const prev = () => setActive((v) => (v - 1 + slides.length) % slides.length)

  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] items-center overflow-hidden bg-primary"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Sliding image track ─────────────────────────────── */}
      <div className="absolute inset-0">
        <div
          className="flex h-full transition-transform duration-[1100ms] ease-[cubic-bezier(0.77,0,0.18,1)]"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div key={s.image} className="relative h-full w-full shrink-0 overflow-hidden">
              <SlideImage
                src={s.image}
                alt=""
                active={i === active}
                className="h-full w-full object-cover transition-transform duration-[9000ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/55 to-primary/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-transparent to-primary/35" />
            </div>
          ))}
        </div>
      </div>

      {/* Floating glow blobs */}
      <div className="pointer-events-none absolute -left-32 top-24 size-80 animate-float rounded-full bg-secondary/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-16 size-96 animate-float rounded-full bg-accent/15 blur-3xl [animation-delay:2s]" />

      {/* Giant slide number */}
      <div
        key={`num-${active}`}
        className="pointer-events-none absolute -right-6 top-1/2 hidden -translate-y-1/2 select-none font-display text-[16rem] font-extrabold leading-none text-white/10 lg:block"
      >
        <span className="animate-fade-in">{String(active + 1).padStart(2, '0')}</span>
      </div>

      {/* ── Content (re-animates on each slide) ─────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-28 pt-32 sm:px-6 lg:px-8">
        <div key={active} className="max-w-2xl text-white">
          <div
            className="mb-6 inline-flex animate-slide-left items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-semibold backdrop-blur"
            style={{ animationDelay: '0ms' }}
          >
            <span className="size-2 animate-pulse rounded-full bg-accent" />
            {slide.eyebrow}
          </div>

          <h1
            className="font-display animate-fade-up text-4xl font-extrabold leading-[1.04] tracking-tight text-balance sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '160ms' }}
          >
            {slide.title.map((part, idx) => (
              <span
                key={idx}
                className={cn(
                  'inline',
                  part.highlight &&
                    'bg-gradient-to-r from-accent via-orange-300 to-accent bg-clip-text text-transparent',
                )}
              >
                {part.text}
                {part.br && <br />}
              </span>
            ))}
          </h1>

          <p
            className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-white/85"
            style={{ animationDelay: '320ms' }}
          >
            {slide.description}
          </p>

          <div
            className="mt-10 flex animate-fade-up flex-wrap items-center gap-4"
            style={{ animationDelay: '480ms' }}
          >
            <a
              href="#groupe"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-bold text-accent-foreground shadow-lg shadow-accent/30 transition-transform hover:scale-105"
            >
              Découvrir le groupe
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Nos marques
            </a>
          </div>
        </div>
      </div>

      {/* ── Side number navigation ──────────────────────────── */}
      <div className="absolute right-8 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex">
        {slides.map((s, i) => (
          <button
            key={s.image}
            onClick={() => setActive(i)}
            className="group flex items-center gap-3"
            aria-label={s.eyebrow}
          >
            <span
              className={cn(
                'font-display text-sm font-bold transition-colors',
                i === active ? 'text-accent' : 'text-white/40 group-hover:text-white/80',
              )}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <span
              className={cn(
                'h-9 rounded-full transition-all duration-500',
                i === active ? 'w-1 bg-accent' : 'w-0.5 bg-white/25 group-hover:bg-white/60',
              )}
            />
          </button>
        ))}
      </div>

      {/* ── Rotating circular badge ─────────────────────────── */}
      <div className="absolute bottom-10 left-10 z-20 hidden items-center justify-center xl:flex">
        <div className="relative flex size-32 items-center justify-center">
          <svg className="absolute inset-0 size-full animate-spin-slow" viewBox="0 0 100 100">
            <defs>
              <path id="hero-circle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text className="fill-white/70" style={{ fontSize: 9, letterSpacing: 2 }}>
              <textPath href="#hero-circle">GROUPE BISO · BRAZZAVILLE · CONGO · GROUPE BISO ·</textPath>
            </text>
          </svg>
          <span className="flex size-14 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur">
            <ArrowUpRight className="size-6 text-accent" />
          </span>
        </div>
      </div>

      {/* ── Bottom controls ─────────────────────────────────── */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        {/* Progress bar */}
        <div className="mx-auto h-0.5 max-w-7xl bg-white/15 px-4 sm:px-6 lg:px-8">
          <div
            className="h-full bg-accent transition-[width] duration-100 ease-linear"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Slide précédente"
              className="flex size-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/15"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              onClick={next}
              aria-label="Slide suivante"
              className="flex size-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/15"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>

          <div className="hidden flex-1 items-center justify-center gap-3 md:flex">
            {slides.map((s, i) => (
              <button
                key={s.image}
                onClick={() => setActive(i)}
                aria-label={s.eyebrow}
                className={cn(
                  'overflow-hidden rounded-full transition-all duration-500',
                  i === active
                    ? 'h-10 w-14 border-2 border-accent'
                    : 'h-10 w-10 border border-white/20 opacity-60 hover:opacity-100',
                )}
              >
                <SlideImage
                  src={s.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>

          <span className="hidden font-display text-sm font-bold text-white/80 sm:block">
            {String(active + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  )
}
