import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import { Service, TitleBar, SectionTitle} from '../components/SectionCard'
import Project from '../components/Project'
import Expertise from '../components/Expertise'
import { Team } from '../components/TeamPhoto'

export default function Home() {
    const navigate = useNavigate()
    return (
        <>
            <div className="home">
                <div className="homeContent">
                    <h1>AGNTIX</h1>
                    <h2>A collection of the best independent premium publisher</h2>
                    <p>Helping Start-ups Scale & grow</p>
                    <Button onClick={() => navigate('/about')}>Learn More</Button>
                    <Button onClick={() => navigate('/contact')}>Contact Us</Button>
                </div>

                <div className='image'>
                    <div className='imgbox'>
                        <img src="https://plus.unsplash.com/premium_photo-1664475926084-d20248544896?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFya2V0aW5nfGVufDB8fDB8fHww" alt="Team Photo" />
                    </div>
                </div>
            </div>

            <Service />

            <section className='dna'>
                <TitleBar title="our 50+ independent publishers' DNA" />
                <div className='dna-container'>
                    <div className='dna-content'>
                        <div className='content-head'>
                            <p>[001]</p>
                            <h3>Creative Excellence</h3>
                        </div>
                        <div className='content'>
                            <p>We are a one stop source of creative Excellence. perfect story and meaningful brand content, crafted by the greates global creators, shared with ideal audience</p>
                        </div>
                    </div>
                    <div className='dna-content'>
                        <div className='content-head'>
                            <p>[002]</p>
                            <h3>Devoted Communities</h3>
                        </div>
                        <div className='content'>
                            <p>We are a one stop source of creative Excellence. perfect story and meaningful brand content, crafted by the greates global creators, shared with ideal audience</p>
                        </div>
                    </div>
                </div>
            </section >

            <section className="project">
                <SectionTitle title="Our case studies" subTitle="Our recent projects" />
                <div className='project-box'>
                    <Project image="https://wp.aqlova.com/agntix/creative-agency/wp-content/uploads/sites/5/2025/08/project-2.jpg" title="Simple logistics" content="digital platform" />
                    <Project image = "https://wp.aqlova.com/agntix/creative-agency/wp-content/uploads/sites/5/2025/08/project-3.jpg" title="Basic operations" content="Online service" />
                    <Project image="https://wp.aqlova.com/agntix/creative-agency/wp-content/uploads/sites/5/2025/08/project-4.jpg" title="smooth coordination" content="cloud system" />
                    <Project image="https://wp.aqlova.com/agntix/creative-agency/wp-content/uploads/sites/5/2025/08/project-1.jpg" title="clear planning" content="virtual network" />
                </div>
            </section>

            <section className = "expertise">
                <SectionTitle title="Our service" subTitle="Explore Our Expertise"  />
                <div className='expert-container'>
                    <Expertise onClick={() => navigate('service')} number="01" expertise="Mobile Design" />
                    <Expertise onClick={() => navigate('service')} number="02" expertise="UI/UX Design" />
                    <Expertise onClick={() => navigate('service')} number="03" expertise="3d modern services" />
                    <Expertise onClick={() => navigate('service')} number="04" expertise="Creative directions" />
                    <Expertise onClick={() => navigate('service')} number="05" expertise="Web development" />
                    <Expertise onClick={() => navigate('service')} number="06" expertise="Brand Identity" />
                </div>
            </section>

            <section className='team-container'>
                <TitleBar title="Our Team Member" content="Our ability to combine expertise and systems thinking is what fuels us as a team" />
                <Team />
            </section>

        </>
    )
}