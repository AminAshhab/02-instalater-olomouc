function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="accent-mark">M.V.</span> Instalatér Olomouc — Michael Vymyslický
        </div>
        <div className="footer-meta">
          © {year} · Polská 725/13, Olomouc · na trhu od 2008
        </div>
      </div>
    </footer>
  )
}

export default Footer
