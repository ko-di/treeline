import Link from "next/link";

/**
 * Top navigation bar.
 *
 * Single thin row, hairline-bordered. forest-kit mark on the left links to
 * home; three text links on the right. No logo, no buttons, no chrome.
 *
 * Mounted in layout.tsx so it appears on every page.
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

        <nav className="flex items-center gap-6">
          <Link
            href="/how-it-works"
            className="underline decoration-1 underline-offset-4 hover:decoration-2"
          >
            How it works
          </Link>
          <Link
            href="/about"
            className="underline decoration-1 underline-offset-4 hover:decoration-2"
          >
            About
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
