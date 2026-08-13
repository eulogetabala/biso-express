import { SiteHeader } from '@/components/site-header'
import { PageHero } from '@/components/page-hero'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Contact"
          title={
            <>
              Parlons de votre projet,
              <br />
              <span className="bg-gradient-to-r from-accent via-orange-300 to-accent bg-clip-text text-transparent">
                travaillons ensemble.
              </span>
            </>
          }
          description="Une question, un partenariat, un projet ? Nos équipes vous répondent rapidement — par téléphone, par e-mail ou au siège."
          image="/images/9.jpg"
        />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
