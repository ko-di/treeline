/**
 * /how-it-works — the deep-dive on the kit's runtime architecture.
 *
 * Sections (no overlap with home):
 *   - Page hero — short framing
 *   - HowItWorks — three numbered install steps
 *   - Studio — personas (one model, different hats)
 *   - Artifacts — what you walk away with
 *   - ForWhom — who this is for / not for
 *   - Footer
 */

import Link from "next/link";
import {
  HowItWorks,
  Studio,
  Artifacts,
  ForWhom,
  Footer,
} from "@/components/sections";

export const metadata = {
  title: "How it works — forest-kit",
  description:
    "The runtime architecture, the personas behind the verbs, the artifacts you walk away with, and who this kit is and isn't for.",
};

export default function HowItWorksPage() {
  return (
    <main className="flex-1">
      <section className="section">
        <div className="shell">
          <div className="t-small mb-12 flex items-center gap-3">
            <Link
              href="/"
              className="font-mono underline decoration-1 underline-offset-4 hover:decoration-2"
            >
              forest-kit
            </Link>
            <span className="t-muted">·</span>
            <span className="t-muted">how it works</span>
          </div>

          <span className="accent-bar" aria-hidden="true" />

          <h1 className="t-display mb-8">How it works.</h1>

          <p className="t-body t-muted max-w-[60ch]">
            The runtime architecture, in plain language. The kit is files
            in a folder. Claude Code reads them. Your repo holds them.
            Nothing leaves your machine unless you push it. Below: the
            three install steps, the studio of personas, the artifacts you
            walk away with, and who this kit is and isn't for.
          </p>
        </div>
      </section>

      <HowItWorks />
      <Studio />
      <Artifacts />
      <ForWhom />
      <Footer />
    </main>
  );
}
