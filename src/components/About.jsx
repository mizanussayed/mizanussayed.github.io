import React, { useEffect, useRef } from 'react'

export default function About({ activeSection }) {
  const sectionRef = useRef()

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const bars = el.querySelectorAll('.progress-bar')
          bars.forEach(b => {
            const raw = b.getAttribute('aria-valuenow') || b.style.width || '80'
            const val = String(raw).trim()
            b.style.width = val.endsWith('%') ? val : (isNaN(Number(val)) ? val : (Number(val) + '%'))
          })
          obs.disconnect()
        }
      })
    }, { threshold: 0.3 })

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className={"about py-8 " + (activeSection === '#about' ? 'section-show' : '')}>
      <div className="about-me container mx-auto px-4">
        <div className="section-title">
          <h2 className="text-sm uppercase text-gray-400">About</h2>
          <p className="text-2xl font-bold uppercase">More about me</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="md:col-span-1">
            <img src="/assets/img/me.jpg" className="img-fluid rounded shadow" alt="mizanussayed" />
            <div className="mt-4">
              <a href="https://github.com/mizanussayed" target="_blank" rel="noreferrer" className="text-green-400 underline">GitHub Profile</a>
            </div>
            <ul className="mt-4 text-sm text-gray-300">
              <li><strong>Location:</strong> Dhaka, Bangladesh</li>
              <li><strong>Email:</strong> <a href="mailto:mizandusp@gmail.com" className="underline">mizandusp@gmail.com</a></li>
              <li><strong>Phone:</strong> +8801521484246</li>
              <li><strong>Freelance:</strong> Available</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xl text-green-500">Senior .NET Software Engineer</h3>
            <p className="italic mt-2">Software engineering professional with over 2.6 years of experience designing and building large-scale web applications, ERP systems, and developer tooling. Experienced with C#, ASP.NET (Framework & Core), MS SQL, and front-end integrations.</p>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold">Skills</h4>
                <ul className="text-sm mt-2">
                  <li>C# - 90%</li>
                  <li>HTML / CSS - 92%</li>
                  <li>JavaScript - 75%</li>
                  <li>SQL (MSSQL/MySQL) - 85%</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">Career Summary</h4>
                <ul className="text-sm mt-2">
                  <li>Prime Tech Solutions Ltd — Software Engineer (2023 - Present)</li>
                  <li>IsDB-BISEW Scholarship — ERP project work (2021 - 2022)</li>
                  <li>Developed 15+ web projects and contributions across front-end and back-end.</li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold">Education</h4>
              <p className="text-sm mt-2">Masters in Social Science — University of Dhaka (2020 - 2022)</p>
              <p className="text-sm">Diploma: Enterprise System Analysis and Design with C# — IsDB-BISEW</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
