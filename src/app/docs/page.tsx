/**
 * /docs — stub page.
 *
 * Detailed docs live in the kit's repo (NAMING.md, references/*).
 * This page collects links to them and adds a short summary.
 *
 * Full standalone docs site is deferred to a later session.
 */

import Link from "next/link";

export default function DocsPage() {
  return (
    <main className="flex-1">
      <section className="section">
        <div className="shell">
          <div className="t-small mb-12 flex items-center gap-3">
            <Link href="/" className="font-mono underline decoration-1 underline-offset-4 hover:decoration-2">
              forest-kit
            </Link>
            <span className="t-muted">·</span>
            <span className="t-muted">docs</span>
          </div>

          <h1 className="t-display mb-8">Docs.</h1>

          <p className="t-body t-muted mb-12 max-w-[60ch]">
            The kit's full documentation lives in the repo as readable
            Markdown. Each file is a single source of truth for one part of
            the system.
          </p>

          <ul
            className="border-t"
            style={{ borderColor: "var(--rule)" }}
          >
            {[
              {
                file: "NAMING.md",
                href: "https://github.com/ko-di/forest-kit/blob/main/NAMING.md",
                desc:
                  "Vocabulary. The thirteen verbs, the artifacts, the personas, the metaphor.",
              },
              {
                file: "references/PURPOSE.md",
                href: "https://github.com/ko-di/forest-kit/blob/main/references/PURPOSE.md",
                desc: "Why the kit exists. AI-skeptical. The position.",
              },
              {
                file: "references/QUESTIONING.md",
                href: "https://github.com/ko-di/forest-kit/blob/main/references/QUESTIONING.md",
                desc:
                  "How questions are asked. Four modes, three style settings, echo rules.",
              },
              {
                file: "references/CHALLENGE.md",
                href: "https://github.com/ko-di/forest-kit/blob/main/references/CHALLENGE.md",
                desc:
                  "When the kit pushes back. Nine structural challenges plus a signal-driven library.",
              },
              {
                file: "references/TEXTURE.md",
                href: "https://github.com/ko-di/forest-kit/blob/main/references/TEXTURE.md",
                desc: "How moments earn weight. Linear-grade. Never celebratory.",
              },
              {
                file: "references/BRIDGES.md",
                href: "https://github.com/ko-di/forest-kit/blob/main/references/BRIDGES.md",
                desc:
                  "When the kit sends you out. Real interviews, Figma, infrastructure.",
              },
              {
                file: "forest-lite/",
                href: "https://github.com/ko-di/forest-kit/tree/main/forest-lite",
                desc:
                  "Public-safe taste fallback — DESIGN, BRAND, MOTION, STACK, INSPIRATIONS.",
              },
              {
                file: ".claude/skills/",
                href: "https://github.com/ko-di/forest-kit/tree/main/.claude/skills",
                desc:
                  "The thirteen skill prompts. One folder per verb.",
              },
            ].map((d) => (
              <li
                key={d.file}
                className="border-b py-5 grid gap-2 sm:grid-cols-[14rem_minmax(0,1fr)] sm:gap-10 sm:items-baseline"
                style={{ borderColor: "var(--rule)" }}
              >
                <a
                  href={d.href}
                  className="font-mono"
                  style={{ color: "var(--accent)" }}
                >
                  {d.file}
                </a>
                <p className="t-body t-muted">{d.desc}</p>
              </li>
            ))}
          </ul>

          <p className="t-small t-muted mt-12">
            <Link
              href="/"
              className="underline decoration-1 underline-offset-4 hover:decoration-2"
            >
              ← Back to the landing page
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
