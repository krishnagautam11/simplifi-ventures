import { Form } from '../components/composed-components/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

// import ContactBg from '../assets/images/InfoCard_img7.png'
// import { faLocationDot} from '@fortawesome/fontawesome-free-solid'

export const Contact = () => {
    return (
        <main className='custom-container-main'>
            <div className="contact-page-wrapper">
                <div className="contact-title">
                    <h1>Contact Us</h1>
                </div>
                <div className="contact-content">
                    <div className="contact-info">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12689.755230479654!2d-122.03009965336481!3d37.332118865433735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d8391510688f0!2sApple%20Park!5e0!3m2!1sen!2sin!4v1762839562367!5m2!1sen!2sin" width="100%" height="400" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                        <div className='contact-details'>
                            <div className="contact-details-upper">
                                <div className="contact-name flex flex-col gap-2 contact-detail-fields">



                                    <p><a href="https://maps.app.goo.gl/vuRHwsKYySvcndeX7"> <FontAwesomeIcon icon={faLocationDot} /> 122 Street, Silicon Valley, USA</a></p>
                                </div>


                                <div className="contact-phone flex flex-col gap-2 contact-detail-fields">
                                    {/* <h3>Phone</h3> */}

                                    <p><a href="tel:+1-587-530-2271"> <FontAwesomeIcon icon={faPhone} /> +1-587-530-2271</a></p>
                                </div>

                                <div className="contact-email flex flex-col gap-2 contact-detail-fields">
                                    {/* <h3>Email</h3> */}

                                    <p><a href="mailto:someone@example.com">  <FontAwesomeIcon icon={faEnvelope} /> Learnmore@simplifiventures.com</a></p>
                                </div>
                            </div>


                            <div className="contact-details-below">

                                <div className="contact-socials flex flex-col gap-2 contact-detail-fields">
                                    {/* <h3>Socials</h3> */}
                                    <div className="social-links">
                                        <div className="social-icon">
                                            <a href="https://www.facebook.com/"> <FontAwesomeIcon className='sicon' icon={faFacebookF} /></a>
                                        </div>
                                        <div className="social-icon">
                                            <a href="https://x.com/"><FontAwesomeIcon className='sicon' icon={faXTwitter} /></a>
                                        </div>
                                        <div className="social-icon">
                                            <a href="https://in.linkedin.com/"><FontAwesomeIcon className='sicon' icon={faLinkedinIn} /></a>
                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* <img src={ContactBg} alt="" /> */}
                    </div>
                    <div className="contact-form">
                        <Form />
                    </div>
                </div>
            </div>
        </main>
    )
}