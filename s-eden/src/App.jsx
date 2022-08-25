import './assets/styling/sass/main.scss'
import { BgPattern } from './components/MiniParts.jsx'

import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <div className="App">
      <BgPattern />

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

export default App
