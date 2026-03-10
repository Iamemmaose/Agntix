import Button from "./Button";
import { useNavigate } from "react-router-dom"
import './SectionCard.css'


export function TitleBar({title, content}) {
    return (
        <>
                <div className='title'>
                    <h2>{title}</h2>
                    <p>{content}</p>
                </div>
        </>
    )
}

export function SectionTitle({ title, subTitle }) {
    return (
        <>
            <div className="section-title">
                <h2>{title}</h2>
                <h3>{subTitle}</h3>
            </div>
        </>
    )
}

export default function SectionCard({ title, subTitle, image1, image2, content, content2 }) {
    const navigate = useNavigate();
    return (
        <>
            <div className="section-card">
                <div className="section-title">
                    <h2>{title}</h2>
                    <h3>{subTitle}</h3>
                </div>
                <div className="section-content">
                    <div className="imgbox">
                        <img src={image1} alt={title + " photo"} />
                    </div>
                    <div className="content">
                        <h3>{content}</h3>
                        <h4>{content2}</h4>
                        <Button onClick={() => navigate('/contact')}>Get in Touch</Button>
                    </div>
                    <div className="imgbox2">
                        <img src={image2} alt={title + " photo"} />
                    </div>

                </div>
            </div>
        </>
    )
}

export function Service() {
    return (
        <section className="service">
            <SectionCard
                title="our service"
                subTitle="We're a creative digital studio."
                content="We have been creating digital products & providing design support to ambitious startups & corporations since 2016."
                content2="As an award-winning agency with in the digital jungle, agntix® transcends aesthetics, crafting your vision into a legacy that endures."
                image1="https://media.istockphoto.com/id/2231952003/photo/gen-z-leader-attending-a-technology-conference-representing-new-business-occupation-internet.webp?a=1&b=1&s=612x612&w=0&k=20&c=aAQY5Dgt4xejjrMH7t4oKGLZDPMx57qsF5uIQrvmua4="
                image2="https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFya2V0aW5nfGVufDB8fDB8fHww"
            />
        </section>
    )
}