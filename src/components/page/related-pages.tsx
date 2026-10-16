import { LinkCards, type LinkCard } from "./link-cards";

/** "In this section" block of sibling page cards. */
export function RelatedPages({ items, title = "In this section" }: { items: LinkCard[]; title?: string }) {
  if (items.length === 0) return null;
  return (
    <section aria-labelledby="related-title" className="bg-surface py-16">
      <div className="container-page">
        <h2 id="related-title" className="mb-8 text-2xl font-bold sm:text-3xl">
          {title}
        </h2>
        <LinkCards items={items} headingLevel={3} />
      </div>
    </section>
  );
}
