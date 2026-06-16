function Contact() {
  const mapSrc = `https://www.google.com/maps?q=Pol%C3%A1k%C3%A1+725%2F13%2C+779+00+Olomouc&output=embed`

  return (
    <section id="kontakt" className="section">
      <div className="container">
        <div style={{ marginBottom: '4rem' }}>
          <div className="eyebrow reveal">— Kontakt</div>
          <div className="divider reveal"></div>
          <h2 className="reveal">
            V případě zájmu <span className="accent-mark">stačí zavolat.</span>
          </h2>
          <p className="muted reveal" style={{ fontSize: '1.05rem', maxWidth: '560px', marginTop: '1.25rem' }}>
            Adresa pro osobní jednání, mapa a kontakty níže.
          </p>
        </div>

        <div className="contact-grid">
          <div className="reveal">
            <div className="contact-call-card">
              <div className="contact-call-label">Telefon — Michael Vymyslický</div>
              <div className="contact-call-number">
                <a href="tel:+420777256557">+420 777 256 557</a>
              </div>
              <div className="contact-call-sub">
                Nejrychleji telefonem — popis zakázky probereme přímo, nebo se zastavte na adrese.
              </div>
              <a className="contact-call-action" href="tel:+420777256557">
                <span aria-hidden="true">☎</span>
                <span>Zavolat teď</span>
              </a>
            </div>
          </div>

          <div>
            <div className="address-block reveal">
              <div className="label">Sídlo</div>
              <div className="value">Polská 725/13</div>
              <div className="city">779 00 Olomouc</div>

              <div className="label" style={{ marginTop: '1.5rem' }}>Působnost</div>
              <div className="value" style={{ fontSize: '1.1rem' }}>Olomouc a okolí</div>
            </div>

            <div className="map-embed reveal-instant">
              <iframe
                src={mapSrc}
                loading="lazy"
                title="Mapa: Polská 725/13, Olomouc"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
