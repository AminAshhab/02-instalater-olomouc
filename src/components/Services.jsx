const services = [
  {
    no: '01',
    title: 'Instalatérské práce',
    desc: 'Opravy, montáže vodovodních a odpadních systémů. Kompletní realizace topenářských rozvodů.',
    tag: 'Voda · Odpady · Topení',
  },
  {
    no: '02',
    title: 'Podlahařské práce',
    desc: 'Pokládka a oprava podlahového systému.',
    tag: 'Pokládka · Oprava',
  },
  {
    no: '03',
    title: 'Stavební práce',
    desc: 'Veškeré stavební práce od A do Z.',
    tag: 'Stavba · Olomouc',
  },
  {
    no: '04',
    title: 'Ruční práce',
    desc: 'Dílčí opravy a drobné práce.',
    tag: 'Detail · Údržba',
  },
]

function Services() {
  return (
    <section id="sluzby" className="section">
      <div className="container">
        <div className="services-header">
          <div>
            <div className="eyebrow reveal">— Služby</div>
            <div className="divider reveal"></div>
            <h2 className="reveal">
              Čtyři oblasti,<br />
              <span className="accent-mark">jeden řemeslník.</span>
            </h2>
          </div>
          <p className="muted reveal" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
            Pro nezávazný odhad zavolejte na <a href="tel:+420777256557" style={{ color: 'var(--accent)', fontWeight: 500 }}>+420 777 256 557</a> — popis zakázky probereme po telefonu nebo přímo na místě.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card reveal" key={service.no}>
              <div className="service-number">{service.no} / 04</div>
              <div className="service-title">{service.title}</div>
              <div className="service-desc">{service.desc}</div>
              <div className="service-foot">
                <span>{service.tag}</span>
                <span className="service-arrow" aria-hidden="true">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
