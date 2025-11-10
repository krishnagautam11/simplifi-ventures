import { CareerForm } from "../components/composed-components/CareerForm";
// import CareerBg from "../assets/images/InfoCard_img7.png";

export const Career = () => {
  return (
    <main className="custom-container-main">
      <div className="career-page-wrapper">
        <div className="career-title">
          <h2 className="form-heading">Join Our Team</h2>
          <p className="form-subtext">
            We’re always looking for passionate talent. Fill out the form and upload your resume below.
          </p>

        </div>

        <div className="career-content">

          <div className="career-form-section">
            <CareerForm />
          </div>
        </div>
      </div>
    </main>
  );
};
