import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
  test: {
    environment: "node",
    // tests/launch holds pre-launch checks, run separately with `npm run content:check`.
    include: ["tests/unit/**/*.test.ts", "tests/launch/**/*.test.ts"],
  },
});
