import { CareerForm } from "../components/composed-components/CareerForm";
// import CareerBg from "../assets/images/InfoCard_img7.png";

export const Career = () => {
  return (
    <main className="custom-container-main">
      <div className="career-page-wrapper">
        <div className="career-title">
          <h1>Careers</h1>
        </div>

        <div className="career-content">
          <div className="career-info">
            {/* <img src={CareerBg} alt="Career" /> */}
            <div className="career-details">
              <h3>Join Simplifi Ventures</h3>
              <p>
                Be a part of our growing fintech journey! We’re looking for
                innovative minds ready to shape the digital investment future.
              </p>
            </div>
          </div>

          <div className="career-form-section">
            <CareerForm />
          </div>
        </div>
      </div>
    </main>
  );
};
