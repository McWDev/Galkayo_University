import { aboutContent } from "@/content/about";
import { homeContent } from "@/content/home";
import { ContactStrip } from "@/components/page/contact-strip";
import { PageHero } from "@/components/page/page-hero";
import { RelatedPages } from "@/components/page/related-pages";
import {
  AboutJumpLinks,
  CampusesSection,
  FacilitiesSection,
  GovernanceTeaser,
  HistorySection,
  PurposeSection,
  ValuesSection,
} from "@/features/about/overview-sections";
import { StatsBand } from "@/features/home/stats-band";
import { heroFor, metadataFor } from "@/features/pages/registry-helpers";
import { childrenOf } from "@/config/pages";

const PATH = "/about";
export const metadata = metadataFor(PATH);

export default function AboutPage() {
  const { overview } = aboutContent;
  const subpages = childrenOf(PATH).map((d) => ({ title: d.label ?? d.title, href: d.path, description: d.intro }));

  return (
    <>
      <PageHero {...heroFor(PATH)} />
      <AboutJumpLinks />
      <StatsBand stats={homeContent.stats} />
      <HistorySection history={overview.history} />
      <PurposeSection purpose={overview.purpose} objectives={homeContent.about.objectives} />
      <ValuesSection values={overview.values} />
      <GovernanceTeaser governance={overview.governance} />
      <CampusesSection campuses={overview.campuses} />
      <FacilitiesSection facilities={overview.facilities} />
      <RelatedPages title="More about GU" items={subpages} />
      <ContactStrip />
    </>
  );
}
