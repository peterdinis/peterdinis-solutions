# Peterdinis Solutions

Marketing / portfolio site for **Peterdinis Solutions**: Blazor Web App (.NET), Tailwind CSS, static-friendly UI with light i18n (SK / CS / EN), theme toggle, and a simple **visit counter** backed by the server.

## Requirements

- [.NET SDK 10](https://dotnet.microsoft.com/download) (or the version matching `TargetFramework` in the `.csproj`)
- [Node.js](https://nodejs.org/) (for Tailwind — `npm install`)

## Quick start

```bash
cd PeterdinisSolutions
npm install
npm run build:css
dotnet run
```

Open the URL shown in the terminal (typically `https://localhost:5xxx`).

### CSS during development

```bash
npm run watch:css
```

Run this in a second terminal while editing `wwwroot/css/input.css` or Razor/Tailwind classes so `wwwroot/app.css` stays up to date.

The project can also run `npm run build:css` automatically before MSBuild when `node_modules/tailwindcss` is present (see `PeterdinisSolutions.csproj`).

## Project layout

| Area | Role |
|------|------|
| `Components/Pages/Home.razor` | Landing sections |
| `Components/Sections/` | Hero, services, pricing, about, portfolio, **visitors**, contact |
| `Components/Layout/` | `NavHeader`, `MainLayout`, `SiteFooter` |
| `wwwroot/js/i18n.js` | Language + currency strings, `data-i18n` hydration |
| `wwwroot/js/site-ui.js` | Theme, preloader, mobile nav, scroll-to-top, **visitor API calls** |
| `wwwroot/css/input.css` | Tailwind entry + a few component hooks |
| `Services/VisitorCounterStore.cs` | Persisted visit total |

## Visitor counter

- The **Visitors** section (before contact) shows a running total.
- On each **browser tab session**, the client calls `GET /api/visitors/tick` **once** (tracked with `sessionStorage`). Further loads in the same tab use `GET /api/visitors` so the number stays in sync without double-counting refreshes.
- Totals are stored in **`App_Data/visitor-count.json`** (created automatically). That folder is listed in `.gitignore` so counts stay local per environment.
- Counts are **approximate** (bots, prefetch, and disabled storage can skew results). For analytics, consider dedicated tooling (e.g. Plausible, GA4, Application Insights).

### Deployment notes

Ensure the app process **can write** to `App_Data` under the content root (or change `VisitorCounterStore` to use a writable path / database). Read-only filesystems will fall back to an in-memory counter only for that process lifetime.

## Configuration

- **HTTPS**: Development certificate trust — `dotnet dev-certs https --trust`
- **Production**: set `ASPNETCORE_ENVIRONMENT=Production`, configure hosting (Kestrel / reverse proxy) per [ASP.NET Core docs](https://learn.microsoft.com/aspnet/core/hosting/).

## License

All rights reserved unless you add your own license file.
