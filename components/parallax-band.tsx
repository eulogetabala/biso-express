'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, Handshake, MapPin, Sparkles, Users } from 'lucide-react'

const highlights = [
  { icon: Users, value: '100', label: 'clients accompagnés' },
  { icon: Handshake, value: '50+', label: 'partenaires locaux' },
  { icon: MapPin, value: '12', label: 'départements couverts' },
]

export function ParallaxBand() {
  const imgRef = useRef<HTMLImageElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const img = imgRef.current
    const section = sectionRef.current
    if (!img || !section) return

    let raf = 0
    const update = () => {
      raf = 0
      const rect = section.getBoundingClientRect()
      const vh = window.innerHeight
      if (rect.bottom < -200 || rect.top > vh + 200) return
      // Progress from 0 (entering) to 1 (leaving) — the image drifts gently inside its frame
      const progress = (vh - rect.top) / (vh + rect.height)
      const y = (progress - 0.5) * 90
      img.style.transform = `translate3d(0, ${y}px, 0) scale(1.2)`
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 lg:py-28">
      {/* Soft background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.04] to-background" />
      <div className="pointer-events-none absolute -left-40 top-1/3 size-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 size-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left — content */}
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
              <span className="h-px w-8 bg-accent" /> Notre engagement
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl">
              Créer de l&apos;emploi, faire vivre{' '}
              <span className="text-primary">l&apos;économie locale.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Chauffeurs, coursiers, restaurateurs, vendeurs de marché&nbsp;:
              chaque marque Biso travaille main dans la main avec des partenaires
              congolais, pour bâtir un écosystème durable au service de tous.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-start gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <h.icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-display text-xl font-bold">{h.value}</p>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {h.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105"
              >
                Devenir partenaire
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#groupe"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-base font-semibold transition-colors hover:border-primary/40"
              >
                Découvrir Biso Express
              </a>
            </div>
          </div>

          {/* Right — framed parallax image */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="absolute -left-8 -top-8 -z-10 size-40 overflow-hidden rounded-3xl border border-border opacity-90">
              <img src="/images/wax-pattern.png" alt="" aria-hidden="true" className="h-full w-full object-cover" />
            </div>

            <div className="relative h-[420px] overflow-hidden rounded-[2.5rem] border border-border shadow-2xl shadow-primary/15 sm:h-[500px]">
              <img
                ref={imgRef}
                src="/images/9.jpg"
                alt="Partenaires et collaborateurs de Biso Express"
                className="absolute left-0 top-0 h-[130%] w-full object-cover will-change-transform"
                style={{ transform: 'translate3d(0, 0, 0) scale(1.2)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-xl">
              <span className="flex size-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Sparkles className="size-5" />
              </span>
              <div>
                <p className="font-display text-lg font-bold leading-none">100% local</p>
                <p className="mt-1 text-xs text-muted-foreground">des équipes au service du Congo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
