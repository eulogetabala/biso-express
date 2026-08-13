import { Check } from 'lucide-react'
import { services } from '@/lib/services'
import { cn } from '@/lib/utils'

const accentText: Record<string, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  accent: 'text-accent',
}

const accentChip: Record<string, string> = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary',
  accent: 'bg-accent/15 text-accent',
}

const descriptions: Record<string, string> = {
  express:
    "La référence de la livraison rapide à Brazzaville. Nos coursiers prennent en charge colis, documents et achats du quotidien, avec un suivi en temps réel et des délais parmi les plus courts de la ville.",
  taxi:
    'Se déplacer en toute sérénité, de jour comme de nuit. Biso Taxi met en relation des chauffeurs de confiance et des passagers qui connaissent le prix de leur course avant de partir.',
  food:
    "Les saveurs de Brazzaville livrées bien chaudes. Des ngandas aux restaurants les plus appréciés, nous sélectionnons des partenaires passionnés et livrons vos plats à domicile.",
  market:
    "Les produits frais du marché, sans quitter la maison. Fruits, légumes, épicerie et essentiels du quotidien, sourcés auprès des vendeurs locaux et livrés chez vous.",
  logistics:
    "Le partenaire logistique des entreprises congolaises. Transport de marchandises, entreposage sécurisé et distribution à l'échelle nationale, avec un suivi fiable de bout en bout.",
}

export function ServicesList() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-16 max-w-2xl">
        <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
          <span className="h-px w-8 bg-accent" /> L’écosystème
        </p>
        <h2 className="font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          Cinq métiers complémentaires, une même promesse
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          Chaque entité Biso opère de façon autonome avec sa propre équipe —
          l&apos;ensemble couvre toute la chaîne du quotidien, du colis au fret.
        </p>
      </div>

      <div className="space-y-16 lg:space-y-24">
        {services.map((s, i) => (
          <article
            key={s.id}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            {/* Image */}
            <div
              className={cn(
                'relative',
                i % 2 === 1 && 'lg:order-2',
              )}
            >
              <div
                className={cn(
                  'absolute -inset-4 -z-10 rounded-[2.5rem] blur-2xl',
                  s.accent === 'accent'
                    ? 'bg-accent/15'
                    : s.accent === 'secondary'
                      ? 'bg-secondary/15'
                      : 'bg-primary/15',
                )}
              />
              <div className="group relative overflow-hidden rounded-[2rem] border border-border shadow-xl shadow-primary/5">
                <img
                  src={s.image || '/placeholder.svg'}
                  alt={s.name}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                <span
                  className={cn(
                    'absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide',
                    accentChip[s.accent],
                  )}
                >
                  {s.sector}
                </span>
                <div className="absolute bottom-4 right-4 rounded-2xl border border-white/20 bg-black/35 px-4 py-2.5 text-right backdrop-blur-md">
                  <p className="font-display text-xl font-bold text-white">{s.stat.value}</p>
                  <p className="text-[10px] uppercase tracking-wide text-white/70">{s.stat.label}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className={cn(i % 2 === 1 && 'lg:order-1')}>
              <p className="mb-2 font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
                {String(i + 1).padStart(2, '0')} · {s.tagline}
              </p>
              <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {s.name}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {descriptions[s.id]}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm"
                  >
                    <Check className={cn('size-4', accentText[s.accent])} /> {f}
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
