import Link from "next/link";
import { ArrowRight, Calendar, Newspaper, Tag } from "lucide-react";
import { Carousel } from "@/components/ui/carousel";
import { ExampleBadge, ImagePlaceholder } from "@/components/ui/placeholders";
import { SectionHeading } from "@/components/ui/section-heading";
import { formatDate } from "@/lib/format";
import { homeContent } from "./content";

export function NewsSection() {
  const news = homeContent.news;

  return (
    <section aria-labelledby="news-title" className="bg-page py-20 sm:py-24">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading id="news-title" eyebrow="Latest Updates" title="News & Events" align="left" />
          <Link href="/news" className="inline-flex items-center gap-2 font-semibold text-brand-800 hover:gap-3">
            View All News <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>

        <div className="mt-12">
          {news.length > 0 ? (
            <Carousel label="Latest news and events">
              {news.map((item) => (
                <li
                  key={item.title}
                  className="group relative flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface shadow-[var(--shadow-card)] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                >
                  <div className="relative">
                    <ImagePlaceholder label="News photo pending" className="h-48" />
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-brand-800">
                      <Tag aria-hidden="true" size={12} /> {item.category}
                    </span>
                    {item.example && <ExampleBadge className="absolute top-3 right-3" />}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="flex items-center gap-1.5 text-sm text-muted">
                      <Calendar aria-hidden="true" size={15} />
                      <time dateTime={item.date}>{formatDate(item.date)}</time>
                    </p>
                    <h3 className="mt-2 text-lg leading-snug font-bold">
                      <Link href={item.href} className="after:absolute after:inset-0">
                        {item.title}
                      </Link>
                    </h3>
                    <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted">{item.summary}</p>
                    <span aria-hidden="true" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 group-hover:gap-2">
                      Read More <ArrowRight size={16} />
                    </span>
                  </div>
                </li>
              ))}
            </Carousel>
          ) : (
            <div className="rounded-[var(--radius-card)] border border-dashed border-line bg-surface p-10 text-center">
              <Newspaper aria-hidden="true" size={36} className="mx-auto text-brand-600" />
              <p className="mt-4 font-semibold text-brand-900">No news has been published yet.</p>
              <p className="mt-1 text-sm text-muted">News, announcements and events will appear here once published.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
