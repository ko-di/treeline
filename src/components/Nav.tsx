import Link from "next/link";

/**
 * Top navigation bar.
 *
 * Single thin row, hairline-bordered. Anchor links jump to home-page
 * sections — there are no separate routes for these. The site is
 * intentionally one long document with anchor navigation.
 *
 * /docs is intentionally not in this nav — it's a footer-linked
 * developer reference, not a marketing surface.
 */
export function Nav() {
  return (
    <header className="border-b rule-border">
      <div className="shell flex items-center justify-between py-5 t-small">
        <Link
          href="/"
          className="font-mono no-underline hover:opacity-80"
          style={{ transition: "opacity 150ms ease-out" }}
        >
          forest-kit
        </Link>

        <nav className="flex items-center gap-5 sm:gap-6">
          <Link
            href="/#refusals"
            className="underline decoration-1 underline-offset-4 hover:decoration-2"
          >
            Refusals
          </Link>
          <Link
            href="/#trail"
            className="underline decoration-1 underline-offset-4 hover:decoration-2"
          >
            Trail
          </Link>
          <Link
            href="/#studio"
            className="underline decoration-1 underline-offset-4 hover:decoration-2 hidden sm:inline"
          >
            Studio
          </Link>
          <Link
            href="/#install"
            className="underline decoration-1 underline-offset-4 hover:decoration-2"
          >
            Install
          </Link>
          <a
            href="https://github.com/ko-di/forest-kit"
            className="underline decoration-1 underline-offset-4 hover:decoration-2"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
