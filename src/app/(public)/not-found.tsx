import { Compass } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { EmptyState } from "@/components/ui/empty-state";
import { PageHero } from "@/components/page/page-hero";

export default function NotFound() {
  return (
    <>
      <PageHero
        title="Page not found"
        intro="The page you are looking for doesn't exist or may have moved."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Page not found", href: "#" },
        ]}
      />
      <section className="bg-page py-16 sm:py-20">
        <div className="container-page">
          <EmptyState
            icon={Compass}
            title="Let's get you back on track"
            action={
              <>
                <ButtonLink href="/">Go to the home page</ButtonLink>
                <ButtonLink href="/academics/programmes" variant="outline">
                  Explore programmes
                </ButtonLink>
                <ButtonLink href="/contact" variant="outline">
                  Contact us
                </ButtonLink>
              </>
            }
          >
            <p>Check the address for typing errors, or use the menu above to find what you need.</p>
          </EmptyState>
        </div>
      </section>
    </>
  );
}
