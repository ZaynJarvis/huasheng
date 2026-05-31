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
- `/zh/` — standalone Chinese landing page for Chinese SEO, with its own
  canonical URL and `zh-CN` hreflang
- `/products/bus-shelters/` — bus shelter product landing page
- `/products/advertising-light-boxes/` — outdoor light box and MUPI landing page
- `/products/metal-kiosks/` — public kiosk and booth landing page
- `/products/precision-metal-oem/` — OEM/ODM metal manufacturing landing page
- `/blog/` — crawlable content hub for project cases and manufacturing notes
- `/blog/bus-shelter-manufacturing-process/` — process article
- `/blog/outdoor-light-box-weatherproofing/` — process article
- `/blog/ai-application-meeting/` — company improvement note
- `/llms.txt` and `/llms-full.txt` — LLM-readable company facts for GEO

## External Directory Canonical Links

The canonical website URL is `<https://hua-sheng.org>`. When account access is
available, update every controlled external directory profile to point to this
domain in the website/contact field and keep company name/address/phone
consistent.

Current known profiles:

- Legacy official website: <https://www.huasheng-metal.com/>
- Alibaba showroom: <https://gzhsgm.en.alibaba.com/>
- Made-in-China showroom: <https://gz-huasheng.en.made-in-china.com/>
- GoldSupplier profile: <https://gzhsgm.goldsupplier.com/>

LinkedIn, Google Business Profile, and Bing Places should be added to
`officialProfiles` in `scripts/seo-data.mjs` once the controlled profile URLs
are confirmed.

## Content Cadence

For ongoing SEO/GEO growth, publish one to two new project cases or process
articles per month. Add each article to `blogPages` in `scripts/seo-data.mjs`,
then run `npm run build:seo` so `/blog/`, `sitemap.xml`, and
`llms-full.txt` stay synchronized.

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

The current interactive shell still uses browser React UMD plus Babel for the
hydrated English pages. Search and answer-engine crawlability does not depend
on that runtime because every public route is generated as static HTML first.
