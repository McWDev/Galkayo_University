import type { Metadata } from "next";
import { AboutIntro } from "@/features/home/about-intro";
import { AdmissionsSection } from "@/features/home/admissions-section";
import { CtaBand } from "@/features/home/cta-band";
import { getHomeContent } from "@/features/home/data";
import { FacultiesSection } from "@/features/home/faculties-section";
import { GraduateSchool } from "@/features/home/graduate-school";
import { Hero } from "@/features/home/hero";
import { NewsSection } from "@/features/home/news-section";
import { OdlSection } from "@/features/home/odl-section";
import { PartnersSection } from "@/features/home/partners-section";
import { StatsBand } from "@/features/home/stats-band";
import { Testimonials } from "@/features/home/testimonials";

export const metadata: Metadata = {
  title: { absolute: "Galkayo University" },
  alternates: { canonical: "/" },
};

// Section order follows the reference site. Data comes from getHomeContent() (content file today, CMS later).
export default async function HomePage() {
  const content = await getHomeContent();
  return (
    <>
      <Hero hero={content.hero} />
      <StatsBand stats={content.stats} />
      <AboutIntro about={content.about} />
      <FacultiesSection faculties={content.faculties} />
      <AdmissionsSection admissions={content.admissions} />
      <GraduateSchool gs={content.graduateSchool} />
      <OdlSection odl={content.odl} />
      <NewsSection news={content.news} />
      <Testimonials eyebrow={content.testimonials.eyebrow} title={content.testimonials.title} items={content.testimonials.items} />
      <PartnersSection partners={content.partners} />
      <CtaBand cta={content.cta} />
    </>
  );
}
