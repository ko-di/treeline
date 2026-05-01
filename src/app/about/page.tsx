/**
 * /about — Studio K's stance on the kit, the moat, the thesis.
 *
 * Aimed at someone who's read the landing or how-it-works page and wants
 * to know who built this and why. Editorial, no bio fluff, no "team page"
 * vibe. Stance over biography.
 */

import Link from "next/link";

export const metadata = {
  title: "About — forest-kit",
  description:
    "Who built forest-kit, why it exists, and the honest position on the kit, the moat, and the third path between AI-refusing and AI-without-taste.",
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

          <h1 className="t-display mb-12">About.</h1>

          {/* ───────── Who built this ───────── */}

          <h2 className="t-h2 mb-4">Who built this.</h2>
          <p className="t-body mb-4 max-w-[62ch]">
            forest-kit is built by{" "}
            <a
              href="https://kodi.design"
              className="underline decoration-1 underline-offset-4 hover:decoration-2"
            >
              Studio K
            </a>{" "}
            — a small design practice run by Kodi. Solo creative direction
            for products, sites, brands, and the small businesses that
            quietly do good work without much marketing.
          </p>
          <p className="t-body t-muted mb-12 max-w-[62ch]">
            The kit is the workflow Studio K uses every day, made
            distributable. What ships here is the methodology. What stays
            private is the years of taste behind it.
          </p>

          {/* ───────── Why ───────── */}

          <h2 className="t-h2 mb-4">Why this exists.</h2>
          <p className="t-body mb-4 max-w-[62ch]">
            Design is being redefined. The two failure modes are obvious —
            refuse AI and lose ground; use AI without taste and lose the
            work itself.
          </p>
          <p className="t-body mb-4 max-w-[62ch]">
            forest-kit is built for the third path:{" "}
            <strong className="font-medium">
              scale design without losing craft.
            </strong>{" "}
            Close the gap between an idea and a real product without
            filling that gap with slop.
          </p>
          <p className="t-body t-muted mb-4 max-w-[62ch]">
            The kit is one bet on what design becomes when one person can
            carry an idea further than a team used to — and the work can
            still feel made, not generated.
          </p>
          <p className="t-body t-muted mb-12 max-w-[62ch]">
            That's the thesis. Read{" "}
            <a
              href="https://github.com/ko-di/forest-kit/blob/main/references/PURPOSE.md"
              className="underline decoration-1 underline-offset-4 hover:decoration-2"
            >
              PURPOSE.md
            </a>{" "}
            for the full statement.
          </p>

          {/* ───────── The moat, honestly ───────── */}

          <h2 className="t-h2 mb-4">The moat, honestly.</h2>
          <p className="t-body mb-4 max-w-[62ch]">
            The kit is free under MIT. Anyone can clone it, run it, fork
            it, ship things with it. The skills, the references, the trail
            — all public. There is no paid tier gating updates.
          </p>
          <p className="t-body mb-4 max-w-[62ch]">
            What's not distributed is{" "}
            <code className="font-mono">forest</code> — Studio K's private
            taste layer. Detailed motion calibrations, brand frameworks
            tuned across years of client work, specific anti-patterns and
            references. The kit detects forest at runtime if it's on your
            machine; otherwise it falls back to{" "}
            <code className="font-mono">forest-lite</code>, a deliberately
            weakened public version.
          </p>
          <p className="t-body t-muted mb-4 max-w-[62ch]">
            A stranger using forest-kit produces non-slop work. Kodi using
            forest-kit + private forest produces work no one else can
            replicate.
          </p>
          <p className="t-body t-muted mb-12 max-w-[62ch]">
            The gap between those two is the moat. It's structural, not
            marketing. The kit is good enough for serious work; the
            difference between the kit and forest is that forest took
            years to write and you don't have it.
          </p>

          {/* ───────── Reach out ───────── */}

          <h2 className="t-h2 mb-4">Reach out.</h2>
          <p className="t-body mb-4 max-w-[62ch]">
            If something in the kit doesn't work for you, if you've used it
            and want to share what came back, or if you're hiring someone
            who works this way:
          </p>
          <ul className="t-body t-muted space-y-2 mb-12 max-w-[62ch]">
            <li>
              Studio K —{" "}
              <a
                href="https://kodi.design"
                className="underline decoration-1 underline-offset-4 hover:decoration-2"
              >
                kodi.design
              </a>
            </li>
            <li>
              Source —{" "}
              <a
                href="https://github.com/ko-di/forest-kit"
                className="underline decoration-1 underline-offset-4 hover:decoration-2"
              >
                github.com/ko-di/forest-kit
              </a>
            </li>
            <li>
              Issues — open one on GitHub if something's broken or
              confusing.
            </li>
          </ul>

          <p className="t-small t-muted mt-12">
            <Link
              href="/"
              className="underline decoration-1 underline-offset-4 hover:decoration-2"
            >
              ← Back to the landing page
            </Link>
            {"  ·  "}
            <Link
              href="/how-it-works"
              className="underline decoration-1 underline-offset-4 hover:decoration-2"
            >
              How it works →
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
