import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  ASSET_VERSION,
  LASTMOD,
  SITE_URL,
  blogPages,
  canonicalUrl,
  coreKeywords,
  productPages,
  routePages,
  site,
} from "./seo-data.mjs";

const root = path.resolve(new URL("..", import.meta.url).pathname);
const publicDir = path.join(root, "public");

function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function jsonLd(data) {
  return `<script type="application/ld+json">${JSON.stringify(data, null, 2)
    .replaceAll("</", "<\\/")}</script>`;
}

function pageUrl(page) {
  return canonicalUrl(page.path);
}

function breadcrumbJsonLd(page) {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/`,
    },
  ];
  if (page.path !== "/") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: page.h1,
      item: pageUrl(page),
    });
  }
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: site.name,
    legalName: site.legalName,
    alternateName: [
      site.shortName,
      site.cnName,
      "Huasheng Metal",
      "Hua Sheng Metal",
      "广州华盛金属",
    ],
    url: SITE_URL,
    logo: site.logo,
    image: site.image,
    foundingDate: site.founded,
    description: site.description,
    email: site.email,
    telephone: site.telephone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Guangzhou",
      addressRegion: "Guangdong",
      addressCountry: "CN",
    },
    areaServed: [
      "China",
      "Middle East",
      "Europe",
      "Oceania",
      "Asia",
      "Qatar",
      "Saudi Arabia",
      "Oman",
      "Nepal",
      "New Zealand",
      "Korea",
      "Romania",
    ],
    knowsAbout: coreKeywords,
    sameAs: ["https://github.com/ZaynJarvis/huasheng"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.email,
        telephone: site.telephone,
        availableLanguage: ["English", "Chinese"],
        areaServed: "Worldwide",
      },
    ],
  };
}

function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: site.shortName,
    alternateName: [site.name, site.cnName],
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: ["en", "zh-CN"],
  };
}

function serviceJsonLd(page) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl(page)}#service`,
    name: page.h1,
    description: page.summary,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "Worldwide",
    serviceType: page.title,
    termsOfService: `${SITE_URL}/contact`,
  };
}

function faqJsonLd(page) {
  if (!page.faqs?.length) return "";
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  });
}

function projectItemListJsonLd(page) {
  if (page.key !== "cases") return "";
  const names = [
    "Beijing Olympics stainless steel shelter",
    "Shanghai Expo bus shelters",
    "Hong Kong MTR stainless steel ticket and enquiry counters",
    "Doha bus shelters",
    "Riyadh bus shelters",
    "New Zealand postal shelters",
    "Korea aluminium shelters",
    "IKEA kitchen trolley OEM",
  ];
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "HuaSheng Metal project cases",
    itemListElement: names.map((name, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name,
        creator: { "@id": `${SITE_URL}/#organization` },
      },
    })),
  });
}

