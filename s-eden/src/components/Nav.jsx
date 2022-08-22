import {
    React, 
    useState
} from 'react'

import { AppLogo } from './MiniParts'

const Nav = () => {
    const [ nav, setNav ] = useState('')
    
    return (
        <nav className='app__nav'>
            <div className='left flat-centered'>
                <AppLogo />
            </div>

            <div onClick={()=>setNav('active')}>
                Open Nav
            </div>

            <div onClick={()=>setNav('')}>
                close Nav
            </div>
            
            <div className={`right flat-right ${nav}`}>
                <div className='nav-items flat-centered'>
                    <a className="item" href="#">Home</a>
                    <a className="item" href="#">About</a>
                    <a className="item" href="#">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav