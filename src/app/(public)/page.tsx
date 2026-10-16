import { AboutIntro } from "@/features/home/about-intro";
import { AdmissionsSection } from "@/features/home/admissions-section";
import { homeContent } from "@/features/home/content";
import { CtaBand } from "@/features/home/cta-band";
import { FacultiesSection } from "@/features/home/faculties-section";
import { Hero } from "@/features/home/hero";
import { NewsSection } from "@/features/home/news-section";
import { PartnersSection } from "@/features/home/partners-section";
import { ResearchBand } from "@/features/home/research-band";
import { StatsBand } from "@/features/home/stats-band";
import { Testimonials } from "@/features/home/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <AboutIntro />
      <FacultiesSection />
      <AdmissionsSection />
      <ResearchBand />
      <NewsSection />
      <Testimonials items={homeContent.testimonials} />
      <PartnersSection />
      <CtaBand />
    </>
  );
}
