import React from 'react'

export default function Header() {
  return (
    <header id="header" className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold"><a href="#">Mizanur Rahman</a></h1>
        <h2 className="text-lg mt-2 text-gray-300">I'm a passionate <span className="text-green-500">.NET Software developer</span> from Dhaka, Bangladesh</h2>
        <nav id="navbar" className="navbar mt-4">
          <ul className="flex gap-6">
            <li><a className="nav-link active" href="#header">Home</a></li>
            <li><a className="nav-link" href="#about">About</a></li>
            <li><a className="nav-link" href="#resume">Resume</a></li>
            <li><a className="nav-link" href="#portfolio">Portfolio</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
