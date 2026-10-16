import Image from "next/image";
import { Info, UserRound } from "lucide-react";
import { aboutContent } from "@/content/about";
import { T } from "@/components/ui/editable-text";
import { ContactStrip } from "@/components/page/contact-strip";
import { PageHero } from "@/components/page/page-hero";
import { RelatedPages } from "@/components/page/related-pages";
import { heroFor, metadataFor, siblingCardsFor } from "@/features/pages/registry-helpers";

const PATH = "/about/staff";
export const metadata = metadataFor(PATH);

export default function StaffPage() {
  const staff = aboutContent.staff;

  return (
    <>
      <PageHero {...heroFor(PATH)} />
      <section className="bg-page py-20 sm:py-24">
        <div className="container-page">
          <p className="mx-auto flex max-w-3xl items-start gap-3 rounded-xl border border-line bg-surface px-5 py-4 text-sm text-muted">
            <Info aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-brand-600" />
            <T>{staff.privacyNote}</T>
          </p>

          {staff.groups.map((group) => {
            const id = `staff-${group.title.toLowerCase().replace(/\W+/g, "-")}`;
            return (
              <section key={group.title} aria-labelledby={id} className="mt-16">
                <h2 id={id} className="text-2xl font-bold sm:text-3xl">
                  <T>{group.title}</T>
                </h2>
                <span aria-hidden="true" className="mt-3 block h-1 w-12 rounded-full bg-gold-400" />
                <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {group.people.map((person, i) => (
                    <li key={i} className="overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface text-center shadow-[var(--shadow-card)]">
                      {person.image ? (
                        <Image src={person.image} alt={person.name} width={400} height={400} className="aspect-square w-full object-cover" />
                      ) : (
                        <div className="flex aspect-square items-center justify-center bg-brand-50 text-brand-600">
                          <UserRound aria-hidden="true" size={72} strokeWidth={1.25} />
                        </div>
                      )}
                      <div className="p-5">
                        <h3 className="text-lg font-bold">
                          <T>{person.name}</T>
                        </h3>
                        <p className="mt-1 text-sm font-semibold text-brand-700">
                          <T>{person.role}</T>
                        </p>
                        <p className="mt-1 text-sm text-muted">
                          <T>{person.unit}</T>
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </section>
      <RelatedPages items={siblingCardsFor(PATH)} />
      <ContactStrip />
    </>
  );
}
