import './Expertise.css'

export default function Expertise({number, expertise, onClick}) {
    return(
        <>
         <div className="expert-content" onClick={onClick}>
            <h3><span>{number}</span>{expertise}</h3>
            <p className="arrow">↗</p>
         </div>
        </>
    )
}