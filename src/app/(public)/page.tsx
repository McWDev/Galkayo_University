import { homeContent } from "@/content/home";
import { AboutIntro } from "@/features/home/about-intro";
import { AdmissionsSection } from "@/features/home/admissions-section";
import { CtaBand } from "@/features/home/cta-band";
import { FacultiesSection } from "@/features/home/faculties-section";
import { GraduateSchool } from "@/features/home/graduate-school";
import { Hero } from "@/features/home/hero";
import { NewsSection } from "@/features/home/news-section";
import { OdlSection } from "@/features/home/odl-section";
import { PartnersSection } from "@/features/home/partners-section";
import { StatsBand } from "@/features/home/stats-band";
import { Testimonials } from "@/features/home/testimonials";

// Section order follows the reference site. Text lives in src/content/home.ts.
export default function HomePage() {
  const { testimonials } = homeContent;
  return (
    <>
      <Hero />
      <StatsBand />
      <AboutIntro />
      <FacultiesSection />
      <AdmissionsSection />
      <GraduateSchool />
      <OdlSection />
      <NewsSection />
      <Testimonials eyebrow={testimonials.eyebrow} title={testimonials.title} items={testimonials.items} />
      <PartnersSection />
      <CtaBand />
    </>
  );
}
