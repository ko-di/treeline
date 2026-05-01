# treeline

The landing page for [forest-kit](https://github.com/ko-di/forest-kit).

A treeline is the visible edge where the forest meets open ground — the place where strangers first see the territory. This is that page.

## What's here

| Path | What it is |
|---|---|
| `/` | Landing — position, refusals, trail, studio, artifacts, install |
| `/docs` | Manifest of links to the kit's reference docs |
| `/how-it-works` | Runtime architecture in plain prose |

The kit itself lives at [github.com/ko-di/forest-kit](https://github.com/ko-di/forest-kit). This repo is the marketing surface, not the product.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **Tailwind 4** + CSS custom properties (design tokens)
- **TypeScript**
- **Mermaid** for the trail diagram
- **Geist Sans + Mono** (default Next bundle)

Editorial direction: typography-forward, monochrome plus one warm ochre accent, single column, no card grids, no marketing chrome.

## Develop

```bash
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Deploy

Auto-deploys to [Vercel](https://vercel.com) on push to `main` (once wired). Build is fully static — all three pages prerender at build time.

## License

[MIT](./LICENSE).
