import './Footer.css'
import { Link, useNavigate } from 'react-router-dom'
import Button from './Button'

export default function Footer() {

    let navigate = useNavigate()
    return (
        <>
            <div className="footer">
                <div className="left-footer">
                    <h3><Link to="/">ΛGNTI✕</Link></h3>
                    <p>Helping start-ups scale & grow.</p>
                </div>
                <div className="center-footer">
                    <h3>Quick Links</h3>
                    <ul>
                        <li> <Button onClick={() => navigate('about')}>About </Button> </li>
                        <li> <Button onClick={() => navigate('Service')}>Services </Button></li>
                        <li> <Button onClick={() => navigate('contact')}>Contact Us </Button></li>
                    </ul>
                </div>
                <div className="right-footer">
                    <h3>Contact</h3>
                    <ul>
                        <li><Link to="mailto:agntix@studio.com">agntix@studio.com</Link></li>
                        <li><Link to="tel:+3025550107">+(302)555-0107</Link></li>
                    </ul>
                </div>
            </div>

            <div className='copyright'>
                <h4>AGNTIX STUDIO</h4>
                <p>&copy;Agntix Design Studio</p>
                <p>Developed by Emma Ose</p>
            </div>
        </>
    )
}