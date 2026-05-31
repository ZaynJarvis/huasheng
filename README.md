# HuaSheng Metal Website

Official website for Guangzhou HuaSheng Metal Materials Co., Ltd.

Live site: <https://hua-sheng.org>

HuaSheng Metal is a Guangzhou-based manufacturer of bus shelters, advertising
light boxes, stainless steel structures, metal kiosks, and precision metal
OEM/ODM products. The site is optimized as a crawlable static company profile
for search engines and generative answer engines.

## Company Keywords

- Bus shelter manufacturer in China
- Advertising light box manufacturer
- Public transit shelter supplier
- Street furniture manufacturer
- Stainless steel structure fabrication
- Precision metal OEM / ODM manufacturing
- Guangzhou metal fabrication
- ISO 9001 metal manufacturing

## Site Pages

- `/` — company homepage and buyer-facing summary
- `/about` — company history and verified company facts
- `/capabilities` — fabrication workflow, equipment, and workshops
- `/projects` — bus shelter, public infrastructure, MTR, and OEM project cases
- `/quality` — ISO 9001, DMAIC, IQC/IPQC/FQC, certifications, and patents
- `/contact` — quotation and project enquiry details
- `/products/bus-shelters/` — bus shelter product landing page
- `/products/advertising-light-boxes/` — outdoor light box and MUPI landing page
- `/products/metal-kiosks/` — public kiosk and booth landing page
- `/products/precision-metal-oem/` — OEM/ODM metal manufacturing landing page
- `/llms.txt` and `/llms-full.txt` — LLM-readable company facts for GEO

## Local Development

```sh
npm run build:seo
npm start
```

The server listens on `PORT` when provided, or `3000` by default. Site assets
live in `public/`.

`npm run build:seo` regenerates the crawlable route HTML, sitemap, robots file,
web manifest, LLM facts files, Cloudflare Pages headers, and redirects from
`scripts/seo-data.mjs`.

The `cloudflare/huasheng-site-proxy.js` worker mirrors the production
`huasheng-site-proxy` route that maps `hua-sheng.org` to the Cloudflare Pages
project and handles canonical redirects.
