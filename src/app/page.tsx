export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-6 px-6 py-16">
      <p className="text-sm font-semibold tracking-widest text-gu-green uppercase">Development build</p>
      <h1 className="text-4xl font-bold text-gu-green-deep sm:text-5xl">Galkayo University Website Project</h1>
      <div className="h-1 w-20 rounded bg-gu-gold" aria-hidden="true" />
      <p className="text-lg text-gu-muted">
        This is the development foundation for the official Galkayo University website and content management
        system. No institutional content has been published yet; all university information will be added and
        approved by Galkayo University before launch.
      </p>
    </main>
  );
}
