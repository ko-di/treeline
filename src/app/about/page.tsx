/**
 * /about — Studio K's stance, the moat said honestly, contact.
 *
 * Sections (no overlap with home or /how-it-works):
 *   - Page hero — short framing
 *   - About — Studio K stance + the moat + contact
 *   - Footer
 */

import Link from "next/link";
import { About, Footer } from "@/components/sections";

export const metadata = {
  title: "About — forest-kit",
  description:
    "Who built forest-kit. The moat said honestly — what ships free, what stays private, why the gap is structural rather than marketing.",
};

export default function AboutPage() {
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
            <span className="t-muted">about</span>
          </div>

          <span className="accent-bar" aria-hidden="true" />

          <h1 className="t-display mb-8">About.</h1>

          <p className="t-body t-muted max-w-[60ch]">
            Who built this, why it exists, and the honest position on the
            kit, the moat, and how to reach out.
          </p>
        </div>
      </section>

      <About />
      <Footer />
    </main>
  );
}
