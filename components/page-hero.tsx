import type { ReactNode } from 'react'

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string
  title: ReactNode
  description: string
  image: string
}) {
  return (
    <section className="relative flex min-h-[55vh] items-end overflow-hidden bg-primary pb-16 pt-32">
      <img src={image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-semibold backdrop-blur">
            <span className="size-2 animate-pulse rounded-full bg-accent" />
            {eyebrow}
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">{description}</p>
        </div>
      </div>
    </section>
  )
}
