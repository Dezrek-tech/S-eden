import './assets/styling/sass/main.scss'
import * as SmoothScroll from 'smooth-scroll'
import { BgPattern } from './components/includes/MiniParts.jsx'
import { useState, useEffect } from 'react'

import ScrollToTop from './components/parts/ScrollToTop.jsx'
import Nav from './components/parts/Nav.jsx'
import Hero from './components/parts/Hero.jsx'
import About from './components/parts/About.jsx'
import Portfolio from './components/parts/Portfolio.jsx'
import Contact from './components/parts/Contact.jsx'
import Footer from './components/parts/Footer.jsx'

function App() {
  const [Loaded, setLoaded] = useState('')

  useEffect(()=> {
    setLoaded('loaded')
  })

  return (
    <span id="top-anchor"></span>
    <div className={`App ${Loaded}`}>
      <BgPattern />
      <ScrollToTop />

      <header className="app__header">
        <Nav />
        <Hero />
      </header>

      <div className="app__body">
        <About />
        <Portfolio />
        <Contact />
      </div>

      <div className="app__footer">
        <Footer />
      </div>

    </div>
  )
}

new SmoothScroll('a[href*="#"]')

export default App