function head(page) {
  const url = pageUrl(page);
  const image = page.image.startsWith("http") ? page.image : `${SITE_URL}${page.image}`;
  const isProduct = page.path.startsWith("/products/");
  const title = esc(page.title);
  const description = esc(page.description);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5" />
<base href="/" />
<meta name="theme-color" content="#f5f5f2" />
<title>${title}</title>
<meta name="description" content="${description}" />
<meta name="keywords" content="${esc(coreKeywords.join(", "))}" />
<meta name="robots" content="index, follow, max-image-preview:large" />
<link rel="canonical" href="${url}" />
<link rel="alternate" hreflang="en" href="${url}" />
<link rel="alternate" hreflang="x-default" href="${url}" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="${esc(site.shortName)}" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="${image}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${title}" />
<meta name="twitter:description" content="${description}" />
<meta name="twitter:image" content="${image}" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png?v=${ASSET_VERSION}" />
<link rel="shortcut icon" href="/favicon.ico?v=${ASSET_VERSION}" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=${ASSET_VERSION}" />
<link rel="manifest" href="/site.webmanifest" />
<link rel="preload" as="image" href="${esc(page.image)}" fetchpriority="high" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Serif+SC:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;600;700&family=Cormorant+Garamond:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="/styles.css?v=${ASSET_VERSION}" />
${jsonLd(organizationJsonLd())}
${jsonLd(webSiteJsonLd())}
${jsonLd({
    "@context": "https://schema.org",
    "@type": isProduct ? "CollectionPage" : "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    primaryImageOfPage: image,
    inLanguage: ["en", "zh-CN"],
    dateModified: LASTMOD,
  })}
${jsonLd(breadcrumbJsonLd(page))}
${jsonLd(serviceJsonLd(page))}
${faqJsonLd(page)}
${projectItemListJsonLd(page)}
</head>`;
}

function relatedLinks(page) {
  const links = page.links || page.related?.map((href) => {
    const found = [...routePages, ...productPages].find((candidate) => candidate.path === href);
    return [href, found?.h1 || href];
  }) || [];
  return links
    .map(([href, label]) => `<a class="btn btn-text" href="${esc(href)}">${esc(label)} <span class="arrow">→</span></a>`)
    .join("\n");
}

function staticBody(page, includeApp = true) {
  const image = esc(page.image);
  const bullets = page.bullets.map((item) => `<li>${esc(item)}</li>`).join("\n");
  const faqs = page.faqs?.map(([q, a]) => `
    <details class="seo-faq-item" open>
      <summary>${esc(q)}</summary>
      <p>${esc(a)}</p>
    </details>`).join("\n") || "";

  const related = relatedLinks(page);

  return `<body data-theme="clarity" data-lang="en" data-screen="${esc(page.key || page.slug || "seo")}">
  <div id="root">
    <header class="site-header scrolled">
      <div class="container-wide nav-inner">
        <a class="brand" href="/">
          <span class="brand-mark"><img src="/assets/logo.png?v=${ASSET_VERSION}" alt="HuaSheng" /></span>
          <span class="brand-text">
            <span class="a">HUASHENG</span>
            <span class="b">Est. 1989 · Guangzhou</span>
          </span>
        </a>
        <nav class="nav-links" aria-label="Primary">
          <a class="nav-link" href="/">Home</a>
          <a class="nav-link" href="/about">About</a>
          <a class="nav-link" href="/capabilities">Capabilities</a>
          <a class="nav-link" href="/projects">Projects</a>
          <a class="nav-link" href="/quality">Quality</a>
          <a class="nav-link" href="/contact">Contact</a>
        </nav>
        <div class="nav-actions">
          <a class="btn btn-primary" href="/contact">Get a Quote <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </header>
    <main class="seo-static">
      <section class="page-hero">
        <div class="container-wide">
          <div class="page-hero-grid">
            <div class="page-hero-text">
              <span class="eyebrow"><span class="dot"></span><span>${esc(page.eyebrow)}</span></span>
              <h1 class="display-xl">${esc(page.h1)}</h1>
              <p class="lede">${esc(page.summary)}</p>
              <div class="home-hero-actions">${related}</div>
            </div>
            <div class="page-hero-media">
              <div class="imgslot"><img src="${image}" alt="${esc(page.h1)}" loading="eager" fetchpriority="high" /></div>
            </div>
          </div>
        </div>
      </section>
      <section class="tight">
        <div class="container">
          <div class="section-head">
            <span class="eyebrow"><span>Verified company facts</span></span>
            <h2 class="display-l">Why buyers shortlist HuaSheng Metal</h2>
            <p class="lede">广州华盛金属材料有限公司 / Guangzhou HuaSheng Metal Materials Co., Ltd. is a Guangzhou-based metal manufacturer for bus shelters, advertising light boxes, stainless steel structures, metal kiosks, and precision metal OEM/ODM products.</p>
          </div>
          <ul class="seo-bullets">${bullets}</ul>
        </div>
      </section>
      ${faqs ? `<section><div class="container"><div class="section-head"><span class="eyebrow"><span>FAQ</span></span><h2 class="display-l">Buyer questions</h2></div><div class="seo-faq">${faqs}</div></div></section>` : ""}
    </main>
    <footer class="site-footer">
      <div class="container-wide">
        <div class="footer-grid">
          <div class="footer-col brand-col">
            <a class="brand" href="/">
              <span class="brand-mark"><img src="/assets/logo.png?v=${ASSET_VERSION}" alt="HuaSheng" /></span>
              <span class="brand-text">
                <span class="a">HUASHENG</span>
                <span class="b">Guangzhou · 1989</span>
              </span>
            </a>
            <p class="footer-tag">30 Years of Metal Craft for Public Cityscapes</p>
          </div>
          <div class="footer-col">
            <h4>Products</h4>
            <ul>
              <li><a href="/products/bus-shelters/">Bus shelters</a></li>
              <li><a href="/products/advertising-light-boxes/">Advertising light boxes</a></li>
              <li><a href="/products/metal-kiosks/">Metal kiosks</a></li>
              <li><a href="/products/precision-metal-oem/">Precision metal OEM</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>Zayn Jarvis / Manager Liu</li>
              <li>${esc(site.telephone)}</li>
              <li>${esc(site.email)}</li>
              <li>Daily 10:00-22:00 (GMT+8)</li>
              <li>Guangzhou, Guangdong, China</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 Guangzhou HuaSheng Metal Materials Co., Ltd. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  </div>

  <script>
    window.__HS_INITIAL_ROUTE = ${JSON.stringify(page.key || "")};
  </script>
${includeApp ? appScripts() : ""}
</body>
</html>
`;
}

function appScripts() {
  return `  <script src="/content.js?v=${ASSET_VERSION}"></script>
  <script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" crossorigin="anonymous"></script>
  <script type="text/babel" src="/tweaks-panel.jsx?v=${ASSET_VERSION}"></script>
  <script type="text/babel" src="/ui.jsx?v=${ASSET_VERSION}"></script>
  <script type="text/babel" src="/pages/home.jsx?v=${ASSET_VERSION}"></script>
  <script type="text/babel" src="/pages/about.jsx?v=${ASSET_VERSION}"></script>
  <script type="text/babel" src="/pages/capabilities.jsx?v=${ASSET_VERSION}"></script>
  <script type="text/babel" src="/pages/cases.jsx?v=${ASSET_VERSION}"></script>
  <script type="text/babel" src="/pages/quality.jsx?v=${ASSET_VERSION}"></script>
  <script type="text/babel" src="/pages/contact.jsx?v=${ASSET_VERSION}"></script>
  <script type="text/babel" src="/app.jsx?v=${ASSET_VERSION}" data-presets="env,react"></script>
  <script type="text/babel">window.__startApp && window.__startApp();</script>`;
}

async function writePage(page, includeApp = true) {
  const html = `${head(page)}
${staticBody(page, includeApp)}`;
  if (page.path === "/") {
    await writeFile(path.join(publicDir, "index.html"), html);
    return;
  }
  const dir = path.join(publicDir, page.path.replace(/^\/|\/$/g, ""));
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "index.html"), html);
}

function sitemap() {
  const pages = [...routePages, ...productPages].map((page) => ({
    loc: pageUrl(page),
    lastmod: LASTMOD,
    priority: page.path === "/" ? "1.0" : page.path.startsWith("/products/") ? "0.8" : "0.9",
  }));
  const blog = blogPages.map((page) => ({
    loc: canonicalUrl(page.path),
    lastmod: page.lastmod,
    priority: page.path === "/blog/" ? "0.7" : "0.6",
  }));
  const urls = [...pages, ...blog]
    .map((page) => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <priority>${page.priority}</priority>
  </url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function robots() {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

function manifest() {
  return JSON.stringify(
    {
      name: "HuaSheng Metal Materials",
      short_name: "HuaSheng",
      description: site.description,
      start_url: "/",
      scope: "/",
      display: "standalone",
      background_color: "#f5f5f2",
      theme_color: "#f5f5f2",
      lang: "en",
      icons: [
        {
          src: "/favicon-32.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          src: "/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
        {
          src: "/assets/logo.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    null,
    2
  ) + "\n";
}

function llmsTxt(full = false) {
  const pageList = [...routePages, ...productPages]
    .map((page) => `- ${page.title}: ${pageUrl(page)}\n  ${page.summary}`)
    .join("\n");
  const products = productPages
    .map((page) => `- ${page.h1}: ${page.bullets.join(" ")}`)
    .join("\n");
  const facts = [
    "Legal English name: Guangzhou HuaSheng Metal Materials Co., Ltd.",
    "Chinese name: 广州华盛金属材料有限公司.",
    "Location: Guangzhou, Guangdong, China.",
    "Group origin: 1989; dedicated metal materials company formed in 1993.",
    "Main products: bus shelters, advertising light boxes, stainless steel structures, metal kiosks, public service booths, signage, wayfinding structures, and precision metal OEM/ODM parts.",
    "Manufacturing workflow: design review, IQC, laser cutting, CNC shearing and punching, CNC bending, welding, surface treatment, powder coating, assembly, FQC, packing, container loading, and overseas installation guidance.",
    "Factory facts from site content: five workshops, 297 precision machines, 600+ frontline staff, 30 designers and engineers, and ISO 9001 quality management.",
    "Reference projects: Guangzhou modern shelters, Beijing Olympics stainless steel shelters, Shanghai Expo bus shelters, Hangzhou public bicycle stations, Hong Kong MTR counters, Doha shelters, Riyadh shelters, Nepal government facilities, New Zealand postal shelters, Oman public works, Korea aluminium shelters, Romania aluminium signage, and IKEA-related OEM metal products.",
    "Quality system: ISO 9001, DMAIC, IQC, IPQC, FQC, corrective action records, and certification documentation.",
    `Contact: ${site.email}; ${site.telephone}.`,
  ];
  return `# HuaSheng Metal Materials

${site.description}

## Key Facts
${facts.map((fact) => `- ${fact}`).join("\n")}

## Canonical Pages
${pageList}

## Product and Service Coverage
${products}

## Keywords and Entities
${coreKeywords.map((keyword) => `- ${keyword}`).join("\n")}

${full ? `## Buyer FAQ
${[...routePages, ...productPages]
  .flatMap((page) => page.faqs || [])
  .map(([q, a]) => `### ${q}\n${a}`)
  .join("\n\n")}
` : ""}
`;
}

