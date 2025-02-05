"use client";
import AdvantagesSection from "@/components/AdvantagesSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import SpecsSection from "@/components/SpecsSection";
import TeamSection from "@/components/TeamSection";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function Home() {

  useSmoothScroll()

  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <SpecsSection />
      <AdvantagesSection />
      <TeamSection />
    </>
  )
}

