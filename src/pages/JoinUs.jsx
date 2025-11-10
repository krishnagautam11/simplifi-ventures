import { InvestmentForm } from '../components/composed-components/InvestmentForm';
import JoinBg from '../assets/images/InfoCard_img7.png';

export const JoinUs = () => {
  return (
    <main>
      <div className="joinUs-page-wrapper">
        <div className="joinUs-title">
          <h1>Join Us</h1>
        </div>

        <div className="joinUs-content">
          <div className="joinUs-info">
            <img src={JoinBg} alt="Join us illustration" />
            
            <div className="joinUs-details">
              <div className="joinUs-name flex flex-col gap-2">
                <h3>Address</h3>
                <p>122 Street, Silicon Valley, USA</p>
              </div>

              <div className="joinUs-email flex flex-col gap-2">
                <h3>Email</h3>
                <p>Learnmore@simplifiventures.com</p>
              </div>
            </div>
          </div>

          <div className="joinUs-form">
            <InvestmentForm />
          </div>
        </div>
      </div>
    </main>
  );
};
