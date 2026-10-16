import type { LucideIcon } from "lucide-react";

type EmptyStateProps = {
  icon: LucideIcon;
  title: string;
  children?: React.ReactNode;
  action?: React.ReactNode;
};

/** Neutral placeholder for content that hasn't been published yet. Never implies facts. */
export function EmptyState({ icon: Icon, title, children, action }: EmptyStateProps) {
  return (
    <div className="mx-auto max-w-2xl rounded-[var(--radius-card)] border border-dashed border-line bg-surface px-6 py-12 text-center sm:px-10">
      <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-brand-50 text-brand-700">
        <Icon aria-hidden="true" size={30} />
      </span>
      <h2 className="mt-5 text-2xl font-bold">{title}</h2>
      {children && <div className="mt-3 leading-relaxed text-muted">{children}</div>}
      {action && <div className="mt-7 flex flex-wrap justify-center gap-3">{action}</div>}
    </div>
  );
}
