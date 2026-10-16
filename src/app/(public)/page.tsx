import { ButtonLink } from "@/components/ui/button-link";

// Temporary page: the full home page is built in Task 004.
export default function HomePage() {
  return (
    <section className="on-dark relative overflow-hidden bg-brand-800">
      <div className="container-page relative py-20 sm:py-28">
        <p className="text-sm font-semibold tracking-widest text-gold-400 uppercase">Development build</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold text-white sm:text-5xl">Galkayo University Website Project</h1>
        <div className="mt-6 h-1 w-20 rounded bg-gold-400" aria-hidden="true" />
        <p className="mt-6 max-w-2xl text-lg text-on-dark">
          This is the development foundation for the official Galkayo University website. No institutional content
          has been published yet; all university information will be added and approved by Galkayo University before
          launch.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/admissions" variant="gold" size="lg">
            Admissions
          </ButtonLink>
          <ButtonLink href="/academics/programmes" variant="outline-light" size="lg">
            Explore programmes
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
