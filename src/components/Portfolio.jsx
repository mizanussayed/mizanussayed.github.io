import React from 'react'

const items = [
  { src: '/assets/img/portfolio/portfolio-1.jpg', title: 'App 1', cat: 'App' },
  { src: '/assets/img/portfolio/portfolio-2.jpg', title: 'Web 3', cat: 'Web' },
  { src: '/assets/img/portfolio/portfolio-3.jpg', title: 'App 2', cat: 'App' },
  { src: '/assets/img/portfolio/portfolio-4.jpg', title: 'Card 2', cat: 'Card' }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio py-8">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2 className="text-sm uppercase text-gray-400">Portfolio</h2>
          <p className="text-2xl font-bold uppercase">My Works</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {items.map((it, idx) => (
            <div key={idx} className="portfolio-item">
              <div className="portfolio-wrap bg-gray-800 p-4">
                <img src={it.src} className="img-fluid" alt="" />
                <div className="portfolio-info mt-2">
                  <h4 className="font-semibold">{it.title}</h4>
                  <p className="uppercase text-sm">{it.cat}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
