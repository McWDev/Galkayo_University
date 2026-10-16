import { Award, BookOpen, GraduationCap, MapPin, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { stats, type Stat } from "./content";

const icons: Record<Stat["icon"], LucideIcon> = {
  users: Users,
  faculties: BookOpen,
  years: Award,
  campuses: MapPin,
  alumni: GraduationCap,
};

/** Key facts band. Shows "—" until GU verifies each figure; never displays invented numbers. */
export function StatsBand() {
  const pending = stats.some((s) => s.value === null);

  return (
    <section aria-label="University at a glance" className="bg-gold-400 text-brand-900">
      <div className="container-page py-10">
        <ul className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-brand-900/15">
          {stats.map((stat) => {
            const Icon = icons[stat.icon];
            return (
              <li key={stat.label} className="flex flex-col items-center px-4 text-center">
                <span className="flex size-12 items-center justify-center rounded-full bg-brand-900/10">
                  <Icon aria-hidden="true" size={22} />
                </span>
                <span className="mt-3 font-display text-4xl leading-none font-extrabold">
                  {stat.value ?? (
                    <>
                      <span aria-hidden="true">&mdash;</span>
                      <span className="sr-only">Figure pending verification</span>
                    </>
                  )}
                </span>
                <span className="mt-2 text-sm font-semibold">{stat.label}</span>
              </li>
            );
          })}
        </ul>
        {pending && <p className="mt-8 text-center text-xs font-medium text-brand-900/75">Figures will be published once verified by Galkayo University.</p>}
      </div>
    </section>
  );
}
