import { Check, Clock, MapPin } from 'lucide-react'

const activeCities = [
  { name: 'Brazzaville', detail: 'Capitale · Siège du groupe' },
  { name: 'Pointe-Noire', detail: 'Capitale économique' },
]

const upcomingCities = [
  'Dolisie',
  'Nkayi',
  'Ouesso',
  'Owando',
  'Impfondo',
  'Sibiti',
  'Madingou',
  'Gamboma',
]

const stats = [
  { value: '2', label: 'villes actives' },
  { value: '12', label: 'départements visés' },
  { value: '8', label: 'villes à venir' },
]

export function CoverageGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
            <span className="h-px w-8 bg-accent" /> Notre présence
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl">
            Aujourd&apos;hui à Brazzaville et Pointe-Noire
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Le groupe Biso a démarré à Brazzaville et s&apos;est étendu à
            Pointe-Noire. Le déploiement se poursuit progressivement vers
            d&apos;autres villes, porté par des partenaires locaux.
          </p>
          <div className="mt-8 flex flex-wrap gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-bold text-primary">{s.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {/* Active cities */}
          <div className="grid gap-5 sm:grid-cols-2">
            {activeCities.map((c) => (
              <div
                key={c.name}
                className="group relative overflow-hidden rounded-[2rem] border border-primary/25 bg-gradient-to-br from-primary to-[#0d1745] p-7 text-primary-foreground shadow-xl shadow-primary/15 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="pointer-events-none absolute -right-6 -top-6 size-24 rounded-full bg-accent/20 blur-2xl" />
                <div className="flex items-start justify-between">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                    <MapPin className="size-5" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wide backdrop-blur">
                    <Check className="size-3.5" /> Active
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold">{c.name}</h3>
                <p className="mt-1 text-sm text-primary-foreground/75">{c.detail}</p>
              </div>
            ))}
          </div>

          {/* Upcoming cities */}
          <div className="rounded-[2rem] border border-border bg-card p-7">
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-muted-foreground">
              <Clock className="size-4 text-accent" /> Prochaines étapes
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {upcomingCities.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border bg-background px-3.5 py-1.5 text-sm font-medium text-muted-foreground"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
