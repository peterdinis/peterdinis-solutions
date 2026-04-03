# Peterdinis Solutions

Marketing / portfolio site for **Peterdinis Solutions**: **SvelteKit**, **TypeScript**, **Tailwind CSS**, and **shadcn-svelte–compatible** UI primitives (`Button`, `Card`). Fully static output for CDN hosting (e.g. Cloudflare Pages).

- i18n: **SK / CS / EN** (see `src/lib/i18n/messages.json`)
- Theme: light / dark (`localStorage`)
- Visit counter: **browser-only** (`localStorage` + session), no server

## Requirements

- [Node.js](https://nodejs.org/) 20+ recommended

## Quick start

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build (production / Cloudflare Pages)

```bash
npm ci
npm run build
```

Static site is written to **`build/`**.

Cloudflare Pages:

- **Build command:** `./build.sh` or `npm ci && npm run build`
- **Build output directory:** `build`

`static/_routes.json` and `static/_headers` are copied into the output for SPA-style fallback and caching headers.

### Deploy from your machine (Wrangler)

1. Install deps: `npm install`
2. Set `name` in `wrangler.toml` to your **Pages project name** (dashboard).
3. Log in once: `npx wrangler login`
4. Deploy: `npm run deploy` (build + upload) or `npm run pages:deploy` if `build/` is already fresh.

Override project without editing the file:

```bash
npm run build && npx wrangler pages deploy build --project-name=your-project-name
```

## More shadcn-svelte components

This repo includes `components.json` pointing at Tailwind + `src/app.css`. To add official registry components:

```bash
npx shadcn-svelte@latest add dialog
# …
```

See [shadcn-svelte](https://www.shadcn-svelte.com/).

## License

All rights reserved unless you add your own license file.
