import { InvestmentForm } from '../components/composed-components/InvestmentForm';
import JoinBg from '../assets/images/InfoCard_img7.png';
import { ProcessExplain } from '../components/composed-components/ProcessExplain';
import { ProcessExplain2 } from '../components/composed-components/ProcessExplain2';


export const JoinUs = () => {
  return (
    <main>
      <div className="joinUs-page-wrapper">
        <div className="joinUs-title">
          <h2 className="form-heading">Invest in Our Project</h2>
          <p className="form-subtext">
            We’re building the future of fintech and startup support. Join us as an
            investor and grow with us.
          </p>
        </div>

       <ProcessExplain2/>

        {/* <ProcessExplain/> */}


        <div className="joinUs-content justify-center">
          {/* <div className="joinUs-info">
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
          </div> */}

          <div className="joinUs-form">
            <InvestmentForm />
          </div>
        </div>
      </div>
    </main>
  );
};
