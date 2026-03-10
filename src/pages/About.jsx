import SectionCard from "../components/SectionCard"
import './About.css'
import { TitleBar, SectionTitle } from '../components/SectionCard'
import { Team } from '../components/TeamPhoto'
import Expertise from '../components/Expertise'

export default function About() {
    return (
        <>
            <div className="about-title">
                <h2>About agntix</h2>
                <p>Our studio</p>
            </div>
            <section className="about-page">

                <SectionCard title="about our studio" subTitle="we're a creative didgital studio" image1="https://wp.aqlova.com/agntix/creative-agency/wp-content/uploads/sites/5/2025/04/about-us-2-2.jpg" image2="https://wp.aqlova.com/agntix/creative-agency/wp-content/uploads/sites/5/2025/05/about-1-1.jpg" content="We have been creating digital products & providing design support to ambitious startups & corporations since 2016." content2="As an award-winning agency with in the digital jungle, agntix® transcends aesthetics, crafting your vision into a legacy that endures." />

                <div className="about-brand">
                    <ul className="service-name">
                        <li className="brand-list">Buiness Growth</li>
                        <li className="brand-list">Development</li>
                        <li className="brand-list">Consulting</li>
                        <li className="brand-list">Branding</li>
                        <li className="brand-list">ui design</li>
                    </ul>
                </div>

                <section className='team-container'>
                    <TitleBar title="Our Team Member" content="Our ability to combine expertise and systems thinking is what fuels us as a team" />
                    <Team />
                </section>

                <section className="expertise">
                    <SectionTitle title="Our Achievement" subTitle="Awards & recognition" />
                    <div className='expert-container'>
                        <Expertise onClick={() => navigate('service')} number="01" expertise="Mobile Design" />
                        <Expertise onClick={() => navigate('service')} number="02" expertise="UI/UX Design" />
                        <Expertise onClick={() => navigate('service')} number="03" expertise="3d modern services" />
                        <Expertise onClick={() => navigate('service')} number="04" expertise="Creative directions" />
                        <Expertise onClick={() => navigate('service')} number="05" expertise="Web development" />
                        <Expertise onClick={() => navigate('service')} number="06" expertise="Brand Identity" />
                    </div>
                </section>
            </section>
        </>
    )
}