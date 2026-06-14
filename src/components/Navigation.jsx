function Navigation({ scrolled }) {
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-brand" aria-label="Domů">
          <span className="mark">M.V.</span>
          <span className="nav-brand-text">
            <span>Instalatér Olomouc</span>
            <span className="small">od roku 2008</span>
          </span>
        </a>
        <div className="nav-links">
          <a href="#o-mne">O mně</a>
          <a href="#sluzby">Služby</a>
          <a href="#galerie">Reference</a>
          <a href="#kontakt">Kontakt</a>
        </div>
        <a href="tel:+420777256557" className="nav-cta">
          <span aria-hidden="true">☎</span>
          <span className="label-full">+420 777 256 557</span>
        </a>
      </div>
    </nav>
  )
}

export default Navigation
