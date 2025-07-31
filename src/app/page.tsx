import { HeroSection } from "@/components/hero-section"
import { HowToUseSection } from "@/components/how-to-use-section"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection, Footer } from "@/components/cta-footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HowToUseSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
