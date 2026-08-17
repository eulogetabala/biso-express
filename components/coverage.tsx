import { MapPin } from 'lucide-react'

const cities = [
  'Brazzaville',
  'Pointe-Noire',
  'Dolisie',
  'Nkayi',
  'Ouesso',
  'Owando',
  'Impfondo',
  'Sibiti',
  'Madingou',
  'Gamboma',
]

export function Coverage() {
  return (
    <section id="coverage" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-xl shadow-primary/10">
            <img
              src="/images/4.jpeg"
              alt="Partenaires et collaborateurs de Biso Express"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          {/* wax pattern accent */}
          <div className="absolute -bottom-6 -left-6 -z-10 size-40 overflow-hidden rounded-3xl border border-border">
            <img
              src="/images/wax-pattern.png"
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -right-4 top-8 rounded-2xl border border-border bg-card px-5 py-4 shadow-xl">
            <p className="font-display text-3xl font-bold text-accent">12</p>
            <p className="text-xs text-muted-foreground">départements visés</p>
          </div>
        </div>

        <div>
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
            <span className="h-px w-8 bg-accent" /> Notre présence
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            De Brazzaville à Pointe-Noire, Biso se déploie
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Nos marques grandissent ville après ville pour rapprocher les
            Congolais des services dont ils ont besoin. Notre réseau de coursiers,
            chauffeurs et partenaires locaux s&apos;étend chaque mois.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-3">
            {cities.map((c) => (
              <li
                key={c}
                className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium transition-colors hover:border-accent/60"
              >
                <MapPin className="size-4 text-accent" /> {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
