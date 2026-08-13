import { SiteHeader } from '@/components/site-header'
import { PageHero } from '@/components/page-hero'
import { ServicesList } from '@/components/services-list'
import { StatsMarques } from '@/components/stats-marques'
import { CtaBanner } from '@/components/cta-banner'
import { SiteFooter } from '@/components/site-footer'

export default function MarquesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Nos marques"
          title={
            <>
              Cinq métiers,
              <br />
              <span className="bg-gradient-to-r from-accent via-orange-300 to-accent bg-clip-text text-transparent">
                une même exigence.
              </span>
            </>
          }
          description="Chaque marque Biso opère de façon autonome avec sa propre expertise métier — et partage une exigence commune de qualité, de fiabilité et de service."
          image="/images/7.jpg"
        />
        <ServicesList />
        <StatsMarques />
        <CtaBanner
          title="Un besoin précis ? Parlons-en."
          text="Livraison, mobilité, restauration, courses ou fret : nos équipes construisent la solution adaptée à votre quotidien."
          buttonLabel="Discuter de mon projet"
        />
      </main>
      <SiteFooter />
    </div>
  )
}
