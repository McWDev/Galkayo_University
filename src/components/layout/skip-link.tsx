export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only z-[100] rounded-md bg-brand-800 px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
    >
      Skip to main content
    </a>
  );
}
