// Cases page — filterable project grid
(() => {
  const { ImgSlot, Eyebrow, SectionHead, CTABlock } = window.HSUI;
  const { useState } = React;

  function Cases({ t, lang, setRoute }) {
    const c = t.cases;
    const [filter, setFilter] = useState(c.filters[0]);
    const items = filter === c.filters[0]
      ? c.items
      : c.items.filter((it) => it.cat === filter);
    const go = (id) => { setRoute(id); window.scrollTo({ top: 0, behavior: "instant" }); };

    return (
      <React.Fragment>
        <section className="page-hero">
          <div className="container-wide">
            <div className="page-hero-grid">
              <div className="page-hero-text">
                <Eyebrow dot>{c.hero.eyebrow}</Eyebrow>
                <h1 className="display-xl reveal">{c.hero.title}</h1>
                <p className="lede reveal">{c.hero.sub}</p>
              </div>
              <div className="page-hero-media reveal">
                <ImgSlot src="assets/project-shelter-hero.png" label={lang === "cn" ? "项目实拍" : "Project photo"} />
              </div>
            </div>
          </div>
        </section>

        {/* Featured case */}
        <section className="tight">
          <div className="container">
            <div className="case-hero reveal">
              <ImgSlot src="assets/project-shelter-hero.png" label={lang === "cn" ? "北京奥运候车亭" : "Beijing Olympics shelter"} />
              <div className="case-hero-text">
                <Eyebrow>{lang === "cn" ? "重点案例" : "Featured project"}</Eyebrow>
                <h3>{c.featured.title}</h3>
                <div className="meta">
                  <span>{c.featured.loc}</span>
                  <span>·</span>
                  <span>{c.featured.year}</span>
                </div>
                <div className="amount">{c.featured.amount}</div>
                <p style={{ color: "var(--ink-soft)", margin: 0, lineHeight: 1.65 }}>{c.featured.body}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Filter + grid */}
        <section>
          <div className="container-wide">
            <SectionHead
              eyebrow={lang === "cn" ? "项目筛选" : "Filter projects"}
              title={lang === "cn" ? "全部项目案例" : "All projects"}
            />
            <div className="case-filters reveal">
              {c.filters.map((f) => (
                <button
                  key={f}
                  className={"case-filter" + (filter === f ? " on" : "")}
                  onClick={() => setFilter(f)}
                >
                  {f}
                  <span style={{ marginLeft: 8, color: filter === f ? "inherit" : "var(--ink-mute)" }}>
                    {f === c.filters[0] ? c.items.length : c.items.filter((it) => it.cat === f).length}
                  </span>
                </button>
              ))}
            </div>
            <div className="case-grid reveal">
              {items.map((it, i) => (
                <article className="case-card" key={it.title + i}>
                  <ImgSlot label={(lang === "cn" ? "占位 · " : "Placeholder · ") + it.title} />
                  <div className="case-card-body">
                    <div className="cat">{it.cat}</div>
                    <h4>{it.title}</h4>
                    <div className="meta">
                      <span>{it.loc}</span>
                      <span>{it.year}</span>
                    </div>
                    {it.amount !== "—" && <div className="cat" style={{ color: "var(--accent)" }}>{it.amount}</div>}
                    <p>{it.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTABlock
          title={lang === "cn" ? "想做一个类似的项目？" : "Got a similar project in mind?"}
          sub={lang === "cn" ? "我们承接 200 个 - 5000 个候车亭的批量项目，海外政府采购友好。" : "We handle volume projects from 200 to 5,000+ shelters, friendly to overseas government procurement."}
          btn={lang === "cn" ? "发起项目咨询" : "Start an enquiry"}
          onClick={() => go("contact")}
        />
      </React.Fragment>
    );
  }

  (window.HS_PAGES = window.HS_PAGES || {}).cases = Cases;
})();
