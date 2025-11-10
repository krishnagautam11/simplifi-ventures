import { useState } from "react";
import { InputField } from "../atomic-components/InputField";
import { MessageField } from "../atomic-components/MessageField";
import { FileDropField } from "../atomic-components/FileDropField";
import { Dropdown } from "../atomic-components/Dropdown";
import { Button } from "../atomic-components/Button";

export const CareerForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [message, setMessage] = useState("");
  const [resume, setResume] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const OpenPositions = [
    { value: "React Native Developer", label: "Frontend Developer" },
    { value: "Node Developer", label: "Node Developer" },
    { value: "Customer Desk", label: "Customer Desk" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!fullName) newErrors.fullName = "Full name is required.";
    if (!email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Enter a valid email.";
    if (!phone) newErrors.phone = "Phone number is required.";
    else if (!/^[0-9]{10}$/.test(phone)) newErrors.phone = "Enter a valid 10-digit phone number.";
    if (!resume) newErrors.consent = "Please upload your resume.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);


    setSubmitted(true);
    setFullName("");
    setEmail("");
    setPhone("");
    setMessage("");
  
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
    <div className=" career-form">

      <form className="form-reusable" onSubmit={handleSubmit}>
        <InputField
          label="Full Name"
          type="text"
          value={fullName}
          inputValue={(e) => setFullName(e.target.value)}
          error={errors.fullName}
        />
        <InputField
          label="Email"
          type="email"
          value={email}
          inputValue={(e) => setEmail(e.target.value)}
          error={errors.email}
        />
        <InputField
          label="Phone"
          type="tel"
          value={phone}
          inputValue={(e) => setPhone(e.target.value)}
          error={errors.phone}
        />

        <Dropdown
          label="Position Applying For"
          value={position}
          selectValue={(e) => setPosition(e.target.value)}
          optionValue={OpenPositions}
          error={errors.position}
        />

        <MessageField
          label="Message / Cover Letter"
          value={message}
          inputValue={(e) => setMessage(e.target.value)}
        />
        <FileDropField
          label="Upload Resume"
          onFileSelect={(file) => setResume(file)}
          error={errors.resume}
        />

        <Button btnType="submit" className="primary-btn" btnText="Submit Application"/>
      </form>
    </div>
  );
};
