import { SiteHeader } from '@/components/site-header'
import { PageHero } from '@/components/page-hero'
import { GroupVision } from '@/components/group-vision'
import { GroupValues } from '@/components/group-values'
import { CoverageGrid } from '@/components/coverage-grid'
import { CtaBanner } from '@/components/cta-banner'
import { SiteFooter } from '@/components/site-footer'

export default function GroupePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Le groupe"
          title={
            <>
              Une ambition collective,
              <br />
              <span className="bg-gradient-to-r from-accent via-orange-300 to-accent bg-clip-text text-transparent">
                un ancrage congolais.
              </span>
            </>
          }
          description="Découvrez la structure qui fait vivre les marques Biso : son histoire, ses valeurs et sa présence sur tout le territoire congolais."
          image="/images/4.jpg"
        />
        <GroupVision />
        <GroupValues />
        <CoverageGrid />
        <CtaBanner
          title="Envie de rejoindre l’aventure Biso ?"
          text="Partenaires, coursiers, chauffeurs, restaurateurs : il existe mille façons de grandir avec nous."
          buttonLabel="Nous contacter"
        />
      </main>
      <SiteFooter />
    </div>
  )
}
