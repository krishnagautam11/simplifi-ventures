import { useState } from "react";
import { InputField } from "../atomic-components/InputField";
import { MessageField } from "../atomic-components/MessageField";
import { FileDropField } from "../atomic-components/FileDropField";

export const CareerForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [message, setMessage] = useState("");
  const [resume, setResume] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !email || !phone || !position || !resume) {
      alert("Please fill all required fields and upload your resume.");
      return;
    }

    console.log("Career form submission:");
    console.log({ fullName, email, phone, position, message, resume });

    setSubmitted(true);
    // Clear fields
    setFullName("");
    setEmail("");
    setPhone("");
    setPosition("");
    setMessage("");
    setResume(null);
  };

  if (submitted) {
    return (
      <div className="form-success">
        <h3>Application Submitted!</h3>
        <p>Thank you for applying. Our HR team will contact you soon.</p>
        <button className="primary-btn" onClick={() => setSubmitted(false)}>
          Back to Form
        </button>
      </div>
    );
  }

  return (
    <div className="form-reusable career-form">
      <h2 className="form-heading">Join Our Team</h2>
      <p className="form-subtext">
        We’re always looking for passionate talent. Fill out the form and upload your resume below.
      </p>

      <form onSubmit={handleSubmit}>
        <InputField
          label="Full Name"
          type="text"
          value={fullName}
          inputValue={(e) => setFullName(e.target.value)}
        />
        <InputField
          label="Email"
          type="email"
          value={email}
          inputValue={(e) => setEmail(e.target.value)}
        />
        <InputField
          label="Phone"
          type="tel"
          value={phone}
          inputValue={(e) => setPhone(e.target.value)}
        />
        <InputField
          label="Position Applying For"
          type="text"
          value={position}
          inputValue={(e) => setPosition(e.target.value)}
        />
        <MessageField
          label="Message / Cover Letter"
          value={message}
          inputValue={(e) => setMessage(e.target.value)}
        />
        <FileDropField
          label="Upload Resume"
          onFileSelect={(file) => setResume(file)}
        />

        <button type="submit" className="primary-btn">Submit Application</button>
      </form>
    </div>
  );
};
