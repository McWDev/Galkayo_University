import { PublicShell } from "@/components/layout/public-shell";
import PublicNotFound from "./(public)/not-found";

/** Global 404 for any URL outside registered routes, shown inside the normal site layout. */
export default function NotFound() {
  return (
    <PublicShell>
      <PublicNotFound />
    </PublicShell>
  );
}
