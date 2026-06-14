function Hero() {
  return (
    <header id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <div className="hero-eyebrow" style={{ opacity: 0, transform: 'translateY(20px)' }}>
            <span className="dot"></span>
            <span className="eyebrow">Olomouc · od roku 2008</span>
          </div>

          <h1>
            <span className="line-1" style={{ display: 'block', opacity: 0, transform: 'translateY(40px)' }}>
              Instalatér,
            </span>
            <span className="line-2" style={{ display: 'block', opacity: 0, transform: 'translateY(40px)' }}>
              kterého zavoláte.
            </span>
          </h1>

          <p className="hero-sub" style={{ opacity: 0, transform: 'translateY(20px)' }}>
            Michael Vymyslický — instalatérské, podlahařské a drobné stavební práce v Olomouci a okolí. Na trhu se stavebnictvím od roku 2008.
          </p>

          <div className="hero-cta-row" style={{ opacity: 0, transform: 'translateY(20px)' }}>
            <a className="btn-call" href="tel:+420777256557" aria-label="Zavolat Michaelu Vymyslickému">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/>
              </svg>
              <span>Volat</span>
              <span className="phone">+420 777 256 557</span>
            </a>
            <span className="hero-cta-note">Nezávazná konzultace · Po–Pá</span>
          </div>

          <div className="hero-meta" style={{ opacity: 0, transform: 'translateY(20px)' }}>
            <div className="hero-meta-item">
              <div className="label">Sídlo</div>
              <div className="value">Polská 725/13</div>
              <div className="muted" style={{ fontSize: '0.9rem', marginTop: '0.25rem' }}>779 00 Olomouc</div>
            </div>
            <div className="hero-meta-item">
              <div className="label">Působnost</div>
              <div className="value">Olomouc a okolí</div>
              <div className="muted" style={{ fontSize: '0.9rem', marginTop: '0.25rem' }}>Voda · topení · podlahy · stavba</div>
            </div>
          </div>
        </div>

        <figure className="hero-visual" style={{ opacity: 0, transform: 'translateY(30px)' }}>
          <div className="hero-visual-frame">
            <img
              src="/images/work-bathroom-beige.jpg"
              alt="Realizace koupelny — Instalatér Olomouc"
              loading="eager"
              decoding="async"
            />
          </div>
          <figcaption className="hero-visual-caption">
            <span className="label">/ realizace</span>
            <span>Koupelna · Olomouc</span>
          </figcaption>
        </figure>
      </div>

      <div className="hero-scroll" style={{ opacity: 0 }}>
        <span>Posuňte se</span>
        <span className="line"></span>
      </div>
    </header>
  )
}

export default Hero
