import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function CtaBanner({
  title,
  text,
  buttonLabel = 'Nous contacter',
}: {
  title: string
  text: string
  buttonLabel?: string
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-primary to-[#0d1745] px-8 py-14 text-center text-primary-foreground sm:px-12 lg:py-16">
        <img
          src="/images/wax-pattern.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15 mix-blend-overlay"
        />
        <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">{text}</p>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-bold text-accent-foreground shadow-lg shadow-accent/30 transition-transform hover:scale-105"
          >
            {buttonLabel}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
