import { Eye, Flame, Lightbulb, Target } from 'lucide-react'

const pillars = [
  {
    icon: Eye,
    title: 'Notre vision',
    text: 'Un Congo où chaque besoin du quotidien trouve une réponse simple, fiable et accessible — portée par des services pensés localement.',
  },
  {
    icon: Target,
    title: 'Notre mission',
    text: 'Développer et opérer des marques de services indépendantes, chacune experte dans son domaine, toutes unies par une exigence de qualité.',
  },
  {
    icon: Lightbulb,
    title: 'Notre ambition',
    text: 'Couvrir, au fil des années, toujours plus de besoins et de territoires — sans jamais sacrifier la proximité et la qualité de service.',
  },
  {
    icon: Flame,
    title: 'Notre moteur',
    text: 'L’entrepreneuriat local : chaque marque crée des emplois, mobilise des talents congolais et fait vivre l’économie de proximité.',
  },
]

export function GroupVision() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute -right-32 top-0 size-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 size-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
            <span className="h-px w-8 bg-accent" /> Notre vision
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl">
            Un groupe tourné vers l&apos;avenir du Congo
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Nous construisons, un service à la fois, un écosystème où les Congolais
            trouvent des solutions de qualité à leurs besoins quotidiens.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
            >
              <span className="absolute -right-3 -top-4 font-display text-7xl font-extrabold text-foreground/[0.05] transition-colors group-hover:text-accent/10">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <p.icon className="size-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
