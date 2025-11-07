import { Link } from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'

export const Footer = () => {
    return (
        <footer>
            <div className="custom-container">
                <div className="footer-content">
                    <div className="footer-upper">
                        <div className="footer-logo">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="footer-links">
                            <div className="footer-link">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/team">Team</Link></li>
                                    <li><Link to="/studio">Studio</Link></li>
                                    <li><Link to="/resources">Resources</Link></li>
                                </ul>
                            </div>

                            <div className="footer-link">
                                <ul>
                                    <li><Link to="/career">Career</Link></li>
                                    <li><Link to="/join">Join Us</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                </ul>
                            </div>

                            <div className="footer-link">
                                <ul>
                                    <li><a href="https://www.facebook.com/">Facebook</a></li>
                                    <li><a href="https://www.instagram.com/">Instagram</a></li>
                                    <li><a href="https://x.com/">X</a></li>
                                    <li><a href="https://www.linkedin.com/">LinkedIn</a></li>
                                </ul>

                            </div>

                        </div>
                    </div>

                    <div className="footer-copyright">
                        <p>&copy; copyright by Simplifi Ventures 2025</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}