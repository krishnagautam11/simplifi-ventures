import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Form } from '../components/composed-components/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export const Contact = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // ⭐ Delay skeleton AFTER route loader finishes
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // skeleton visible for 1 sec
        return () => clearTimeout(timer);
    }, []);

    return (
        <main className='custom-container-main'>
            <div className="contact-page-wrapper">

                <div className="contact-title">
                    {loading ? (
                        <Skeleton width={200} height={40} />
                    ) : (
                        <h1>Contact Us</h1>
                    )}
                </div>

                <div className="contact-content">
                    <div className="contact-info">

                        {/* ⭐ MAP skeleton */}
                        {loading ? (
                            <Skeleton height={400} />
                        ) : (
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.9003987751043!2d-122.01200242359683!3d37.33478917196405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0cac84e8aa9%3A0x9b0a28d299dcf4c7!2sApple%20Park!5e0!3m2!1sen!2sin!4v1708210000000!5m2!1sen!2sin"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        )}

                        <div className='contact-details'>

                            <div className="contact-details-upper">

                                {/* Address */}
                                {loading ? (
                                    <Skeleton width={260} height={20} />
                                ) : (
                                    <p>
                                        <a href="https://maps.app.goo.gl/vuRHwsKYySvcndeX7">
                                            <FontAwesomeIcon icon={faLocationDot} /> 122 Street, Silicon Valley, USA
                                        </a>
                                    </p>
                                )}

                                {/* Phone */}
                                {loading ? (
                                    <Skeleton width={200} height={20} />
                                ) : (
                                    <p>
                                        <a href="tel:+1-587-530-2271">
                                            <FontAwesomeIcon icon={faPhone} /> +1-587-530-2271
                                        </a>
                                    </p>
                                )}

                                {/* Email */}
                                {loading ? (
                                    <Skeleton width={260} height={20} />
                                ) : (
                                    <p>
                                        <a href="mailto:learn@simplifiventures.com">
                                            <FontAwesomeIcon icon={faEnvelope} /> learn@simplifiventures.com
                                        </a>
                                    </p>
                                )}
                            </div>

                            <div className="contact-details-below">

                                {/* ⭐ Social skeleton */}
                                {loading ? (
                                    <div className="flex gap-3">
                                        <Skeleton circle width={40} height={40} />
                                        <Skeleton circle width={40} height={40} />
                                        <Skeleton circle width={40} height={40} />
                                    </div>
                                ) : (
                                    <div className="social-links">
                                        <div className="social-icon">
                                            <a href="https://www.facebook.com/">
                                                <FontAwesomeIcon className='sicon' icon={faFacebookF} />
                                            </a>
                                        </div>

                                        <div className="social-icon">
                                            <a href="https://x.com/">
                                                <FontAwesomeIcon className='sicon' icon={faXTwitter} />
                                            </a>
                                        </div>

                                        <div className="social-icon">
                                            <a href="https://in.linkedin.com/">
                                                <FontAwesomeIcon className='sicon' icon={faLinkedinIn} />
                                            </a>
                                        </div>
                                    </div>
                                )}

                            </div>

                        </div>
                    </div>

                    {/* ⭐ Form skeleton */}
                    <div className="contact-form">
                        {loading ? (
                            <div className="flex flex-col gap-4">
                                <Skeleton height={50} />
                                <Skeleton height={50} />
                                <Skeleton height={50} />
                                <Skeleton height={120} />
                                <Skeleton height={45} width={140} />
                            </div>
                        ) : (
                            <Form />
                        )}
                    </div>
                </div>

            </div>
        </main>
    );
};
