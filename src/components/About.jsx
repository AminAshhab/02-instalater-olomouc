function About() {
  const currentYear = new Date().getFullYear()
  const years = currentYear - 2008

  return (
    <section id="o-mne" className="section section-alt">
      <div className="container">
        <div className="about-grid">
          <div className="about-left reveal">
            <div className="eyebrow">— O mně</div>
            <div className="divider"></div>
            <h2 className="about-title">
              Řemeslo<br />
              <span className="accent-mark">bez prodlev.</span>
            </h2>
            <p className="muted" style={{ fontSize: '0.97rem', lineHeight: 1.7, maxWidth: '320px' }}>
              Jeden člověk, jeden telefon, jedna odpovědnost. Žádné dispečinky, žádné podzhotovitele.
            </p>
          </div>

          <div className="about-right">
            <p className="about-lead reveal">
              Jsem Michael Vymyslický. Naše firma je na trhu se stavebnictvím od roku 2008 a provádí jak instalatérské práce, tak stavební činnost různého druhu.
            </p>

            <div className="about-body">
              <p className="reveal">
                Pracuji v Olomouci a okolí — od oprav vodovodních a odpadních rozvodů přes kompletní topenářské realizace až po podlahy a drobné stavební zakázky. Když mě zavoláte, mluvíte přímo se mnou, ne s call centrem.
              </p>
              <p className="reveal">
                Většinu zakázek vidíte v galerii níže — koupelny, kuchyně, schodiště, hydroizolace. To jsou skutečné realizace, ne stock fotky z katalogu.
              </p>
            </div>

            <div className="about-stats reveal-instant">
              <div className="about-stat">
                <div className="value">{years}+</div>
                <div className="label">Let praxe</div>
              </div>
              <div className="about-stat">
                <div className="value">4</div>
                <div className="label">Oblasti řemesla</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
