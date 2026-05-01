"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Client-only Mermaid renderer.
 *
 * Lazy-loads the mermaid library only when the component scrolls into the
 * viewport — saves ~500KB of initial JS for users who never scroll past the
 * fold. Renders the chart syntax (passed as `chart`) into a div.
 */
export function Mermaid({ chart, id }: { chart: string; id: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  // 1. Watch for the diagram entering the viewport before loading mermaid.
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // start loading slightly before it scrolls in
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // 2. Once in view, dynamically import mermaid and render.
  useEffect(() => {
    if (!inView) return;
    let cancelled = false;

    (async () => {
      const mermaid = (await import("mermaid")).default;

      // Mermaid won't accept CSS variables — feed literal hex values.
      // These must stay in sync with globals.css design tokens.
      const isDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      mermaid.initialize({
        startOnLoad: false,
        theme: "base",
        fontFamily:
          "ui-sans-serif, -apple-system, BlinkMacSystemFont, sans-serif",
        themeVariables: {
          background: "transparent",
          primaryColor: "transparent",
          primaryTextColor: isDark ? "#f4f3ee" : "#0e0e0d",
          primaryBorderColor: isDark ? "#2a2a28" : "#d8d6d0",
          lineColor: isDark ? "#2a2a28" : "#d8d6d0",
          tertiaryColor: "transparent",
        },
        flowchart: {
          curve: "basis",
          htmlLabels: true,
          padding: 16,
        },
      });

      try {
        const { svg } = await mermaid.render(id, chart);
        if (!cancelled && ref.current) {
          ref.current.innerHTML = svg;
        }
      } catch (e) {
        if (!cancelled && ref.current) {
          ref.current.innerHTML =
            '<pre class="t-small">Mermaid render failed.</pre>';
          console.error(e);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [inView, chart, id]);

  return (
    <div
      ref={ref}
      className="my-8 flex justify-center min-h-[180px] [&_svg]:max-w-full [&_svg]:h-auto"
      aria-label="forest-kit trail diagram"
    />
  );
}
