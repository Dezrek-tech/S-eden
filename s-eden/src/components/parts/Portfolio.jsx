import { AppCard } from "../includes/MiniParts.jsx"
import Section from '../includes/Section.jsx'
import AppConfig from "../includes/AppConfig.jsx"

const Portfolio = () => {
    const PortfolioData = AppConfig.portfolio

    return (
        <Section title="Portfolio" extraClass="app__portfolio">
            <div className="cards">
                {PortfolioData.map( data => {
                    return <AppCard key={ data.title } title={ data.title } description={ data.description } image={ `./images/portfolio/${ data.image }` }/>
                })}
            </div>
        </Section> 
    )
}

export default Portfolio