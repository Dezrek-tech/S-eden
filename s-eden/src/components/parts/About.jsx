import Section from '../includes/Section.jsx'
import AppConfig from '../includes/AppConfig.jsx'

const About = () => {
    return (
        <Section title="About" icon={``}>
            {AppConfig.about}
        </Section> 
    )
}

export default About