import { afterEach, describe, expect, it, vi } from "vitest";
import { getSiteUrl } from "@/lib/env";

describe("getSiteUrl", () => {
  afterEach(() => vi.unstubAllEnvs());

  it("strips trailing slashes", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://example.edu.so///");
    expect(getSiteUrl()).toBe("https://example.edu.so");
  });

  it("falls back to localhost when unset", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", undefined as unknown as string);
    expect(getSiteUrl()).toBe("http://localhost:3000");
  });
});
