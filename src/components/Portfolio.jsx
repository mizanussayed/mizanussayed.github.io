import React from 'react'

const repos = [
  { href: 'https://github.com/mizanussayed/online_design', title: 'online_design', desc: 'CSS', img: '/assets/img/portfolio/portfolio-1.jpg' },
  { href: 'https://github.com/mizanussayed/maui_publish', title: 'maui_publish', desc: 'Shell', img: '/assets/img/portfolio/portfolio-2.jpg' },
  { href: 'https://github.com/mizanussayed/mCoder', title: 'mCoder', desc: 'HTML', img: '/assets/img/portfolio/portfolio-3.jpg' },
  { href: 'https://github.com/mizanussayed/EcomWeb', title: 'EcomWeb', desc: 'HTML', img: '/assets/img/portfolio/portfolio-4.jpg' },
  { href: 'https://github.com/mizanussayed/coDinG', title: 'coDinG', desc: 'HTML', img: '/assets/img/portfolio/portfolio-1.jpg' },
  { href: 'https://github.com/mizanussayed/chatApp', title: 'chatApp', desc: 'JavaScript - Chat with File Sharing', img: '/assets/img/portfolio/portfolio-2.jpg' }
]

export default function Portfolio({ activeSection }) {
  return (
    <section id="portfolio" className={"portfolio py-8 " + (activeSection === '#portfolio' ? 'section-show' : '')}>
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2 className="text-sm uppercase text-gray-400">Portfolio</h2>
          <p className="text-2xl font-bold uppercase">My Works</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {repos.map((r, idx) => (
            <div key={idx} className="portfolio-item">
              <div className="portfolio-wrap bg-gray-800 p-4">
                <img src={r.img} className="img-fluid" alt={r.title} />
                <div className="portfolio-info mt-2">
                  <h4 className="font-semibold"><a href={r.href} target="_blank" rel="noreferrer" className="hover:underline">{r.title}</a></h4>
                  <p className="uppercase text-sm">{r.desc} <span className="repo-badge ml-2">GitHub</span></p>
                  <div className="mt-2">
                    <a href={r.href} target="_blank" rel="noreferrer" className="text-sm text-green-400 underline">View on GitHub</a>
                    <a href="/portfolio-details.html" className="ml-3 text-sm text-gray-300">Details</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