function headers() {
  return `/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.png
  Cache-Control: public, max-age=31536000, immutable

/*.ico
  Cache-Control: public, max-age=31536000, immutable

/*.webp
  Cache-Control: public, max-age=31536000, immutable

/*.js
  Cache-Control: public, max-age=31536000, immutable

/*.jsx
  Cache-Control: public, max-age=31536000, immutable

/*.css
  Cache-Control: public, max-age=31536000, immutable

/*.html
  Cache-Control: public, max-age=0, must-revalidate

/llms.txt
  Content-Type: text/plain; charset=utf-8
  Cache-Control: public, max-age=3600

/llms-full.txt
  Content-Type: text/plain; charset=utf-8
  Cache-Control: public, max-age=3600
`;
}

function redirects() {
  return `/cases /projects 301
/products /products/bus-shelters/ 302
/products/bus-shelters /products/bus-shelters/ 301
/products/advertising-light-boxes /products/advertising-light-boxes/ 301
/products/metal-kiosks /products/metal-kiosks/ 301
/products/precision-metal-oem /products/precision-metal-oem/ 301
http://hua-sheng.org/* https://hua-sheng.org/:splat 301
https://www.hua-sheng.org/* https://hua-sheng.org/:splat 301
http://www.hua-sheng.org/* https://hua-sheng.org/:splat 301
`;
}

