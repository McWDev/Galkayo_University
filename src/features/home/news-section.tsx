import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { Carousel } from "@/components/ui/carousel";
import { T } from "@/components/ui/editable-text";
import { ImagePlaceholder } from "@/components/ui/placeholders";
import { SectionHeading } from "@/components/ui/section-heading";
import { formatDate } from "@/lib/format";
import type { HomeContent } from "./data";

export function NewsSection({ news }: { news: HomeContent["news"] }) {
  if (news.items.length === 0) return null;

  return (
    <section aria-labelledby="news-title" className="bg-page py-20 sm:py-24">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading id="news-title" eyebrow={news.eyebrow} title={news.title} align="left" />
          <Link href={news.viewAll.href} className="inline-flex items-center gap-2 font-semibold text-brand-800 hover:gap-3">
            <T>{news.viewAll.label}</T> <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>

        <div className="mt-12">
          <Carousel label="Latest news and events">
            {news.items.map((item, i) => (
              <li
                key={`${item.title}-${i}`}
                className="group relative flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface shadow-[var(--shadow-card)] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              >
                <div className="relative">
                  {item.image ? (
                    <Image src={item.image} alt="" width={800} height={400} className="h-48 w-full object-cover" />
                  ) : (
                    <ImagePlaceholder label="News photo" className="h-48" />
                  )}
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-brand-800">
                    <Tag aria-hidden="true" size={12} /> <T>{item.category}</T>
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex items-center gap-1.5 text-sm text-muted">
                    <Calendar aria-hidden="true" size={15} />
                    <time dateTime={item.date}>{formatDate(item.date)}</time>
                  </p>
                  <h3 className="mt-2 text-lg leading-snug font-bold">
                    <Link href={item.href} className="after:absolute after:inset-0">
                      <T>{item.title}</T>
                    </Link>
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted">
                    <T>{item.summary}</T>
                  </p>
                  <span aria-hidden="true" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 group-hover:gap-2">
                    Read More <ArrowRight size={16} />
                  </span>
                </div>
              </li>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
