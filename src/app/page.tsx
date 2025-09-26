import { HeroSection } from "@/components/sections/HeroSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { WorksSection } from "@/components/sections/WorksSection"
import { PricingSection } from "@/components/sections/PricingSection"
import { LatestPostsSection } from "@/components/sections/LatestPostsSection"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WorksSection />
      <PricingSection />
      <LatestPostsSection />
    </>
  )
}