function notFound() {
  const page = {
    key: "404",
    path: "/404.html",
    title: "Page Not Found | HuaSheng Metal",
    description: "The requested HuaSheng Metal page was not found.",
    h1: "Page not found",
    eyebrow: "404",
    image: "/assets/huasheng/hero-bus-shelter-deployed.webp",
    summary: "This page does not exist. Return to HuaSheng Metal's homepage or browse product and project pages.",
    bullets: [
      "Bus shelters and public transit street furniture",
      "Advertising light boxes and outdoor display panels",
      "Precision metal OEM/ODM manufacturing",
    ],
    links: [["/", "Home"], ["/projects", "Projects"], ["/contact", "Contact"]],
    faqs: [],
  };
  return `${head(page)}
${staticBody(page, false)}`;
}

async function main() {
  for (const page of routePages) {
    await writePage(page, true);
  }
  for (const page of productPages) {
    await writePage(page, false);
  }
  await writeFile(path.join(publicDir, "sitemap.xml"), sitemap());
  await writeFile(path.join(publicDir, "robots.txt"), robots());
  await writeFile(path.join(publicDir, "site.webmanifest"), manifest());
  await writeFile(path.join(publicDir, "llms.txt"), llmsTxt(false));
  await writeFile(path.join(publicDir, "llms-full.txt"), llmsTxt(true));
  await writeFile(path.join(publicDir, "_headers"), headers());
  await writeFile(path.join(publicDir, "_redirects"), redirects());
  await writeFile(path.join(publicDir, "404.html"), notFound());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
