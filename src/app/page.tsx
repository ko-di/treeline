/**
 * Home — /
 *
 * Lean and conversion-focused. No overlap with sub-pages.
 *
 * Sections:
 *   1. Hero — position + install + links to How it works / About
 *   2. Refusals — the filter (most distinctive section, kills wrong audience)
 *   3. Trail — the kit's structural pitch (six camps + Mermaid diagram)
 *   4. Install — the conversion
 *   5. Tip — optional gratitude
 *   6. Footer
 *
 * Personas, artifacts, who-it's-for, how-it-works step-by-step → /how-it-works
 * Studio K stance, the moat, contact → /about
 * Developer reference manifest → /docs
 */

import {
  Hero,
  Refusals,
  Trail,
  Install,
  Tip,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Refusals />
      <Trail />
      <Install />
      <Tip />
      <Footer />
    </main>
  );
}
