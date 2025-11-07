import { Form } from '../components/composed-components/Form'
import JoinBg from '../assets/images/InfoCard_img7.png'
// import { faLocationDot} from '@fortawesome/fontawesome-free-solid'

export const JoinUs = () => {
    return (
        <main>
            <div className="joinUs-page-wrapper">
                <div className="joinUs-title">
                    <h1>Join Us</h1>
                </div>
                <div className="joinUs-content">
                    <div className="joinUs-info">
                      <img src={JoinBg} alt="" />
                        <div className='joinUs-details'>
                            <div className="joinUs-name flex flex-col gap-2">
                                <h3>Address</h3>
                                {/* <FontAwesomeIcon icon={faLocationDot} /> */}
                                <p>122 Street, Silicon Valley, USA</p>
                            </div>

                            <div className="joinUs-email flex flex-col gap-2">
                                <h3>Email</h3>
                                <p>Learnmore@simplifiventures.com</p>
                            </div>

                        </div>
                        
                    </div>
                    <div className="joinUs-form">
                        <Form />
                    </div>
                </div>
            </div>
        </main>
    )
}