'use client'

import { useEffect, useState } from 'react'
import { Clock, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Accueil', href: '/' },
  { label: 'Le groupe', href: '/le-groupe' },
  { label: 'Nos marques', href: '/nos-marques' },
  { label: 'Contact', href: '/contact' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 bg-white transition-all duration-300',
        scrolled
          ? 'border-b border-border shadow-md shadow-primary/5'
          : 'border-b border-border/60',
      )}
    >
      <div className="mx-auto flex h-28 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2" aria-label="Groupe Biso — accueil">
          <img
            src="/images/biso-logo.png"
            alt="Groupe Biso"
            className="h-[88px] w-auto rounded-lg bg-white p-1"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const active = isActive(l.href)
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  'relative text-sm font-semibold transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-primary after:transition-all',
                  active
                    ? 'text-foreground after:w-full'
                    : 'text-foreground/70 hover:text-foreground hover:after:w-full',
                )}
              >
                {l.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-md shadow-primary/20 transition-transform hover:scale-105"
          >
            Nous contacter
          </Link>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm font-semibold text-foreground/80">
            <Clock className="size-4 text-accent" />
            <span className="flex flex-col leading-tight">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Heures d&apos;ouverture
              </span>
              <span>08h – 22h</span>
            </span>
          </span>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => {
              const active = isActive(l.href)
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'rounded-lg px-3 py-3 text-base font-semibold',
                    active ? 'bg-muted text-foreground' : 'text-foreground hover:bg-muted',
                  )}
                >
                  {l.label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-bold text-primary-foreground"
            >
              Nous contacter
            </Link>
            <span className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2.5 text-sm font-semibold text-foreground/80">
              <Clock className="size-4 text-accent" />
              <span className="flex flex-col leading-tight">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Heures d&apos;ouverture
                </span>
                <span>08h – 22h</span>
              </span>
            </span>
          </nav>
        </div>
      )}
    </header>
  )
}
