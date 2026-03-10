import { Link, useNavigate } from 'react-router-dom'
import Button from './Button'
import './Header.css'

export default function Header() {
    const navigate = useNavigate()
    return (
        <>
        <header className = "header">
           <div className = "logo">
            <h1><Link to = "/"> <span>Λ</span>GNTI✕</Link></h1>
           </div>
           <div className='navigation'>
            <ul>
                <li><Link to="/">Home</Link> </li>
                <li><Link to="/about">About</Link> </li>
                <li><Link to="/service">Services</Link> </li>
            </ul>
            <Button onClick={() => navigate('/Contact')}>Get in Touch</Button>
           </div>
        </header>
        </>
    )
}