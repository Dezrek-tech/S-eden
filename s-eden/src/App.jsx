import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import './assets/styling/sass/main.scss'

function App() {

  return (
    <div className="App">
      <header className="app__header">
        <Nav />
        <Hero />
      </header>

    </div>
  )
}

export default App
