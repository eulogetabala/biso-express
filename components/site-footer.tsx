import { AtSign, Globe, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const columns = [
  {
    title: 'Nos marques',
    links: [
      { label: 'Biso Livraison', href: '/nos-marques' },
      { label: 'Biso Taxi', href: '/nos-marques' },
      { label: 'Biso Food', href: '/nos-marques' },
      { label: 'Biso Market', href: '/nos-marques' },
      { label: 'Biso Pharma', href: '/nos-marques' },
      { label: 'Biso Logistics', href: '/nos-marques' },
    ],
  },
  {
    title: 'Le groupe',
    links: [
      { label: 'À propos', href: '/le-groupe' },
      { label: 'Notre vision', href: '/le-groupe' },
      { label: 'Carrières', href: '/le-groupe' },
      { label: 'Presse', href: '/le-groupe' },
      { label: 'Partenaires', href: '/le-groupe' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Nous contacter', href: '/contact' },
      { label: 'Devenir partenaire', href: '/contact' },
      { label: 'Devenir coursier', href: '/contact' },
      { label: 'Devenir chauffeur', href: '/contact' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-card">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2" aria-label="Groupe Biso">
              <img
                src="/images/biso-logo.png"
                alt="Groupe Biso"
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Le groupe congolais qui développe des marques de services
              indépendantes au service du quotidien. Fièrement basé à Brazzaville. 🇨🇬
            </p>
            <p className="mt-3 font-display text-sm font-semibold text-primary">
              Plus qu&apos;un service, une solution.
            </p>
            <div className="mt-6 flex gap-3">
              {[Globe, MessageCircle, AtSign].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Réseau social"
                  className="flex size-10 items-center justify-center rounded-full border border-border bg-background transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10 hover:text-accent"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="font-display text-sm font-bold uppercase tracking-wide">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Groupe Biso. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Confidentialité</a>
            <a href="#" className="hover:text-foreground">Conditions</a>
            <a href="#" className="hover:text-foreground">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
