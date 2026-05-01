/**
 * forest-kit landing page
 *
 * Editorial, typography-forward, monochrome plus one accent.
 * Single column. No card grids. No marketing chrome.
 *
 * Sections, top to bottom:
 *   1. Hero — position + install
 *   2. Refusal list
 *   3. The trail
 *   4. The studio (personas)
 *   5. What you get
 *   6. How it works
 *   7. Who it's for / not for
 *   8. Install / get started
 *   9. Tip — Revolut Pay link (free kit, optional gratitude)
 *  10. Footer
 */

import { Mermaid } from "@/components/Mermaid";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Refusals />
      <Trail />
      <Studio />
      <Artifacts />
      <HowItWorks />
      <ForWhom />
      <Install />
      <Tip />
      <Footer />
    </main>
  );
}

/* ─────────────────────────────────────────────────
   Section 1 · Hero
   Above-the-fold. The position in three lines.
   ───────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="section">
      <div className="shell">
        <div className="t-small mb-12 flex items-center gap-3">
          <span className="font-mono">forest-kit</span>
          <span className="t-muted">·</span>
          <span className="t-muted">a Studio K workflow</span>
        </div>

        <span className="accent-bar" aria-hidden="true" />

        <h1 className="t-display mb-8">
          Scale design without losing craft.
        </h1>

        <p className="t-body t-muted mb-4 max-w-[60ch]">
          A workflow for turning an idea into something real — a product, a
          site, a brand, a business — with a small studio of workmates beside
          you, not one assistant in front of you.
        </p>

        <p className="t-body t-muted mb-12 max-w-[60ch]">
          Built for{" "}
          <a
            href="https://claude.com/claude-code"
            className="underline decoration-1 underline-offset-4 hover:decoration-2"
          >
            Claude Code
          </a>
          . Local-first. File-based. Deliberately AI-skeptical: applies
          friction where most AI tools apply acceleration.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline">
          <pre className="cmd whitespace-normal sm:whitespace-pre">
            <code>gh repo create my-idea --template ko-di/forest-kit --clone</code>
          </pre>
          <a
            href="https://github.com/ko-di/forest-kit"
            className="t-small underline decoration-1 underline-offset-4 hover:decoration-2"
          >
            See it on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   Section 2 · What this kit refuses to do
   The most distinctive section. Friction-as-feature.
   Filters out the wrong audience in the first scroll.
   ───────────────────────────────────────────────── */

const refusals: { rule: string; reason: string }[] = [
  {
    rule: "Refuse to advance with a generic audience.",
    reason:
      "“Small businesses,” “creators,” “professionals” trigger immediate pushback. Name a real person, or the kit doesn't move.",
  },
  {
    rule: "Refuse to skip the conversations.",
    reason:
      "You can't define a product in this kit without real interviews. The kit will draft a guide, send you out, and wait for you to come back with notes.",
  },
  {
    rule: "Refuse to generate the brand mark.",
    reason:
      "Logos and wordmarks are made by hand, drawn, or hired. Not generated. The mark is where craft and care live; the kit will not put a generated one in your folder.",
  },
  {
    rule: "Refuse to ship without naming the regret.",
    reason:
      "Before /ship, the kit asks what you'll regret in three weeks. You either fix it or you accept it explicitly, in writing.",
  },
  {
    rule: "Refuse synthesis from one charismatic interview.",
    reason:
      "/gather will not declare patterns from fewer than three notes. Patterns of one or two are anecdotes — and anecdotes drive bad product decisions.",
  },
  {
    rule: "Refuse to celebrate things that haven't been earned.",
    reason:
      "No emoji bursts. No “Great job!”. The kit treats the user as a serious professional doing serious work. Praise lives in one place: after substantive engagement with a challenge.",
  },
];

