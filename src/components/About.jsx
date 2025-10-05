import React from 'react'

export default function About() {
  return (
    <section id="about" className="about py-8">
      <div className="about-me container mx-auto px-4">
        <div className="section-title">
          <h2 className="text-sm uppercase text-gray-400">About</h2>
          <p className="text-2xl font-bold uppercase">More about me</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="md:col-span-1">
            <img src="/assets/img/me.jpg" className="img-fluid" alt="mizanussayed" />
          </div>
          <div className="md:col-span-2">
            <h3 className="text-xl text-green-500">.NET Software & Developer</h3>
            <p className="italic mt-2">Software engineering professional with almost 2.10 years of experience in efficient and large-scale web-based systems development. Interested in R&D, best practices and modern web app development.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
