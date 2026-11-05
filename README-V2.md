# AVARA V2 — files ready to merge

This package updates the commercial positioning of AVARA without replacing the existing global design system.

## What changes

- Stronger homepage promise:
  - professional website that belongs to the client
  - Charleroi / Wallonia local positioning
  - clearer conversion-focused copy
- Business website offer remains **from €790 excl. VAT / 790 € HTVA**
- **No fixed 5-page limit**
  - project structure is defined according to the activity
  - final scope and price are confirmed before development
- Three main offers:
  1. Business website / Site vitrine
  2. E-commerce
  3. Custom business automation / Automatisation sur mesure
- Dedicated automation landing pages:
  - `/automatisation/`
  - `/en/automation/`
- New sections:
  - industries / sectors
  - ownership / no lock-in
  - Google + social + website ecosystem
  - automation explanation
  - expanded FAQ
- Contact form now includes an automation option
- Dedicated automation form reuses the existing Netlify form name `demande-projet`
  with `project-type=automatisation`, so it can stay in the existing lead flow.
- Restaurant FR/EN pages no longer mention a 5-page maximum.
- Layout language switch and `hreflang` now support automation pages.
- Sitemap configuration stays compatible; Astro will include the new automation pages automatically.

## Files to replace

- `src/layouts/Layout.astro`
- `src/pages/index.astro`
- `src/pages/en/index.astro`
- `src/pages/restaurants.astro`
- `src/pages/en/restaurants.astro`
- `astro.config.mjs` (same sitemap logic, included for completeness)

## Files to add

- `src/components/HomeV2.astro`
- `src/components/AutomationV2.astro`
- `src/pages/automatisation.astro`
- `src/pages/en/automation.astro`
- `src/styles/home-v2.css`
- `src/styles/automation.css`
- `src/styles/restaurants.css`

The old `src/styles/restaurants-en.css` can remain in the project; it is no longer imported by the updated restaurant pages.

## Do not change

Keep your existing:
- `src/styles/global.css`
- legal/privacy pages
- thank-you pages
- images in `public/images/`
- Netlify form notification configuration
- `robots.txt`

## Local verification

From:

`C:\Users\thoma\Site\site-vitrine`

run:

```powershell
npm run dev
```

Check:
- `/`
- `/en/`
- `/restaurants/`
- `/en/restaurants/`
- `/automatisation/`
- `/en/automation/`
- FR ↔ EN switch on all of the above
- home contact form
- automation form
- mobile display

Then stop the dev server and run:

```powershell
npm run build
```

Only push if the build succeeds.

## One production push

```powershell
git status
git add .
git commit -m "Expand AVARA services with custom automation and commercial V2"
git push
```

After Netlify deploys, verify:

- https://avarastudio.be/
- https://avarastudio.be/en/
- https://avarastudio.be/restaurants/
- https://avarastudio.be/en/restaurants/
- https://avarastudio.be/automatisation/
- https://avarastudio.be/en/automation/
- https://avarastudio.be/sitemap-index.xml

Then submit the homepage and `/automatisation/` for indexing in Google Search Console if you want to accelerate discovery.
