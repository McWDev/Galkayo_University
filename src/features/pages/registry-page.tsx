import { ArrowLeft, Clock, FileText, Mail, MapPin, MonitorSmartphone, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { breadcrumbTrail, childrenOf, parentOf, siblingsOf, type PageDef } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/button-link";
import { T } from "@/components/ui/editable-text";
import { EmptyState } from "@/components/ui/empty-state";
import { ContactStrip } from "@/components/page/contact-strip";
import { LinkCards } from "@/components/page/link-cards";
import { PageHero } from "@/components/page/page-hero";
import { RelatedPages } from "@/components/page/related-pages";

const toCards = (defs: PageDef[]) => defs.map((d) => ({ title: d.label ?? d.title, href: d.path, description: d.intro }));

function ContentBody({ page }: { page: PageDef }) {
  const parent = parentOf(page);
  const siblings = siblingsOf(page);
  return (
    <>
      <section className="bg-page py-16 sm:py-20">
        <div className="container-page">
          <EmptyState
            icon={FileText}
            title="Information will be published soon"
            action={
              <>
                <ButtonLink href="/contact">Contact us</ButtonLink>
                {parent && (
                  <ButtonLink href={parent.path} variant="outline">
                    <ArrowLeft aria-hidden="true" size={18} /> Back to {parent.label ?? parent.title}
                  </ButtonLink>
                )}
              </>
            }
          >
            <p>
              This page is being prepared. Approved information about <strong className="text-ink">{page.title}</strong> will appear here.
            </p>
          </EmptyState>
        </div>
      </section>
      <RelatedPages items={toCards(siblings)} />
    </>
  );
}

function IndexBody({ page }: { page: PageDef }) {
  const children = childrenOf(page.path);
  return (
    <section className="bg-page py-16 sm:py-20">
      <div className="container-page">
        {children.length > 0 ? (
          <LinkCards items={toCards(children)} />
        ) : (
          <EmptyState icon={FileText} title="Information will be published soon" />
        )}
      </div>
    </section>
  );
}

function ServiceBody({ page }: { page: PageDef }) {
  return (
    <section className="bg-page py-16 sm:py-20">
      <div className="container-page">
        <EmptyState
          icon={MonitorSmartphone}
          title="This service is not yet available online"
          action={<ButtonLink href="/contact">Contact the university</ButtonLink>}
        >
          <p>
            When <strong className="text-ink">{page.title}</strong> is available online, the link will be published here and in the site menu. For help in the
            meantime, please contact the university.
          </p>
        </EmptyState>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, label, value, href }: { icon: LucideIcon; label: string; value: string | null; href?: string }) {
  if (!value) return null;
  return (
    <li className="flex items-start gap-4 rounded-[var(--radius-card)] border border-line bg-surface p-6 shadow-[var(--shadow-card)]">
      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
        <Icon aria-hidden="true" size={22} />
      </span>
      <div className="min-w-0">
        <h2 className="text-sm font-semibold tracking-wider text-muted uppercase">{label}</h2>
        <p className="mt-1 text-lg font-semibold [overflow-wrap:anywhere] text-brand-900">
          {href ? (
            <a href={href} className="hover:underline">
              {value}
            </a>
          ) : (
            <T>{value}</T>
          )}
        </p>
      </div>
    </li>
  );
}

function ContactBody() {
  const { contact } = siteConfig;
  return (
    <section className="bg-page py-16 sm:py-20">
      <div className="container-page">
        <ul className="grid gap-5 sm:grid-cols-2">
          <ContactCard icon={Mail} label="Email" value={contact.email} href={contact.email ? `mailto:${contact.email}` : undefined} />
          <ContactCard icon={Phone} label="Phone" value={contact.phone} href={contact.phoneHref ? `tel:${contact.phoneHref}` : undefined} />
          <ContactCard icon={MapPin} label="Address" value={contact.address} />
          <ContactCard icon={Clock} label="Office hours" value={contact.officeHours} />
        </ul>
      </div>
    </section>
  );
}

/** Renders any registered page that doesn't yet have a dedicated route. */
export function RegistryPage({ page }: { page: PageDef }) {
  const breadcrumbs = [{ label: "Home", href: "/" }, ...breadcrumbTrail(page).map((p) => ({ label: p.label ?? p.title, href: p.path }))];
  const kind = page.kind ?? "content";

  return (
    <>
      <PageHero title={page.title} intro={page.intro} breadcrumbs={breadcrumbs} />
      {kind === "index" && <IndexBody page={page} />}
      {kind === "content" && <ContentBody page={page} />}
      {kind === "service" && <ServiceBody page={page} />}
      {kind === "contact" && <ContactBody />}
      {kind !== "contact" && <ContactStrip />}
    </>
  );
}
