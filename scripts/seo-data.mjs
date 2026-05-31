export const SITE_URL = "https://hua-sheng.org";
export const LASTMOD = "2026-05-31";
export const ASSET_VERSION = "huasheng-seo-20260531";

export const coreKeywords = [
  "bus shelter manufacturer",
  "bus stop shelter supplier",
  "smart bus shelter",
  "advertising light box manufacturer",
  "MUPI light box",
  "outdoor street furniture",
  "metal kiosk manufacturer",
  "stainless steel structure",
  "precision metal OEM",
  "metal ODM manufacturing",
  "Guangzhou metal fabrication",
  "public transit shelter",
  "公交候车亭厂家",
  "广告灯箱厂家",
  "金属 OEM 代工",
  "不锈钢工程",
];

export const site = {
  name: "Guangzhou HuaSheng Metal Materials Co., Ltd.",
  shortName: "HuaSheng Metal",
  cnName: "广州华盛金属材料有限公司",
  legalName: "Guangzhou HuaSheng Metal Materials Co., Ltd.",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo.png`,
  image: `${SITE_URL}/assets/huasheng/hero-bus-shelter-deployed.webp`,
  email: "hi@hua-sheng.org",
  telephone: "+65 8309-9012",
  address: "Guangzhou, Guangdong, China",
  founded: "1989",
  description:
    "Guangzhou HuaSheng Metal Materials is a China-based manufacturer of bus shelters, advertising light boxes, stainless steel structures, and precision metal OEM/ODM products.",
};

export const officialProfiles = [
  {
    name: "Canonical website",
    url: SITE_URL,
    label: "hua-sheng.org",
    description: "Primary crawlable company website and source of current product, project, quality, and contact facts.",
  },
  {
    name: "Legacy official website",
    url: "https://www.huasheng-metal.com/",
    label: "huasheng-metal.com",
    description: "Controlled legacy company website that should link to the new canonical domain.",
  },
  {
    name: "Alibaba showroom",
    url: "https://gzhsgm.en.alibaba.com/",
    label: "gzhsgm.en.alibaba.com",
    description: "Alibaba supplier showroom for Guangzhou HuaSheng Metal Materials.",
  },
  {
    name: "Made-in-China showroom",
    url: "https://gz-huasheng.en.made-in-china.com/",
    label: "gz-huasheng.en.made-in-china.com",
    description: "Made-in-China supplier showroom for Guangzhou HuaSheng Metal Materials.",
  },
  {
    name: "GoldSupplier profile",
    url: "https://gzhsgm.goldsupplier.com/",
    label: "gzhsgm.goldsupplier.com",
    description: "GoldSupplier profile for bus stop, light box, and retail kiosk sourcing.",
  },
  {
    name: "Website source repository",
    url: "https://github.com/ZaynJarvis/huasheng",
    label: "GitHub source",
    description: "Public source repository for the HuaSheng website implementation.",
  },
];

export const directoryUpdateChecklist = [
  {
    platform: "Legacy official website",
    url: "https://www.huasheng-metal.com/",
    action: "Add a prominent link or redirect to https://hua-sheng.org from the header, footer, contact page, and sitemap when admin access is available.",
  },
  {
    platform: "Alibaba",
    url: "https://gzhsgm.en.alibaba.com/",
    action: "Set the company website field and showroom links to https://hua-sheng.org.",
  },
  {
    platform: "Made-in-China",
    url: "https://gz-huasheng.en.made-in-china.com/",
    action: "Set the website/profile external link to https://hua-sheng.org and keep company name/address consistent.",
  },
  {
    platform: "GoldSupplier",
    url: "https://gzhsgm.goldsupplier.com/",
    action: "Set the contact/profile website link to https://hua-sheng.org.",
  },
  {
    platform: "LinkedIn",
    url: "",
    action: "When the controlled company page URL is confirmed, set its website to https://hua-sheng.org and add it to officialProfiles.",
  },
  {
    platform: "Google Business Profile",
    url: "",
    action: "Set website to https://hua-sheng.org and keep NAP fields aligned with the canonical contact page.",
  },
  {
    platform: "Bing Places",
    url: "",
    action: "Set website to https://hua-sheng.org and mirror Google Business Profile NAP fields.",
  },
];

export const routePages = [
  {
    key: "home",
    path: "/",
    title: "Bus Shelter Manufacturer in China | HuaSheng Metal Materials",
    description:
      "HuaSheng Metal is a Guangzhou manufacturer of bus shelters, advertising light boxes, stainless steel structures, and precision metal OEM/ODM products with projects in 40+ countries.",
    h1: "Bus shelter, light box, and metal OEM manufacturer in Guangzhou",
    eyebrow: "Since 1989 · Guangzhou HuaSheng Metal Materials",
    image: "/assets/huasheng/hero-bus-shelter-deployed.webp",
    summary:
      "HuaSheng designs and manufactures public transit shelters, advertising display structures, stainless steel architectural metalwork, and precision OEM/ODM metal parts from its Guangzhou production base.",
    bullets: [
      "30+ years of metal fabrication and public city furniture experience.",
      "120,000 m2 production base, five workshops, and 297 precision machines.",
      "Delivered bus shelter and public infrastructure projects across China, the Middle East, Europe, Oceania, and Asia.",
      "Long-term OEM manufacturing experience for international retail and home-furnishing supply chains.",
    ],
    links: [
      ["/capabilities", "Manufacturing capabilities"],
      ["/projects", "Project cases"],
      ["/products/bus-shelters/", "Bus shelter manufacturing"],
      ["/products/precision-metal-oem/", "Precision metal OEM"],
      ["/contact", "Request a quotation"],
    ],
    faqs: [
      [
        "What does HuaSheng manufacture?",
        "HuaSheng manufactures bus shelters, advertising light boxes, metal kiosks, stainless steel structures, and precision metal OEM/ODM products.",
      ],
      [
        "Where is HuaSheng based?",
        "HuaSheng is based in Guangzhou, Guangdong, China, with metal fabrication, welding, surface treatment, assembly, and loading capabilities.",
      ],
      [
        "Can HuaSheng support overseas projects?",
        "Yes. The company has delivered public infrastructure and metal manufacturing projects in more than 40 countries and can support container loading and overseas installation guidance.",
      ],
    ],
  },
  {
    key: "about",
    path: "/about",
    title: "About HuaSheng Metal | Guangzhou Bus Shelter & Metal Fabrication Factory",
    description:
      "Learn about HuaSheng Metal, founded in Guangzhou in 1989 and known for bus shelters, stainless steel city furniture, international OEM work, and public infrastructure projects.",
    h1: "A Guangzhou metal factory with three decades of bus shelter experience",
    eyebrow: "Company history",
    image: "/assets/huasheng/about-factory-campus.webp",
    summary:
      "HuaSheng began in Guangzhou in 1989 and formed its dedicated metal materials company in 1993. The factory grew from city bus shelters into public infrastructure, export projects, and OEM metal manufacturing.",
    bullets: [
      "1989: HuaSheng industry and trade company founded in Guangzhou.",
      "1993: HuaSheng Metal Materials established and built Guangzhou's first generation of modern bus shelters.",
      "2001: OEM relationship with IKEA begins.",
      "2008: Stainless steel bus shelter project delivered for Beijing Olympic venues.",
      "2025: New workshop expansion underway for future capacity and process upgrades.",
    ],
    links: [
      ["/capabilities", "Factory capacity"],
      ["/quality", "Quality and certifications"],
      ["/projects", "Delivered projects"],
      ["/contact", "Contact HuaSheng"],
    ],
    faqs: [
      [
        "When was HuaSheng founded?",
        "HuaSheng traces its history to 1989, with Guangzhou HuaSheng Metal Materials Co., Ltd. formed as the dedicated metal subsidiary in 1993.",
      ],
      [
        "What is HuaSheng known for?",
        "HuaSheng is known for modern bus shelters, advertising light boxes, stainless steel public furniture, overseas government projects, and precision metal OEM manufacturing.",
      ],
    ],
  },
  {
    key: "capabilities",
    path: "/capabilities",
    title: "Metal Fabrication Capabilities | Bus Shelter, Welding, Coating, OEM",
    description:
      "Explore HuaSheng's metal fabrication capabilities: laser cutting, CNC forming, robotic welding, surface treatment, assembly, quality inspection, and container loading.",
    h1: "End-to-end metal fabrication for public infrastructure and OEM products",
    eyebrow: "Factory capabilities",
    image: "/assets/huasheng/capabilities-workshop.webp",
    summary:
      "HuaSheng operates a full metal manufacturing workflow covering design review, incoming material inspection, cutting, forming, welding, surface treatment, assembly, final quality control, packing, and shipping.",
    bullets: [
      "Five workshops covering hardware fabrication, welding, surface finishing, clean assembly, and dispatch.",
      "Equipment includes laser cutting, CNC bending and punching, robotic welding, water jet cutting, and automatic spray coating.",
      "Materials include cold-rolled steel, stainless steel, aluminum alloy, and galvanized sheet.",
      "Project workflow supports bus shelters, light boxes, kiosks, steel structures, and OEM metal accessories.",
    ],
    links: [
      ["/products/bus-shelters/", "Bus shelter production"],
      ["/products/advertising-light-boxes/", "Advertising light boxes"],
      ["/products/metal-kiosks/", "Metal kiosks"],
      ["/quality", "Quality workflow"],
      ["/contact", "Discuss a project"],
    ],
    faqs: [
      [
        "What production processes does HuaSheng handle in-house?",
        "HuaSheng handles design review, material inspection, cutting, forming, welding, coating, assembly, inspection, packing, and shipping.",
      ],
      [
        "Does HuaSheng provide OEM and ODM manufacturing?",
        "Yes. HuaSheng supports precision metal OEM and ODM manufacturing for public infrastructure, retail fixtures, kitchen furniture parts, shelving, and bathroom metal accessories.",
      ],
    ],
  },
  {
    key: "cases",
    path: "/projects",
    title: "HuaSheng Projects | Bus Shelters, MTR Counters, OEM Metal Cases",
    description:
      "Review HuaSheng Metal project cases including Beijing Olympics shelters, Shanghai Expo bus shelters, Hong Kong MTR stainless steel counters, Qatar shelters, and OEM metal products.",
    h1: "Bus shelter, public infrastructure, and metal OEM project cases",
    eyebrow: "Selected projects",
    image: "/assets/huasheng/projects-overview.webp",
    summary:
      "HuaSheng's public infrastructure and OEM portfolio includes domestic city shelters, overseas government facilities, MTR counters, postal shelters, aluminum signage, steel structure decoration, and IKEA-related OEM metal products.",
    bullets: [
      "Beijing Olympics stainless steel bus shelter project, 2008.",
      "Shanghai Expo bus shelter project, 2010.",
      "Hong Kong MTR stainless steel ticket and enquiry counters.",
      "Doha, Riyadh, Oman, Korea, Nepal, New Zealand, Romania, Turkey, and Turkmenistan public facility projects.",
      "OEM kitchen trolleys, cabinets, racks, shelving, and bathroom metal accessories.",
    ],
    links: [
      ["/products/bus-shelters/", "Bus shelter cases"],
      ["/products/precision-metal-oem/", "OEM product capability"],
      ["/quality", "Quality system"],
      ["/contact", "Start an enquiry"],
    ],
    faqs: [
      [
        "Which countries has HuaSheng delivered projects to?",
        "HuaSheng has delivered to more than 40 countries, with examples in Qatar, Saudi Arabia, Oman, Korea, Nepal, New Zealand, Romania, Turkey, and Turkmenistan.",
      ],
      [
        "What public transport projects has HuaSheng built?",
        "Examples include Guangzhou's first modern shelters, Beijing Olympics shelters, Shanghai Expo shelters, Doha shelters, Riyadh shelters, Korea aluminum shelters, and Hong Kong MTR counters.",
      ],
    ],
  },
  {
    key: "quality",
    path: "/quality",
    title: "Quality & Certifications | ISO 9001 Metal Manufacturing | HuaSheng",
    description:
      "HuaSheng applies ISO 9001 quality management, DMAIC process control, incoming material inspection, in-process quality checks, final inspection, and certification documentation.",
    h1: "ISO 9001 quality control for metal manufacturing and public infrastructure",
    eyebrow: "Quality and certification",
    image: "/assets/huasheng/quality-control.webp",
    summary:
      "HuaSheng's quality system combines ISO 9001 certification, DMAIC quality control, incoming material inspection, first-piece checks, in-process patrols, final quality control, and certification records.",
    bullets: [
      "ISO 9001 quality management across design, production, assembly, and dispatch.",
      "DMAIC workflow from requirement definition through measurement, analysis, improvement, and control.",
      "Certificate and patent records for bus shelters and metal product manufacturing.",
      "Quality checks across structural, visual, surface treatment, electrical, and packaging requirements.",
    ],
    links: [
      ["/capabilities", "Manufacturing workflow"],
      ["/projects", "Reference projects"],
      ["/contact", "Request quality records"],
    ],
    faqs: [
      [
        "What quality framework does HuaSheng use?",
        "HuaSheng applies ISO 9001 quality management and DMAIC-based process control across incoming materials, production, assembly, and final inspection.",
      ],
      [
        "Can customers request quality documentation?",
        "Yes. Customers can request relevant certificates, inspection records, and quality documentation for specific projects during the enquiry process.",
      ],
    ],
  },
  {
    key: "contact",
    path: "/contact",
    title: "Contact HuaSheng Metal | Bus Shelter & Metal OEM Quotation",
    description:
      "Contact HuaSheng Metal for bus shelter, advertising light box, stainless steel structure, metal kiosk, and precision metal OEM/ODM project quotations.",
    h1: "Request a quotation for bus shelters, light boxes, kiosks, or OEM metal products",
    eyebrow: "Contact",
    image: "/assets/huasheng/contact-factory-entrance.webp",
    summary:
      "Send HuaSheng your project type, target market, quantity, drawings or reference images, timeline, and quality requirements. The team replies to concrete project enquiries within one business day.",
    bullets: [
      "Project types: bus shelters, advertising light boxes, steel structures, metal kiosks, and OEM manufacturing.",
      "Factory location: Guangzhou, Guangdong, China.",
      "Email: hi@hua-sheng.org.",
      "Phone / WhatsApp: +65 8309-9012.",
      "Working hours: Daily 10:00-22:00 GMT+8.",
    ],
    links: [
      ["mailto:hi@hua-sheng.org", "Email HuaSheng"],
      ["/products/bus-shelters/", "Bus shelter enquiries"],
      ["/products/precision-metal-oem/", "OEM enquiries"],
    ],
    faqs: [
      [
        "What information should I send for a quotation?",
        "Send the product type, quantity, target market, drawings or reference photos, dimensions, material requirements, surface finish, timeline, and delivery destination.",
      ],
      [
        "How quickly does HuaSheng reply?",
        "For concrete project enquiries, HuaSheng aims to reply within one business day.",
      ],
    ],
  },
];

export const zhPage = {
  key: "zh",
  path: "/zh/",
  lang: "zh-CN",
  title: "公交候车亭厂家 | 广告灯箱与金属 OEM 代工 | 广州华盛金属",
  description:
    "广州华盛金属材料有限公司是广州公交候车亭、广告灯箱、不锈钢结构、金属岗亭和精密金属 OEM/ODM 制造商，服务国内外市政、公建设施、广告媒体和品牌代工项目。",
  h1: "广州公交候车亭、广告灯箱与金属 OEM 制造商",
  eyebrow: "始于 1989 · 广州华盛金属材料有限公司",
  image: "/assets/huasheng/hero-bus-shelter-deployed.webp",
  summary:
    "华盛金属在广州提供公交候车亭、广告灯箱、金属岗亭、不锈钢工程、城市公共家具和精密金属 OEM/ODM 制造服务，支持从图纸评审、切割成型、焊接喷涂、装配质检到装柜发运的全流程交付。",
  bullets: [
    "核心关键词：公交候车亭厂家、广告灯箱厂家、户外公共家具、金属岗亭、不锈钢工程、金属 OEM 代工。",
    "工厂能力：激光切割、CNC 折弯冲剪、机器人焊接、表面处理、粉末喷涂、装配、终检和出口包装。",
    "项目经验：广州、北京奥运、上海世博、香港 MTR、卡塔尔多哈、沙特利雅得、阿曼、尼泊尔、新西兰、韩国等项目。",
    "合作场景：市政公交设施、广告媒体运营商、海外政府采购、建筑承包商、零售和家居品牌 OEM/ODM。",
  ],
  links: [
    ["/products/bus-shelters/", "公交候车亭制造"],
    ["/products/advertising-light-boxes/", "广告灯箱与 MUPI"],
    ["/products/metal-kiosks/", "金属岗亭与公共服务亭"],
    ["/products/precision-metal-oem/", "精密金属 OEM/ODM"],
    ["/contact", "获取项目报价"],
  ],
  faqs: [
    [
      "华盛金属主要生产什么？",
      "华盛金属主要生产公交候车亭、广告灯箱、金属岗亭、不锈钢结构、导视标识、户外公共家具和精密金属 OEM/ODM 产品。",
    ],
    [
      "华盛金属可以支持海外项目吗？",
      "可以。华盛金属有中东、欧洲、亚洲、大洋洲等项目经验，可支持出口包装、装柜和海外安装指导。",
    ],
    [
      "询价需要提供哪些资料？",
      "建议提供产品类型、数量、图纸或参考图片、尺寸、材料、表面处理、项目国家、交期和质量要求。",
    ],
  ],
};

export const productPages = [
  {
    slug: "bus-shelters",
    path: "/products/bus-shelters/",
    title: "Bus Shelter Manufacturer | Smart Bus Stops & Transit Shelters | HuaSheng",
    description:
      "HuaSheng manufactures custom bus shelters, smart bus stops, transit shelters, solar-powered shelters, benches, MUPI advertising panels, and public transport street furniture.",
    h1: "Custom bus shelter manufacturer for city transit projects",
    eyebrow: "Product landing page",
    image: "/assets/huasheng/featured-beijing-shelter-v2.webp",
    summary:
      "HuaSheng builds bus stop shelters and public transit street furniture for city planners, transit operators, advertising media owners, government buyers, and contractors.",
    bullets: [
      "Structures for galvanized steel, stainless steel, and aluminum alloy shelter designs.",
      "Options for benches, lighting, advertising panels, LED display areas, solar power, and wayfinding pylons.",
      "Reference projects include Guangzhou, Beijing Olympics, Shanghai Expo, Doha, Riyadh, Korea, Oman, and Nepal.",
      "Manufacturing support from drawings through fabrication, finishing, assembly, packing, and overseas installation guidance.",
    ],
    faqs: [
      [
        "Can HuaSheng build custom bus shelter designs?",
        "Yes. HuaSheng supports custom structures, materials, surface finishes, display modules, benches, lighting, and project-specific engineering review.",
      ],
      [
        "What materials are used for bus shelters?",
        "Common materials include galvanized steel, stainless steel, aluminum alloy, glass panels, light box components, and project-specific electrical accessories.",
      ],
    ],
    related: ["/projects", "/capabilities", "/quality", "/contact"],
  },
  {
    slug: "advertising-light-boxes",
    path: "/products/advertising-light-boxes/",
    title: "Advertising Light Box Manufacturer | MUPI & Outdoor Display Panels",
    description:
      "HuaSheng manufactures advertising light boxes, MUPI display structures, illuminated outdoor panels, bus shelter ad boxes, and stainless steel display frames.",
    h1: "Advertising light boxes and MUPI display structures",
    eyebrow: "Product landing page",
    image: "/assets/huasheng/case-qatar-shelter.webp",
    summary:
      "HuaSheng designs and manufactures metal advertising light boxes for transit shelters, outdoor media networks, public spaces, and commercial environments.",
    bullets: [
      "Outdoor advertising panels, MUPI light boxes, bus shelter light boxes, and illuminated display frames.",
      "Metal frame fabrication, surface treatment, electrical integration, assembly, and final quality checks.",
      "Designed for public-space durability, easy maintenance, and city-specific visual standards.",
      "Can be integrated with shelter structures, wayfinding, benches, and public-furniture systems.",
    ],
    faqs: [
      [
        "Can HuaSheng integrate light boxes into bus shelters?",
        "Yes. HuaSheng commonly integrates advertising light boxes with bus shelters, signage pylons, and outdoor public furniture.",
      ],
      [
        "Does HuaSheng support outdoor display projects?",
        "Yes. HuaSheng supports outdoor display structures, metal frames, surface treatment, assembly, and export packing for overseas projects.",
      ],
    ],
    related: ["/products/bus-shelters/", "/capabilities", "/projects", "/contact"],
  },
  {
    slug: "metal-kiosks",
    path: "/products/metal-kiosks/",
    title: "Metal Kiosk Manufacturer | Street Kiosks, Postal Shelters, Public Booths",
    description:
      "HuaSheng manufactures custom metal kiosks, postal shelters, public service booths, street kiosks, guideposts, and outdoor public furniture for city and commercial projects.",
    h1: "Metal kiosks, postal shelters, and public service booths",
    eyebrow: "Product landing page",
    image: "/assets/huasheng/case-new-zealand-postal.webp",
    summary:
      "HuaSheng manufactures durable metal kiosks and small public structures for postal services, government programs, outdoor commercial use, and city streetscape systems.",
    bullets: [
      "Street kiosks, postal shelters, guideposts, public service booths, and outdoor metal enclosures.",
      "Fabrication options for stainless steel, aluminum, galvanized steel, glass, signage, lighting, and weather-resistant finishes.",
      "Reference work includes New Zealand postal shelters, Nepal government facilities, and public infrastructure programs.",
      "Project support covers drawings, prototyping, batch fabrication, quality inspection, packing, and overseas delivery.",
    ],
    faqs: [
      [
        "Can HuaSheng manufacture custom public kiosks?",
        "Yes. HuaSheng can manufacture custom metal kiosks and public booths from drawings, reference images, or project specifications.",
      ],
      [
        "Are the kiosks suitable for outdoor use?",
        "Yes. Designs can use outdoor-ready metals, coatings, signage, and weather-resistant construction based on the destination environment.",
      ],
    ],
    related: ["/projects", "/capabilities", "/quality", "/contact"],
  },
  {
    slug: "precision-metal-oem",
    path: "/products/precision-metal-oem/",
    title: "Precision Metal OEM/ODM Manufacturer | Cabinets, Shelving, Kitchen Parts",
    description:
      "HuaSheng provides precision metal OEM/ODM manufacturing for kitchen trolleys, cabinets, shelving, bathroom racks, metal accessories, and custom stainless steel parts.",
    h1: "Precision metal OEM and ODM manufacturing",
    eyebrow: "Product landing page",
    image: "/assets/huasheng/case-oem-kitchen-cart.webp",
    summary:
      "HuaSheng provides OEM and ODM metal manufacturing for international brands, retailers, furniture programs, public infrastructure suppliers, and project contractors.",
    bullets: [
      "OEM kitchen trolleys, kitchen cabinet metal parts, shelving, towel racks, bathroom accessories, and custom metal components.",
      "Manufacturing processes include cutting, forming, welding, coating, assembly, inspection, and export packing.",
      "Experience as a long-term OEM manufacturing partner for international home-furnishing supply chains.",
      "Quality management supports repeat production, batch consistency, documentation, and controlled improvement.",
    ],
    faqs: [
      [
        "What OEM products can HuaSheng manufacture?",
        "HuaSheng manufactures metal kitchen trolleys, cabinet components, shelving, bathroom racks, furniture metal parts, and custom precision metal accessories.",
      ],
      [
        "Can HuaSheng work from drawings?",
        "Yes. HuaSheng can review drawings, materials, finish requirements, tolerances, packing needs, and production workflow before quotation.",
      ],
    ],
    related: ["/capabilities", "/quality", "/projects", "/contact"],
  },
];

export const blogIndexPage = {
  key: "blog",
  path: "/blog/",
  type: "blogIndex",
  title: "HuaSheng Blog | Bus Shelter Manufacturing and Metal Fabrication Notes",
  description:
    "Manufacturing notes, project case writeups, and process articles from HuaSheng Metal for bus shelters, advertising light boxes, kiosks, and precision metal OEM products.",
  h1: "Bus shelter manufacturing notes and project case articles",
  eyebrow: "HuaSheng Blog",
  image: "/assets/huasheng/capabilities-workshop.webp",
  lastmod: "2026-05-31",
  summary:
    "A crawlable content hub for buyer questions, project cases, and process articles covering public transit shelters, outdoor advertising displays, metal kiosks, surface treatment, and OEM metal fabrication.",
  bullets: [
    "Monthly content target: publish one to two project cases or process articles and regenerate sitemap.xml plus llms-full.txt.",
    "Topic clusters: bus shelter manufacturing, outdoor light boxes, weather-resistant metal kiosks, quality control, export packing, and OEM fabrication.",
    "Each article should include a clear buyer problem, manufacturing answer, project evidence, internal product links, and quotation CTA.",
  ],
  links: [
    ["/blog/bus-shelter-manufacturing-process/", "Bus shelter manufacturing process"],
    ["/blog/outdoor-light-box-weatherproofing/", "Outdoor light box weatherproofing"],
    ["/blog/ai-application-meeting/", "AI application meeting"],
    ["/contact", "Discuss a project"],
  ],
  faqs: [
    [
      "How often should HuaSheng publish new content?",
      "For steady SEO and GEO growth, add one to two project cases or process articles per month and keep sitemap.xml plus llms-full.txt synchronized.",
    ],
  ],
};

export const blogPages = [
  {
    slug: "bus-shelter-manufacturing-process",
    path: "/blog/bus-shelter-manufacturing-process/",
    type: "article",
    title: "Bus Shelter Manufacturing Process: From Drawings to Container Loading",
    description:
      "A buyer-focused guide to HuaSheng's bus shelter manufacturing process, from drawings, material inspection, cutting, welding, coating, assembly, quality control, packing, and shipping.",
    h1: "Bus shelter manufacturing process: from drawings to container loading",
    eyebrow: "Process article",
    image: "/assets/huasheng/featured-beijing-shelter-v2.webp",
    summary:
      "A practical overview of how a custom bus shelter moves through HuaSheng's metal fabrication workflow, with checkpoints that matter to city planners, contractors, and outdoor media operators.",
    datePublished: "2026-05-31",
    lastmod: "2026-05-31",
    bullets: [
      "Start with drawings, reference images, shelter dimensions, advertising panel needs, electrical requirements, and destination climate.",
      "Control material selection before fabrication: galvanized steel, stainless steel, aluminum alloy, glass, lighting, benches, and fasteners.",
      "Use stage gates for cutting, forming, welding, surface treatment, assembly, FQC, packing, and container loading.",
      "Keep documentation aligned with quotation, drawings, BOM, inspection records, and installation guidance.",
    ],
    sections: [
      {
        heading: "1. Engineering review before quotation",
        paragraphs: [
          "A reliable shelter project starts before metal is cut. Buyers should share dimensions, wind-load expectations, electrical requirements, advertising display formats, bench and roof options, site constraints, and destination standards.",
          "HuaSheng's engineering review turns that input into a manufacturable structure, then checks material availability, coating approach, packing size, and the sequence from prototype to batch production.",
        ],
      },
      {
        heading: "2. Fabrication and surface treatment",
        paragraphs: [
          "The typical workflow covers incoming material inspection, laser cutting, CNC punching, bending, welding, grinding, surface preparation, powder coating or other project-specific finish, then controlled assembly.",
          "For outdoor shelters, coating and drainage details matter as much as the frame. The manufacturing plan should account for corrosion resistance, service access, lighting maintenance, and safe on-site installation.",
        ],
      },
      {
        heading: "3. Final inspection, packing, and loading",
        paragraphs: [
          "Before dispatch, the factory checks appearance, dimensions, structural details, electrical integration, accessories, labels, and packing. Export projects also need container loading planning so long parts and fragile panels arrive ready for installation.",
          "A complete buyer handoff should include product photos, packing records, inspection notes, and any site installation guidance needed by the local contractor.",
        ],
      },
    ],
    links: [
      ["/products/bus-shelters/", "Bus shelter product page"],
      ["/capabilities", "Factory capabilities"],
      ["/quality", "Quality workflow"],
      ["/contact", "Request a quotation"],
    ],
    faqs: [
      [
        "What information is needed for a custom bus shelter quote?",
        "Send drawings or reference images, dimensions, quantity, material preference, advertising panel requirements, lighting or solar requirements, destination country, and expected delivery schedule.",
      ],
    ],
  },
  {
    slug: "outdoor-light-box-weatherproofing",
    path: "/blog/outdoor-light-box-weatherproofing/",
    type: "article",
    title: "Outdoor Advertising Light Box Weatherproofing: What Buyers Should Specify",
    description:
      "A manufacturing note for outdoor advertising light boxes and MUPI displays, covering metal frames, coatings, drainage, electrical access, glass or panel choices, and maintenance planning.",
    h1: "Outdoor advertising light box weatherproofing: what buyers should specify",
    eyebrow: "Process article",
    image: "/assets/huasheng/case-qatar-shelter.webp",
    summary:
      "Outdoor advertising light boxes need more than a bright panel. Buyers should define the metal frame, surface treatment, panel access, drainage, wiring, installation environment, and maintenance plan early.",
    datePublished: "2026-05-31",
    lastmod: "2026-05-31",
    bullets: [
      "Specify location, wind exposure, rainfall, temperature range, cleaning method, and expected service life.",
      "Match the frame material and coating system to the outdoor environment.",
      "Plan safe access for poster changes, LED module maintenance, wiring, and drainage.",
      "Integrate the light box with bus shelters, kiosks, MUPI displays, or wayfinding structures when needed.",
    ],
    sections: [
      {
        heading: "1. Weather resistance starts with the frame",
        paragraphs: [
          "The metal frame determines stability, alignment, service access, and long-term appearance. Buyers should define whether the project needs stainless steel, galvanized steel, aluminum alloy, or a hybrid structure.",
          "Surface treatment should be chosen for the destination environment, not only for the showroom sample. Coastal, desert, high-rainfall, and high-traffic city locations create different maintenance risks.",
        ],
      },
      {
        heading: "2. Maintenance access is part of the design",
        paragraphs: [
          "Poster replacement, LED maintenance, electrical inspection, and cleaning should be planned before production. Hinges, locks, drainage holes, cable routing, and internal reinforcement can make the difference between a product that is easy to maintain and one that becomes expensive on site.",
        ],
      },
      {
        heading: "3. Integrating displays with shelters or kiosks",
        paragraphs: [
          "Many projects combine advertising light boxes with bus shelters, public kiosks, benches, wayfinding pylons, or smart-city modules. In those cases, the manufacturing review should cover structure, electrical layout, installation sequence, and spare-part access together.",
        ],
      },
    ],
    links: [
      ["/products/advertising-light-boxes/", "Advertising light box product page"],
      ["/products/bus-shelters/", "Bus shelter integration"],
      ["/capabilities", "Manufacturing capabilities"],
      ["/contact", "Discuss a display project"],
    ],
    faqs: [
      [
        "Can HuaSheng integrate light boxes into public transit shelters?",
        "Yes. HuaSheng manufactures advertising light boxes as standalone displays and as integrated modules for bus shelters, kiosks, and public city furniture.",
      ],
    ],
  },
  {
    slug: "ai-application-meeting",
    path: "/blog/ai-application-meeting/",
    type: "article",
    title: "Leveraging AI for Efficiency, Deepening Service for Growth",
    description:
      "A HuaSheng internal improvement note about using AI tools to improve multilingual sales communication, manufacturing documentation, buyer response quality, and long-term service capability.",
    h1: "Leveraging AI for efficiency, deepening service for growth",
    eyebrow: "Company note",
    image: "/assets/huasheng/projects-overview.webp",
    summary:
      "HuaSheng's AI application discussion focuses on practical service improvements: clearer buyer communication, faster document preparation, better multilingual responses, and more consistent project knowledge capture.",
    datePublished: "2026-05-29",
    lastmod: "2026-05-29",
    bullets: [
      "Use AI to organize multilingual enquiry replies, product explanations, and project documentation.",
      "Keep factory facts, quotation inputs, quality requirements, and delivery notes consistent across sales channels.",
      "Improve service speed without replacing engineering review or human confirmation for specifications.",
    ],
    sections: [
      {
        heading: "1. AI as a service efficiency tool",
        paragraphs: [
          "For international manufacturing projects, slow or inconsistent communication can create avoidable friction. AI tools can help the team organize product facts, translate buyer requirements, and prepare clearer first responses.",
          "The goal is not to replace factory expertise. The goal is to make engineering and sales knowledge easier to reuse, verify, and deliver to buyers in a useful format.",
        ],
      },
      {
        heading: "2. Better documentation for complex projects",
        paragraphs: [
          "Bus shelters, light boxes, kiosks, and OEM metal products often require drawings, material notes, finish requirements, packing plans, and quality records. Structured AI-assisted documentation can help keep those details aligned across quotation, production, and after-sales communication.",
        ],
      },
      {
        heading: "3. Human confirmation remains the control point",
        paragraphs: [
          "Specifications, prices, lead times, and compliance requirements still need human confirmation. AI is most useful when it makes the team faster at finding information, preparing drafts, and checking consistency before a qualified person makes the final decision.",
        ],
      },
    ],
    links: [
      ["/about", "About HuaSheng"],
      ["/quality", "Quality system"],
      ["/contact", "Contact the team"],
    ],
    faqs: [
      [
        "Does HuaSheng use AI to replace engineering review?",
        "No. AI can help organize communication and documentation, but engineering specifications, pricing, lead times, and quality requirements still require human review.",
      ],
    ],
  },
];

export function canonicalUrl(path) {
  if (path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path}`;
}
