import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { GroupAbout } from '@/components/group-about'
import { ServicesShowcase } from '@/components/services-showcase'
import { ParallaxBand } from '@/components/parallax-band'
import { Stats } from '@/components/stats'
import { Coverage } from '@/components/coverage'
import { Testimonials } from '@/components/testimonials'
import { ContactCta } from '@/components/contact-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <GroupAbout />
        <ServicesShowcase />
        <ParallaxBand />
        <Stats />
        <Coverage />
        <Testimonials />
        <ContactCta />
      </main>
      <SiteFooter />
    </div>
  )
}
