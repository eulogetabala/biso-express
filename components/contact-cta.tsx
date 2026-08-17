import { Mail, MapPin, Phone } from 'lucide-react'

const contacts = [
  { icon: Phone, label: 'Téléphone', value: '+242 05 021 03 03 / 06 763 48 48' },
  { icon: Mail, label: 'E-mail', value: 'direction@bisoexpress.com' },
  { icon: MapPin, label: 'Siège', value: '1302 Avenue de la base Batignolles, Brazzaville' },
]

export function ContactCta() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-gradient-to-br from-primary via-primary to-[#0d1745] text-primary-foreground">
        {/* wax pattern overlay */}
        <img
          src="/images/wax-pattern.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15 mix-blend-overlay"
        />
        <div className="pointer-events-none absolute -bottom-40 -right-24 size-96 rounded-full bg-accent/15 blur-3xl" />
        <div className="relative grid gap-10 p-8 sm:p-14 lg:grid-cols-[1.2fr_0.8fr] lg:p-16">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
              <span className="h-px w-8 bg-accent" /> Travaillons ensemble
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl">
              Un partenariat, un projet, une question&nbsp;?
            </h2>
            <p className="mt-5 max-w-xl text-lg text-primary-foreground/80">
              Que vous soyez restaurateur, transporteur, commerçant ou entreprise,
              le groupe Biso construit des partenariats durables partout au Congo.
              Parlons de la façon dont nos marques peuvent vous accompagner.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:direction@bisoexpress.com"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-accent-foreground transition-transform hover:scale-105"
              >
                Écrire au groupe
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-primary-foreground/10 px-7 py-3.5 text-base font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/20"
              >
                Revoir nos marques
              </a>
            </div>
          </div>

          <ul className="flex flex-col justify-center gap-4">
            {contacts.map((c) => (
              <li
                key={c.label}
                className="flex items-center gap-4 rounded-2xl border border-primary-foreground/20 bg-primary-foreground/5 p-4 backdrop-blur"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <c.icon className="size-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-primary-foreground/60">
                    {c.label}
                  </p>
                  <p className="font-display text-lg font-semibold">{c.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
