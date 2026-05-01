/**
 * /how-it-works — explains the runtime architecture in plain prose.
 *
 * Aimed at someone who's read the landing page and wants to understand
 * the relationship between Claude Code, the kit's files, and their project.
 */

import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <main className="flex-1">
      <section className="section">
        <div className="shell">
          <div className="t-small mb-12 flex items-center gap-3">
            <Link href="/" className="font-mono underline decoration-1 underline-offset-4 hover:decoration-2">
              forest-kit
            </Link>
            <span className="t-muted">·</span>
            <span className="t-muted">how it works</span>
          </div>

          <h1 className="t-display mb-8">How it works.</h1>

          <p className="t-body mb-6 max-w-[62ch]">
            The kit is files in a folder. Claude Code reads them. Your repo
            holds them. There is no separate “forest-kit app” to install — only
            Claude Code (Anthropic's runtime) plus this folder of skills,
            references, and templates.
          </p>

          <p className="t-body mb-12 max-w-[62ch]">
            When you open Claude Code in a folder scaffolded from forest-kit,
            the skills in <code className="font-mono">.claude/skills/</code>{" "}
            light up as <code className="font-mono">/pack</code>,{" "}
            <code className="font-mono">/trail</code>,{" "}
            <code className="font-mono">/scout</code> and the rest. Type a
            verb; the kit takes over. Type a free-form question; Claude Code
            answers, but with the kit's voice and posture intact because every
            response reads the kit's files first.
          </p>

          <h2 className="t-h2 mb-4 mt-12">Three layers, one experience.</h2>

          <ol
            className="border-t mb-12"
            style={{ borderColor: "var(--rule)" }}
          >
            {[
              {
                title: "Claude Code (the runtime)",
                body:
                  "Anthropic's CLI / Cursor extension. The agent that reads files, writes code, runs commands. Same product you'd install for any AI coding work.",
              },
              {
                title: "forest-kit (the configuration)",
                body:
                  "A folder of skills, references, taste-layer docs, and templates. Cloned per project. Configures Claude Code into a guided workflow.",
              },
              {
                title: "Your project (the work)",
                body:
                  "The compass.json, map.md, camps/, design/decisions/, the working repo. Lives on your disk, in your git, deployed to your hosting. Yours, fully.",
              },
            ].map((l) => (
              <li
                key={l.title}
                className="border-b py-6"
                style={{ borderColor: "var(--rule)" }}
              >
                <h3 className="t-h3 mb-2">{l.title}</h3>
                <p className="t-body t-muted max-w-[62ch]">{l.body}</p>
              </li>
            ))}
          </ol>

          <h2 className="t-h2 mb-4">Memory is the file system.</h2>
          <p className="t-body t-muted mb-6 max-w-[62ch]">
            There is no hidden state. Claude doesn't “remember” the previous
            session. When you start a new session and type{" "}
            <code className="font-mono">/compass</code>, the kit reads:
          </p>
          <ul className="t-body t-muted mb-6 max-w-[62ch] space-y-1 list-disc list-inside marker:text-[var(--accent)]">
            <li>
              <code className="font-mono">compass.json</code> — vision, audience,
              beneficiary, stack
            </li>
            <li>
              <code className="font-mono">map.md</code> — current camp, ticked
              checkboxes, decisions log
            </li>
            <li>
              <code className="font-mono">camps/</code> — working files per stage
            </li>
            <li>
              <code className="font-mono">design/decisions/</code> — captured
              decisions with reasoning
            </li>
            <li>
              <code className="font-mono">research/raw/</code> — interview notes
            </li>
          </ul>
          <p className="t-body t-muted mb-12 max-w-[62ch]">
            Whatever was filed, the kit can read. Whatever wasn't, the kit
            doesn't know. That's the rule.
          </p>

          <h2 className="t-h2 mb-4">Why this is the right architecture.</h2>
          <p className="t-body t-muted mb-6 max-w-[62ch]">
            <strong className="text-foreground font-medium">Resumable.</strong>{" "}
            Close your laptop. Open it three days later. Type{" "}
            <code className="font-mono">/compass</code>. The kit knows exactly
            where you are.
          </p>
          <p className="t-body t-muted mb-6 max-w-[62ch]">
            <strong className="text-foreground font-medium">Auditable.</strong>{" "}
            Every fact the kit acts on is in a file you wrote (or watched the
            kit write). Nothing comes from a black box.
          </p>
          <p className="t-body t-muted mb-6 max-w-[62ch]">
            <strong className="text-foreground font-medium">Portable.</strong>{" "}
            Hand the folder to an agency. They get the same context you had.
            No platform lock-in, no SaaS subscription to transfer.
          </p>
          <p className="t-body t-muted mb-12 max-w-[62ch]">
            <strong className="text-foreground font-medium">Honest.</strong>{" "}
            The kit won't claim to remember something it never wrote down.
            If something matters, it's a file.
          </p>

          <p className="t-small t-muted mt-12">
            <Link
              href="/"
              className="underline decoration-1 underline-offset-4 hover:decoration-2"
            >
              ← Back to the landing page
            </Link>
            {"  ·  "}
            <Link
              href="/docs"
              className="underline decoration-1 underline-offset-4 hover:decoration-2"
            >
              Docs →
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
