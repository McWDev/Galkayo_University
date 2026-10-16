# Known issues and deferred work

Items found during task verification that are deliberately deferred to a later task.

| Found in | Issue | Planned fix |
|---|---|---|
| Task 004 | Lighthouse mobile performance 78–85 (simulated slow 4G, 4× CPU). LCP ≈ 3.5 s is render delay on the hero text, not network; TBT 320–530 ms from hydration. CLS 0. | Task 019: font-weight/subset review (note: `display: "optional"` triggers a Turbopack font-loader build error in Next 16.4.2), trim client JS (lucide icons in client nav config, carousel/testimonials), re-measure on the production host. |
| Task 004 | Lighthouse SEO 66 — only failing audit is "page is blocked from indexing". | Intentional until launch. Task 021 removes `robots: noindex`. |
| Task 004 | `npm run content:check` reports unfilled `[slots]` in content files. | GU supplies content; must report zero before launch (Task 021 checklist). |