function Refusals() {
  return (
    <section className="section">
      <div className="shell">
        <h2 className="t-h1 mb-4">What this kit refuses to do.</h2>
        <p className="t-body t-muted mb-12 max-w-[60ch]">
          These are the friction points. They are the kit, not bugs. If any of
          them feels wrong — if you wanted a tool that fills in the blanks for
          you — this is the wrong kit. Read on, or stop here.
        </p>

        <ul className="border-t rule-border">
          {refusals.map((r) => (
            <li
              key={r.rule}
              className="border-b rule-border py-7 grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] sm:gap-10"
            >
              <h3 className="t-h2 max-w-[28ch]">{r.rule}</h3>
              <p className="t-body t-muted max-w-[60ch]">{r.reason}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   Section 3 · The trail
   Six camps, idea to shipped. The structural backbone
   of the workflow, named once.
   ───────────────────────────────────────────────── */

const trailDiagram = `
flowchart LR
    Start([ idea ]) --> C1[Intake]
    C1 --> C2[Discover]
    C2 --> C3[Define]
    C3 --> C4[Design]
    C4 --> C5[Build]
    C5 --> C6[Ship]
    C6 --> End([ summit ])

    classDef camp fill:transparent,stroke:#6b6b67,stroke-width:1.5px,color:#0e0e0d,padding:8px
    classDef edge fill:transparent,stroke:#b8682a,color:#b8682a,stroke-width:1.5px

    class C1,C2,C3,C4,C5,C6 camp
    class Start,End edge
`;

const camps: { name: string; line: string }[] = [
  {
    name: "Intake",
    line: "Capture the idea, the constraint, the why-now. The trail's gate — who is this for, and is the problem real for someone other than you.",
  },
  {
    name: "Discover",
    line: "Research the audience and the problem. Real conversations, not synthetic ones. The kit drafts an interview guide and sends you out.",
  },
  {
    name: "Define",
    line: "Narrow to a specific product. Write the PRD. Cut what doesn't belong in v1.",
  },
  {
    name: "Design",
    line: "Brand voice, visual direction, key flows. Tokens in one file; rationale in the next.",
  },
  {
    name: "Build",
    line: "Implement. Standard Claude Code engineering — the kit keeps the constraints visible while you code.",
  },
  {
    name: "Ship",
    line: "Quality, commit, push, deploy. Verification at the summit, then a deliberately empty reflection section to come back to in 90 days.",
  },
];

function Trail() {
  return (
    <section className="section">
      <div className="shell">
        <h2 className="t-h1 mb-4">The trail.</h2>
        <p className="t-body t-muted mb-8 max-w-[60ch]">
          Six camps from idea to shipped. At every camp, the kit checks
          whether the work still serves a real person. If you can't name them,
          the camp doesn't close.
        </p>

        <Mermaid id="trail" chart={trailDiagram} />

        <ol className="mt-12 border-t rule-border">
          {camps.map((c, i) => (
            <li
              key={c.name}
              className="border-b rule-border py-6 grid gap-2 sm:grid-cols-[6rem_minmax(0,1fr)] sm:gap-10"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono t-small t-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="t-h3">{c.name}</h3>
              </div>
              <p className="t-body t-muted max-w-[60ch]">{c.line}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   Section 4 · The studio
   The personas — surfaced quietly. Each verb wears a
   different hat. The voice shifts because the work shifts.
   ───────────────────────────────────────────────── */

const personas: { verb: string; persona: string }[] = [
  {
    verb: "/scout",
    persona:
      "The researcher with taste — warm, allergic to leading questions.",
  },
  {
    verb: "/sketch",
    persona:
      "The senior design director — observant, decisive, systematic.",
  },
  {
    verb: "/gather",
    persona:
      "The synthesis researcher — biased against confirmation.",
  },
  {
    verb: "/rationale",
    persona:
      "The careful witness who records, doesn't gloss.",
  },
  {
    verb: "/ship",
    persona:
      "The careful engineer who ships clean, not fast.",
  },
  {
    verb: "/handoff",
    persona:
      "The careful packager who assumes the receiver never speaks to you again.",
  },
];

function Studio() {
  return (
    <section className="section">
      <div className="shell">
        <h2 className="t-h1 mb-4">The studio.</h2>
        <p className="t-body t-muted mb-4 max-w-[60ch]">
          Each verb wears a different hat. The voice shifts because the work
          shifts. You'll feel it across camps — the researcher arrives at
          Camp 2, the design director at Camp 4, the engineer at Camp 5.
        </p>
        <p className="t-body t-muted mb-12 max-w-[60ch]">
          The kit runs on one model. The personas are constraints on voice
          and posture, enforced inside each skill. Different hats, same
          model, honestly named.
        </p>

        <ul className="border-t rule-border">
          {personas.map((p) => (
            <li
              key={p.verb}
              className="border-b rule-border py-5 grid gap-2 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-10 sm:items-baseline"
            >
              <code
                className="font-mono"
                style={{ color: "var(--accent)", fontSize: "var(--type-body)" }}
              >
                {p.verb}
              </code>
              <p className="t-body t-muted max-w-[55ch]">{p.persona}</p>
            </li>
          ))}
        </ul>

        <p className="t-small t-muted mt-6">
          The full set is in{" "}
          <a
            href="https://github.com/ko-di/forest-kit/blob/main/NAMING.md"
            className="underline decoration-1 underline-offset-4 hover:decoration-2"
          >
            NAMING.md
          </a>
          .
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   Section 5 · What you get
   The artifacts on disk at the end of the trail.
   No SaaS, no platform lock-in. You leave with the work.
   ───────────────────────────────────────────────── */

const artifacts: { path: string; what: string }[] = [
  {
    path: "compass.json",
    what: "Vision, audience, product, feeling, stack, beneficiary. The project's North Star — single file, schema-versioned.",
  },
  {
    path: "map.md",
    what: "Six camps with progress, decisions, current state. Mermaid diagram of the trail. The state-of-the-world.",
  },
  {
    path: "camps/<n>-*/",
    what: "Working files per stage — research notes, drafts, sketches, the captured idea, the PRD.",
  },
  {
    path: "design/decisions/",
    what: "One file per significant decision, with reasoning, alternatives considered, and reversibility.",
  },
  {
    path: "research/raw/",
    what: "Raw interview notes and observations, before synthesis. The actual conversations, not summaries.",
  },
  {
    path: "SUMMIT.md",
    what: "Compiled summary at trail completion, ending in a deliberately empty three-month reflection section.",
  },
  {
    path: "the working repo",
    what: "If you walked Build and Ship, the actual product code. Yours, in your repo, deployed to your hosting.",
  },
];

function Artifacts() {
  return (
    <section className="section">
      <div className="shell">
        <h2 className="t-h1 mb-4">What you get when you're done.</h2>
        <p className="t-body t-muted mb-12 max-w-[60ch]">
          A folder of business documents and a working repo. Reviewable at
          any camp. You can stop, hand it off, or keep walking. Either way,
          you leave with the work — not a SaaS subscription.
        </p>

        <ul className="border-t rule-border">
          {artifacts.map((a) => (
            <li
              key={a.path}
              className="border-b rule-border py-5 grid gap-2 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-10 sm:items-baseline"
            >
              <code
                className="font-mono"
                style={{ color: "var(--accent)" }}
              >
                {a.path}
              </code>
              <p className="t-body t-muted max-w-[55ch]">{a.what}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   Section 6 · How it works
   The runtime architecture, in plain language. Three steps.
   ───────────────────────────────────────────────── */

const steps: { n: string; title: string; body: string; cmd?: string }[] = [
  {
    n: "01",
    title: "Install Claude Code.",
    body: "Anthropic's runtime. The agent that reads files, writes code, runs commands. The kit runs inside it; there is no separate forest-kit app.",
    cmd: "https://claude.com/claude-code",
  },
  {
    n: "02",
    title: "Scaffold the kit.",
    body: "Clone forest-kit as a template, run setup. You get the camps, the references, the skills, the empty compass.json. One folder per project. The install command is at the bottom of the page.",
  },
  {
    n: "03",
    title: "Type /pack.",
    body: "The trail starts. The kit walks you through six camps, refuses thin work, captures decisions, and at the end hands you a folder you can ship or hand off.",
    cmd: "/pack",
  },
];

function HowItWorks() {
  return (
    <section className="section">
      <div className="shell">
        <h2 className="t-h1 mb-4">How it works.</h2>
        <p className="t-body t-muted mb-12 max-w-[60ch]">
          Three steps, no hidden infrastructure. The kit is files in a folder.
          Claude Code reads them. Your repo holds them. Nothing leaves your
          machine unless you push it.
        </p>

        <ol className="grid gap-10">
          {steps.map((s) => (
            <li
              key={s.n}
              className="grid gap-3 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-10"
            >
              <span className="font-mono t-small t-muted">{s.n}</span>
              <div>
                <h3 className="t-h3 mb-2">{s.title}</h3>
                <p className="t-body t-muted mb-3 max-w-[60ch]">{s.body}</p>
                {s.cmd?.startsWith("http") ? (
                  <a
                    href={s.cmd}
                    className="t-small underline decoration-1 underline-offset-4 hover:decoration-2"
                  >
                    {s.cmd} →
                  </a>
                ) : s.cmd ? (
                  <code className="cmd">{s.cmd}</code>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   Section 7 · Who it's for / not for
   The filter, said plainly. Two short columns.
   ───────────────────────────────────────────────── */

const forList: string[] = [
  "Solo founders turning an idea into something real.",
  "Designers who code — comfortable in Cursor or terminal.",
  "Small studios that ship one good thing at a time.",
  "Independents who'd rather hand a folder to a client than a SaaS login.",
  "People who want a workflow that holds the line.",
];

const notForList: string[] = [
  "Anyone looking to ship as much as possible as fast as possible.",
  "Hobbyists collecting AI tools to try this weekend.",
  "Teams that want a SaaS dashboard and a billing portal.",
  "Anyone who wants the AI to fill in the blanks for them.",
  "People who don't want to be challenged on the work.",
];

function ForWhom() {
  return (
    <section className="section">
      <div className="shell">
        <h2 className="t-h1 mb-12">Who this is for.</h2>

        <div className="grid gap-12 sm:grid-cols-2 sm:gap-16">
          <div>
            <h3 className="t-h3 mb-6">For</h3>
            <ul className="space-y-4">
              {forList.map((line) => (
                <li
                  key={line}
                  className="t-body max-w-[40ch] pl-4 border-l"
                  style={{ borderColor: "var(--accent)" }}
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="t-h3 mb-6 t-muted">Not for</h3>
            <ul className="space-y-4">
              {notForList.map((line) => (
                <li
                  key={line}
                  className="t-body t-muted max-w-[40ch] pl-4 border-l rule-border"
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="t-body t-muted mt-16 max-w-[60ch]">
          If you read those columns and the wrong one felt right — close the
          tab. The kit's friction will frustrate you. There's no shame in
          that; it's just the wrong tool.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   Section 8 · Install
   The conversion. Three commands. Copyable. No hand-holding.
   ───────────────────────────────────────────────── */

function Install() {
  return (
    <section className="section">
      <div className="shell">
        <h2 className="t-h1 mb-4">Install.</h2>
        <p className="t-body t-muted mb-12 max-w-[60ch]">
          You need Claude Code (or Cursor with the Claude Code extension)
          and Node 20+. The <code className="font-mono">gh</code> CLI is
          optional — if you don't have it, the alternative is below.
        </p>

        <div className="space-y-10">
          <div>
            <h3 className="t-small t-muted mb-3 uppercase tracking-wider">
              With <code className="font-mono">gh</code> (recommended)
            </h3>
            <pre className="terminal">{`gh repo create my-idea --template ko-di/forest-kit --clone
cd my-idea
./scripts/setup.sh`}</pre>
          </div>

          <div>
            <h3 className="t-small t-muted mb-3 uppercase tracking-wider">
              Without <code className="font-mono">gh</code>
            </h3>
            <pre className="terminal">{`git clone https://github.com/ko-di/forest-kit.git my-idea
cd my-idea && rm -rf .git && git init
./scripts/setup.sh --reset`}</pre>
          </div>

          <div>
            <h3 className="t-small t-muted mb-3 uppercase tracking-wider">
              Then
            </h3>
            <pre className="terminal">{`# open the folder in Cursor or run claude in the terminal
/pack`}</pre>
          </div>
        </div>

        <p className="t-body t-muted mt-12 max-w-[60ch]">
          Read{" "}
          <a
            href="https://github.com/ko-di/forest-kit/blob/main/references/PURPOSE.md"
            className="underline decoration-1 underline-offset-4 hover:decoration-2"
          >
            PURPOSE.md
          </a>{" "}
          before you start. The kit is opinionated; the document explains
          why.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   Section 9 · Tip
   The kit is MIT-free. This is the optional thank-you link.
   Direct Revolut Pay → Studio K's pot. No paywall, no chrome.
   ───────────────────────────────────────────────── */

function Tip() {
  return (
    <section className="section">
      <div className="shell">
        <h2 className="t-h2 mb-4">If it earned its keep.</h2>
        <p className="t-body t-muted mb-6 max-w-[60ch]">
          forest-kit is free under MIT. There's no paywall, no upsell, no
          “pro tier” gating updates. If the kit saved you time or sharpened
          something you were building, you can leave a tip — entirely
          optional, anonymous, no follow-up.
        </p>
        <a
          href="https://revolut.me/kdimakos/pocket/CUxQ83rl98"
          className="cmd-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tip the work →
        </a>
        <p className="t-small t-muted mt-6 max-w-[60ch]">
          Tips go to a Studio K pot, not a corporate revenue line. Updates
          ship as they're built — paid or not.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   Section 10 · Footer
   License, source, Studio K mention, secondary nav.
   ───────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="border-t rule-border">
      <div className="shell py-12">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-16">
          <div>
            <p className="font-mono t-small mb-4">forest-kit</p>
            <p className="t-small t-muted max-w-[40ch]">
              A workflow built by{" "}
              <a
                href="https://kodi.design"
                className="underline decoration-1 underline-offset-4 hover:decoration-2"
              >
                Studio K
              </a>
              . Open source under MIT. The kit runs locally; nothing is
              tracked, nothing is sent anywhere unless you push it.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-4 t-small">
            <div className="space-y-2">
              <p className="t-muted uppercase tracking-wider">Read</p>
              <a
                href="/how-it-works"
                className="block underline decoration-1 underline-offset-4 hover:decoration-2"
              >
                How it works
              </a>
              <a
                href="/docs"
                className="block underline decoration-1 underline-offset-4 hover:decoration-2"
              >
                Docs
              </a>
            </div>
            <div className="space-y-2">
              <p className="t-muted uppercase tracking-wider">Source</p>
              <a
                href="https://github.com/ko-di/forest-kit"
                className="block underline decoration-1 underline-offset-4 hover:decoration-2"
              >
                GitHub
              </a>
              <a
                href="https://revolut.me/kdimakos/pocket/CUxQ83rl98"
                target="_blank"
                rel="noopener noreferrer"
                className="block underline decoration-1 underline-offset-4 hover:decoration-2"
                style={{ color: "var(--accent)" }}
              >
                Tip the work
              </a>
              <a
                href="https://github.com/ko-di/forest-kit/blob/main/LICENSE"
                className="block underline decoration-1 underline-offset-4 hover:decoration-2"
              >
                MIT License
              </a>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}
