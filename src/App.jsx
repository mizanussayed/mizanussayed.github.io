import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-8">
        <About />
        <Resume />
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
}
