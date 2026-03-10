import './Project.css'

export default function Project({ image, title, content }) {
    return (
        <>
            <div className="product-card" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.3), transparent), url(${image})`}}>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </>
    )
}