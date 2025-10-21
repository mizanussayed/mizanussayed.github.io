import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

export default function App() {
  const [currentSection, setCurrentSection] = useState(() => {
    return window.location.hash || '#header'
  })
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (window.location.hash !== currentSection) {
      history.replaceState(null, '', currentSection)
    }

    const el = document.querySelector(currentSection)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    setMobileOpen(false)
  }, [currentSection])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section'))
    if (!sections.length) return

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = '#' + entry.target.id
          setCurrentSection(id)
        }
      })
    }, { root: null, threshold: 0.5 })

    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const navigate = (hash) => {
    setCurrentSection(hash || '#header')
  }

  const headerTop = currentSection !== '#header'

  return (
    <div className="min-h-screen bg-black text-white">
      <Header
        headerTop={headerTop}
        onNavigate={navigate}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        currentSection={currentSection}
      />
      <main className="pt-8">
        <About activeSection={currentSection} />
        <Resume activeSection={currentSection} />
        <Portfolio activeSection={currentSection} />
      </main>
      <Footer />
    </div>
  )
}
