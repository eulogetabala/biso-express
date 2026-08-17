'use client'

import { useEffect, useRef, useState } from 'react'
import { Building2, Handshake, MapPin, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

type Stat = { value: number; suffix: string; label: string; icon: typeof Users }

const stats: Stat[] = [
  { value: 100, suffix: '', label: 'Clients accompagnés', icon: Users },
  { value: 6, suffix: '', label: 'Marques du groupe', icon: Building2 },
  { value: 50, suffix: '+', label: 'Partenaires & prestataires', icon: Handshake },
  { value: 12, suffix: '', label: 'Départements visés', icon: MapPin },
]

function useCountUp(target: number, run: boolean, duration = 1600) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!run) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, target, duration])
  return value
}

function StatCard({ stat, run, index }: { stat: Stat; run: boolean; index: number }) {
  const value = useCountUp(stat.value, run)
  const Icon = stat.icon
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-primary to-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span
        className={cn(
          'flex size-12 items-center justify-center rounded-2xl',
          index % 2 === 0 ? 'bg-primary/10 text-primary' : 'bg-accent/15 text-accent',
        )}
      >
        <Icon className="size-6" />
      </span>
      <p className="mt-6 font-display text-5xl font-bold tracking-tight text-foreground">
        {value.toLocaleString('fr-FR')}
        <span className="text-accent">{stat.suffix}</span>
      </p>
      <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        {stat.label}
      </p>
    </div>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [run, setRun] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRun(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
      <div ref={ref} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <StatCard key={s.label} stat={s} run={run} index={i} />
        ))}
      </div>
    </section>
  )
}
