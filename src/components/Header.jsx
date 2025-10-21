import React from 'react'

export default function Header({ headerTop, onNavigate, mobileOpen, setMobileOpen, currentSection }) {
  const links = [
    { hash: '#header', label: 'Home' },
    { hash: '#about', label: 'About' },
    { hash: '#resume', label: 'Resume' },
    { hash: '#portfolio', label: 'Portfolio' }
  ]

  const socials = [
    { href: 'https://github.com/mizanussayed', icon: 'bi-github', label: 'GitHub' },
    { href: 'https://bd.linkedin.com/in/mizanussayed', icon: 'bi-linkedin', label: 'LinkedIn' },
    { href: 'https://www.instagram.com/mizanussayed/', icon: 'bi-instagram', label: 'Instagram' },
    { href: 'https://fb.com/mizanussayed', icon: 'bi-facebook', label: 'Facebook' }
  ]

  return (
    <header id="header" className={"py-8 " + (headerTop ? 'header-top' : '')}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 items-center gap-6">
          <div className="md:col-span-7">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Mizanur Rahman</h1>
            <p className="text-xl text-gray-300 mt-2">.NET Software Engineer — building scalable web applications and APIs.</p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(s => (
                <a key={s.href} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="text-gray-200 hover:text-white text-2xl">
                  <i className={`bi ${s.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-green-500">
              <img src="/assets/img/me.jpg" alt="Mizanur Rahman" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <nav id="navbar" className={"mt-6 " + (mobileOpen ? 'navbar-mobile' : '')}>
          <ul className={mobileOpen ? 'block' : 'flex gap-6'}>
            {links.map(l => (
              <li key={l.hash}>
                <button
                  className={"nav-link " + (currentSection === l.hash ? 'active' : '')}
                  onClick={() => onNavigate(l.hash)}
                  aria-current={currentSection === l.hash ? 'true' : 'false'}
                >{l.label}</button>
              </li>
            ))}
          </ul>

          {mobileOpen && (
            <button className="mobile-nav-toggle absolute top-4 right-4 md:hidden" onClick={() => setMobileOpen(false)}>
              Close
            </button>
          )}
        </nav>

      </div>
    </header>
  )
}
