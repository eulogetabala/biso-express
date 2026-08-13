'use client'

import { useEffect, useRef, useState } from 'react'
import { Building2, Handshake, MapPin, Users } from 'lucide-react'

type Stat = { value: number; suffix: string; label: string; icon: typeof Users }

const stats: Stat[] = [
  { value: 100, suffix: '', label: 'Clients accompagnés', icon: Users },
  { value: 5, suffix: '', label: 'Marques du groupe', icon: Building2 },
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

function StatCell({ stat, run }: { stat: Stat; run: boolean }) {
  const value = useCountUp(stat.value, run)
  const Icon = stat.icon
  return (
    <div className="flex items-center gap-5 px-2 sm:px-6 lg:px-10">
      <span className="hidden size-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/25 sm:flex">
        <Icon className="size-6" />
      </span>
      <div>
        <p className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          {value.toLocaleString('fr-FR')}
          <span className="text-accent">{stat.suffix}</span>
        </p>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:text-sm">
          {stat.label}
        </p>
      </div>
    </div>
  )
}

export function StatsMarques() {
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
    <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
      <div
        ref={ref}
        className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card py-10 shadow-xl shadow-primary/5"
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-primary to-secondary" />
        <div className="grid grid-cols-1 gap-y-10 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {stats.map((s) => (
            <StatCell key={s.label} stat={s} run={run} />
          ))}
        </div>
      </div>
    </section>
  )
}
