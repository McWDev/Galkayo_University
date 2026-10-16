import { T } from "@/components/ui/editable-text";
import { Breadcrumb, type Crumb } from "./breadcrumb";

type PageHeroProps = {
  title: string;
  intro?: string;
  breadcrumbs: Crumb[];
};

/** Inner-page banner (reference layout): breadcrumb, gold rule, page title and subtitle on brand green. */
export function PageHero({ title, intro, breadcrumbs }: PageHeroProps) {
  return (
    <section aria-labelledby="page-title" className="on-dark relative isolate overflow-hidden bg-brand-900">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-800 via-brand-900 to-brand-950" />
      <div aria-hidden="true" className="bg-dots absolute inset-0 -z-10 opacity-50" />
      <div aria-hidden="true" className="absolute -bottom-24 -left-24 -z-10 size-72 rounded-full border border-white/10" />
      <div aria-hidden="true" className="absolute -top-28 -right-28 -z-10 size-96 rounded-full border border-gold-400/20" />

      <div className="container-page py-14 sm:py-20">
        <Breadcrumb items={breadcrumbs} />
        <span aria-hidden="true" className="mt-6 block h-1 w-12 rounded-full bg-gold-400" />
        <h1 id="page-title" className="mt-5 max-w-4xl text-4xl font-bold text-white sm:text-5xl">
          <T>{title}</T>
        </h1>
        {intro && (
          <p className="mt-4 max-w-2xl text-lg text-on-dark">
            <T>{intro}</T>
          </p>
        )}
      </div>
    </section>
  );
}
