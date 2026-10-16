import { Award, BookOpen, GraduationCap, MapPin, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { homeContent, type IconName } from "@/content/home";
import { T } from "@/components/ui/editable-text";

const icons: Record<IconName, LucideIcon> = {
  users: Users,
  faculties: BookOpen,
  years: Award,
  campuses: MapPin,
  alumni: GraduationCap,
};

export function StatsBand() {
  return (
    <section aria-label="University at a glance" className="bg-gold-400 text-brand-900">
      <div className="container-page py-10">
        <ul className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-brand-900/15">
          {homeContent.stats.map((stat) => {
            const Icon = icons[stat.icon];
            return (
              <li key={stat.label} className="flex flex-col items-center px-4 text-center">
                <span className="flex size-12 items-center justify-center rounded-full bg-brand-900/10">
                  <Icon aria-hidden="true" size={22} />
                </span>
                <span className="mt-3 font-display text-3xl leading-none font-extrabold sm:text-4xl">
                  <T>{stat.value}</T>
                </span>
                <span className="mt-2 text-sm font-semibold">
                  <T>{stat.label}</T>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
