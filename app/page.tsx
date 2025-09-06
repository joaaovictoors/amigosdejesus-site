import { HeroSection } from "@/components/hero-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ExamplesSection } from "@/components/examples-section"
import { ContentDetailsSection } from "@/components/content-details-section"
import { BenefitsSection } from "@/components/benefits-section"
import { OfferSection } from "@/components/offer-section"
import { FAQSection } from "@/components/faq-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HowItWorksSection />
      <ExamplesSection />
      <ContentDetailsSection />
      <BenefitsSection />
      <OfferSection />
      <FAQSection />
    </main>
  )
}
