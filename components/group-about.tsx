import { Building2, Compass, HandshakeIcon, ShieldCheck } from 'lucide-react'

const pillars = [
  {
    icon: Building2,
    title: 'Une structure, plusieurs marques',
    text: "Biso n'est pas une application unique, mais une structure qui fait naître et grandir des entreprises de services autonomes, chacune avec sa propre équipe et son expertise.",
  },
  {
    icon: ShieldCheck,
    title: 'Une exigence commune',
    text: 'De la livraison au fret, toutes nos marques partagent les mêmes standards de fiabilité, de sécurité et de service client.',
  },
  {
    icon: Compass,
    title: 'Ancrés au Congo',
    text: 'Basés à Brazzaville, nous concevons des solutions pensées pour les réalités et les besoins concrets des Congolais.',
  },
  {
    icon: HandshakeIcon,
    title: 'Aux côtés du local',
    text: 'Chauffeurs, coursiers, restaurateurs, vendeurs de marché : nous créons de l’emploi et faisons vivre l’économie locale.',
  },
]

export function GroupAbout() {
  return (
    <section id="groupe" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
              <span className="h-px w-8 bg-accent" /> Biso Express
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl">
              Biso Express, une structure,
              <br className="hidden sm:block" /> plusieurs solutions du quotidien
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Tout est parti d&apos;une promesse simple&nbsp;: livrer vite et bien.
              De cette conviction, la structure Biso a fait naître six marques,
              chacune experte dans son métier, unies par la même exigence de
              fiabilité et de qualité à travers Brazzaville.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Notre devise résume tout&nbsp;:{' '}
              <span className="font-display font-semibold text-primary">
                « Plus qu&apos;un service, une solution. »
              </span>
            </p>
          </div>

          {/* Photo composition */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-border shadow-xl shadow-primary/10">
              <img
                src="/images/3.jpg"
                alt="L'équipe Biso Express au travail"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 size-44 overflow-hidden rounded-3xl border-4 border-card shadow-lg">
              <img
                src="/images/2.jpg"
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -right-4 -top-6 rounded-2xl border border-border bg-card px-5 py-4 shadow-xl">
              <p className="font-display text-3xl font-bold text-primary">6 marques</p>
              <p className="text-xs text-muted-foreground">une même structure</p>
            </div>
            <div className="absolute -bottom-10 -right-8 -z-10 size-40 overflow-hidden rounded-3xl border border-border">
              <img
                src="/images/wax-pattern.png"
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-accent/15 group-hover:text-accent">
                <p.icon className="size-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
