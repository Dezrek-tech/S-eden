import { } from "react"
import { AppCard } from "./MiniParts.jsx"
import Section from './Section.jsx'
import HeroArt from '../assets/images/hero-art.png'

const Portfolio = () => {
    return (
        <Section title="Portfolio" icon={``} extraClass="app__portfolio">
            <div className="cards">
                <AppCard title="flay" description="flay garment" image={HeroArt}/>
                <AppCard title="flay" description="flay garment" image={HeroArt}/>
                <AppCard title="flay" description="flay garment" image={HeroArt}/>
                <AppCard title="flay" description="flay garment" image={HeroArt}/>
            </div>
        </Section>
        
    )
}

export default Portfolio