import { Form } from '../components/composed-components/Form'
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
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d405689.3064590792!2d-122.37076011890852!3d37.40289151206302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2sSilicon%20Valley%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1762494752641!5m2!1sen!2sin" width="100%" height="400" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                        <div className='contact-details'>
                            <div className="contact-name flex flex-col gap-2">
                                <h3>Address</h3>
                                {/* <FontAwesomeIcon icon={faLocationDot} /> */}
                                <p>122 Street, Silicon Valley, USA</p>
                            </div>

                            <div className="contact-email flex flex-col gap-2">
                                <h3>Email</h3>
                                <p>Learnmore@simplifiventures.com</p>
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