// Quality & certification page
(() => {
  const { ImgSlot, Eyebrow, SectionHead, CTABlock } = window.HSUI;

  function Quality({ t, lang, setRoute }) {
    const q = t.quality;
    const go = (id) => { setRoute(id); window.scrollTo({ top: 0, behavior: "instant" }); };
    return (
      <React.Fragment>
        <section className="page-hero">
          <div className="container-wide">
            <div className="page-hero-grid">
              <div className="page-hero-text">
                <Eyebrow dot>{q.hero.eyebrow}</Eyebrow>
                <h1 className="display-xl reveal">{q.hero.title}</h1>
                <p className="lede reveal">{q.hero.sub}</p>
              </div>
              <div className="page-hero-media reveal">
                <ImgSlot label={lang === "cn" ? "ISO 9001 证书 · 占位" : "ISO 9001 certificate · placeholder"} />
              </div>
            </div>
          </div>
        </section>

        {/* Policy pillars */}
        <section>
          <div className="container">
            <SectionHead eyebrow={lang === "cn" ? "质量方针" : "Quality policy"} title={q.policy.title} lede={q.policy.sub} />
            <div className="policy-grid reveal">
              {q.policy.pillars.map((p, i) => (
                <div className="pillar-card" key={i}>
                  <div className="tag">{p.tag}</div>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DMAIC */}
        <section>
          <div className="container-wide">
            <SectionHead eyebrow={lang === "cn" ? "DMAIC" : "DMAIC"} title={q.dmaic.title} lede={q.dmaic.sub} />
            <div className="dmaic-flow reveal">
              {q.dmaic.steps.map((s, i) => (
                <div className="dmaic-step" key={i}>
                  <div className="letter">{s.n}</div>
                  <div className="t">{s.t}</div>
                  <div className="d">{s.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certs */}
        <section>
          <div className="container">
            <SectionHead eyebrow={lang === "cn" ? "资质" : "Certifications"} title={q.certs.title} />
            <div className="certs-grid reveal">
              {q.certs.items.map((c, i) => (
                <div className="cert-card" key={i}>
                  <div className="cert-icon">
                    {i === 0 ? "ISO\n9001" : i === 1 ? (lang === "cn" ? "外观\n专利" : "Design\nPatent") : i === 2 ? (lang === "cn" ? "实用\n新型" : "Utility\nPatent") : (lang === "cn" ? "IKEA\n供应商" : "IKEA\nSupplier")}
                  </div>
                  <div>
                    <h4>{c.t}</h4>
                    <p>{c.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABlock
          title={lang === "cn" ? "想看具体的质量记录？" : "Want to see the actual quality records?"}
          sub={lang === "cn" ? "我们可以提供过往项目的 IQC、IPQC、FQC 记录与 ITP 文件。" : "We can share IQC / IPQC / FQC records and ITP documents from past projects."}
          btn={lang === "cn" ? "联系我们" : "Contact us"}
          onClick={() => go("contact")}
        />
      </React.Fragment>
    );
  }

  (window.HS_PAGES = window.HS_PAGES || {}).quality = Quality;
})();
