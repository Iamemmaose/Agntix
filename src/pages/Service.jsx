import './Service.css'
import Expertise from '../components/Expertise'

export default function Services() {
    return (
        <>
            <div className="about-title">
                <h2>Services</h2>
            </div>
            <div className="container-service">
                <ServiceProvided number="1" contentTitle="branding" content="Strong branding sets your startup apart, signaling quality and professionalism. It builds trust with your audience, making you stand out in a crowded market" image1="https://wp.aqlova.com/agntix/creative-agency/wp-content/uploads/sites/5/2025/04/service-3.jpg" image2="https://wp.aqlova.com/agntix/creative-agency/wp-content/uploads/sites/5/2025/04/service-4.jpg" />
                <div className='expert-container'>
                    <Expertise onClick={() => navigate('service')} number="01" expertise="Brand Naming" />
                    <Expertise onClick={() => navigate('service')} number="02" expertise="Creative direction" />
                    <Expertise onClick={() => navigate('service')} number="03" expertise="brand strategy" />
                    <Expertise onClick={() => navigate('service')} number="04" expertise="graphic charter" />
                    <Expertise onClick={() => navigate('service')} number="05" expertise="logo design" />
                </div>
                <ServiceProvided number="2" contentTitle="digital design" content="A process of assumption & validation with a goal of taking into account all the necessary variables, which are always custom and are to be uncovered Every business has digital potential, and we are here to help you leverage that potential." image1="https://wp.aqlova.com/agntix/creative-agency/wp-content/uploads/sites/5/2025/04/service-1.jpg" image2="https://wp.aqlova.com/agntix/creative-agency/wp-content/uploads/sites/5/2025/04/service-2.jpg" />
                <div className='expert-container'>
                    <Expertise onClick={() => navigate('service')} number="01" expertise="Wire frame" />
                    <Expertise onClick={() => navigate('service')} number="02" expertise="prototype" />
                    <Expertise onClick={() => navigate('service')} number="03" expertise="design system" />
                    <Expertise onClick={() => navigate('service')} number="04" expertise="ui/ux audit" />
                    <Expertise onClick={() => navigate('service')} number="05" expertise="design system" />
                    <Expertise onClick={() => navigate('service')} number="06" expertise="interactive experience" />
                </div>
                <ServiceProvided number="3" contentTitle="digital design" content="Marketing strategy is proudly responsible for the half of a campaign's success, another half relies solely on its implementation. We focus on creating visuals that communicate your value and engage your audience." image1="https://wp.aqlova.com/agntix/creative-agency/wp-content/uploads/sites/5/2025/04/service-5.jpg" image2="https://wp.aqlova.com/agntix/creative-agency/wp-content/uploads/sites/5/2025/04/service-6.jpg" />
                <div className='expert-container'>
                    <Expertise onClick={() => navigate('service')} number="01" expertise="animated logo" />
                    <Expertise onClick={() => navigate('service')} number="02" expertise="production illustration" />
                    <Expertise onClick={() => navigate('service')} number="03" expertise="launch video" />
                    <Expertise onClick={() => navigate('service')} number="04" expertise="visual effect" />
                    <Expertise onClick={() => navigate('service')} number="05" expertise="illustration 3d" />
                </div>
                <ServiceProvided number="4" contentTitle="development" content="Efficiency and scalability. The two factors which any decision gets filtered out with - programming language, framework, library, each line of code, and server side" image1="https://wp.aqlova.com/agntix/creative-agency/wp-content/uploads/sites/5/2025/04/service-7.jpg" image2="https://wp.aqlova.com/agntix/creative-agency/wp-content/uploads/sites/5/2025/04/service-8.jpg" />
                <div className='expert-container'>
                    <Expertise onClick={() => navigate('service')} number="01" expertise="integration" />
                    <Expertise onClick={() => navigate('service')} number="02" expertise="front end" />
                    <Expertise onClick={() => navigate('service')} number="03" expertise="back end" />
                    <Expertise onClick={() => navigate('service')} number="04" expertise="web flow" />
                </div>
            </div>
        </>
    )
}

export function ServiceProvided({ number, contentTitle, content, image1, image2 }) {
    return (
        <>
            <div className="serviceprovided">
                <div className="text-title">
                    <h2>{number}</h2>
                    <div className="text-content">
                        <h3>{contentTitle}</h3>
                        <h4>{content}</h4>
                    </div>
                </div>
                <div className="service-img">
                    <img src={image1} alt={contentTitle} />
                    <img src={image2} alt={contentTitle} />
                </div>
            </div>
        </>
    )
}