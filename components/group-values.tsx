import { Building2, Compass, HandshakeIcon, ShieldCheck } from 'lucide-react'

const values = [
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

export function GroupValues() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
      <img
        src="/images/wax-pattern.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.06] mix-blend-overlay"
      />
      <div className="pointer-events-none absolute -left-32 top-1/3 size-96 rounded-full bg-secondary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 size-96 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
            <span className="h-px w-8 bg-accent" /> Nos valeurs
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl">
            Ce qui nous relie, au-delà des marques
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-primary-foreground/80">
            Quatre principes guident chacune de nos décisions, de la première
            course du matin à la livraison la plus lourde.
          </p>
        </div>

        <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="group grid items-center gap-6 py-8 transition-colors lg:grid-cols-[100px_1fr_2fr] lg:gap-10"
            >
              <span className="font-display text-4xl font-extrabold text-white/15 transition-colors group-hover:text-accent/60 sm:text-5xl">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex items-center gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-accent backdrop-blur transition-colors group-hover:bg-accent/20">
                  <v.icon className="size-6" />
                </span>
                <h3 className="font-display text-xl font-bold sm:text-2xl">{v.title}</h3>
              </div>
              <p className="text-primary-foreground/75 lg:pl-4">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
