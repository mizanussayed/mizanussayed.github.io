import React from 'react'

export default function Resume() {
  return (
    <section id="resume" className="resume py-8">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2 className="text-sm uppercase text-gray-400">Resume</h2>
          <p className="text-2xl font-bold uppercase">Check My Resume</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Software Engineer</h4>
              <p className="italic">Innovative and deadline-driven Software development with 2+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</p>
            </div>
          </div>
          <div>
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Software Engineer</h4>
              <h5>2023 - Present</h5>
              <p><em> Prime Tech Solutions Ltd.</em></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
