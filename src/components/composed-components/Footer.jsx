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
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Team</a></li>
                                    <li><a href="">Studio</a></li>
                                    <li><a href="">Resources</a></li>
                                </ul>
                            </div>

                            <div className="footer-link">
                                <ul>
                                    <li><a href="">Career</a></li>
                                    <li><a href="">Join Us</a></li>
                                    <li><a href="">Contact Us</a></li>
                                </ul>
                            </div>

                            <div className="footer-link">
                                <ul>
                                    <li><a href="">facebook</a></li>
                                    <li><a href="">Instagram</a></li>
                                    <li><a href="">X</a></li>
                                    <li><a href="">LinkedIn</a></li>
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