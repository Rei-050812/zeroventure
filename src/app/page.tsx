import { HeroSection } from "@/components/sections/HeroSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { WorksSection } from "@/components/sections/WorksSection"
import { PricingSection } from "@/components/sections/PricingSection"
import { LatestPostsSection } from "@/components/sections/LatestPostsSection"
import { GlobalBackgroundEffects } from "@/components/effects/GlobalBackgroundEffects"

export default function HomePage() {
  return (
    <div className="relative">
      {/* Main Content with Background Effects */}
      <div className="relative">
        {/* Background Effects for Main Content Only */}
        <div className="absolute inset-0 z-0">
          <GlobalBackgroundEffects />
        </div>

        {/* All content sections */}
        <div className="relative z-10">
          <HeroSection />
          <ServicesSection />
          <WorksSection />
          <PricingSection />
          <LatestPostsSection />
        </div>
      </div>
    </div>
  )
}
