import './TeamPhoto.css'
import { useState } from "react"


export default function TeamPhoto({ image, name, work }) {
    const[show, setShow] = useState(false);

    

    return (
        <>
            <div className="team-photo" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                <img src={image} alt="team member" />
               {show && (<div className="team-name">
                    <h2>{name}</h2>
                    <p>{work}</p>
                </div>)}
            </div>
        </>
    )
}


export function Team() {
    return (
        <>
            <div className="team-board">
                <TeamPhoto image="https://wp.aqlova.com/agntix/creative-agency/wp-content/uploads/sites/5/2025/08/team-1.jpg" name="Andrew" work="Developer" />
                <TeamPhoto image="https://wp.aqlova.com/agntix/creative-agency/wp-content/uploads/sites/5/2025/08/team-3.jpg" name="Sophia" work="Developer" />
                <TeamPhoto image="https://wp.aqlova.com/agntix/creative-agency/wp-content/uploads/sites/5/2025/08/team-2.jpg" name="Emma" work="Developer" />
                <TeamPhoto image="https://wp.aqlova.com/agntix/creative-agency/wp-content/uploads/sites/5/2025/08/team-4.jpg" name="James" work="Developer" />
            </div>
        </>
    )
}