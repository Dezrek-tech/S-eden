import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Nav from './components/Nav.jsx'
import './assets/styling/sass/main.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="app__header">
        <Nav />
      </header>


    </div>
  )
}

export default App
