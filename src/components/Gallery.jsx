import { useCallback, useEffect, useState } from 'react'

const photos = [
  { src: '/images/work-bathroom-beige.jpg', alt: 'Realizace koupelny v béžových obkladech', label: 'Koupelna · komplet', span: 'big' },
  { src: '/images/work-kitchen-brick.jpg', alt: 'Kuchyňský obklad cihlovým vzorem', label: 'Kuchyně · obklad', span: 'mid' },
  { src: '/images/work-pipes-detail.jpg', alt: 'Detail vodovodního rozvodu', label: 'Voda · detail', span: 'square' },
  { src: '/images/work-bathroom-roughin.jpg', alt: 'Koupelna v hrubé stavbě', label: 'Rozvody · hrubá', span: 'square' },
  { src: '/images/work-bathroom-tub.jpg', alt: 'Detail vany s baterií', label: 'Koupelna · detail', span: 'square' },
  { src: '/images/work-waterproofing.jpg', alt: 'Hydroizolace stěn před obkladem', label: 'Hydroizolace', span: 'square' },
  { src: '/images/work-tile-mosaic.jpg', alt: 'Barevný mozaikový obklad', label: 'Mozaika · obklad', span: 'square' },
  { src: '/images/work-bathroom-stone.jpg', alt: 'Rohové umývátko s mramorovými obklady', label: 'Sprcha · mramor', span: 'square' },
  { src: '/images/work-stairs-grey.jpg', alt: 'Venkovní schodiště s šedou dlažbou', label: 'Schodiště · venkovní', span: 'big' },
  { src: '/images/work-stone-wall.jpg', alt: 'Kamenná zahradní zídka', label: 'Stavba · zídka', span: 'mid' },
  { src: '/images/work-stairs-detail.jpg', alt: 'Detail venkovního schodiště', label: 'Schody · detail', span: 'square' },
  { src: '/images/work-exterior-tile.jpg', alt: 'Venkovní vstupní plocha s dlažbou', label: 'Vstup · dlažba', span: 'square' },
]

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)
  const isOpen = activeIndex !== null

  const close = useCallback(() => setActiveIndex(null), [])
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length)),
    [],
  )
  const prev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? null : (i - 1 + photos.length) % photos.length,
      ),
    [],
  )

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, close, next, prev])

  const active = isOpen ? photos[activeIndex] : null

  return (
    <section id="galerie" className="section section-alt gallery">
      <div className="container">
        <div className="gallery-header">
          <div>
            <div className="eyebrow reveal">— Reference</div>
            <div className="divider reveal"></div>
            <h2 className="reveal">
              Fotografie<br />
              <span className="accent-mark">z mých prací.</span>
            </h2>
          </div>
          <p className="muted reveal" style={{ fontSize: '1rem', lineHeight: 1.7, maxWidth: '420px' }}>
            Vybrané realizace — koupelny, kuchyně, schodiště a stavební drobnosti. Vše jsou skutečné zakázky v Olomouci a okolí, žádné stock fotky.
          </p>
        </div>

        <div className="gallery-grid">
          {photos.map((photo, i) => (
            <button
              type="button"
              className={`gallery-item gallery-${photo.span} reveal`}
              key={photo.src}
              onClick={() => setActiveIndex(i)}
              aria-label={`Otevřít detail: ${photo.label}`}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
              <span className="gallery-caption">{photo.label}</span>
              <span className="gallery-zoom" aria-hidden="true">+</span>
            </button>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.label}
          onClick={close}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={close}
            aria-label="Zavřít"
          >
            ×
          </button>
          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            aria-label="Předchozí"
          >
            ‹
          </button>
          <figure
            className="lightbox-figure"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={active.src} alt={active.alt} />
            <figcaption>
              <span className="lightbox-counter">
                {activeIndex + 1} / {photos.length}
              </span>
              <span className="lightbox-label">{active.label}</span>
            </figcaption>
          </figure>
          <button
            type="button"
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            aria-label="Další"
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}

export default Gallery
