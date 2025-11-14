import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { InputField } from "../atomic-components/InputField";
import { MessageField } from "../atomic-components/MessageField";
import { FileDropField } from "../atomic-components/FileDropField";
import { Button } from "../atomic-components/Button";
import { PhoneField } from "../atomic-components/PhoneField";
import { DropDownCustom } from "../atomic-components/DropDownCustom";
import { SuccessMessage } from "./SucessMessage";

export const CareerForm = () => {
  const { formData, updateForm } = useAppContext();
  const [messageClose, setMessageClose] = useState(false);
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

    if (!formData.fullName) newErrors.fullName = "Full name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email.";

    if (!formData.phone) newErrors.phone = "Phone number is required.";
    else {
      const digitsOnly = formData.phone.replace(/\D/g, "");
      const lastTenDigits = digitsOnly.slice(-10);
      if (lastTenDigits.length !== 10)
        newErrors.phone = "Enter a valid 10-digit phone number.";
    }

    if (!formData.resume) newErrors.resume = "Please upload your resume.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    console.log("Full Name:", formData.fullName);
    console.log("Email:", formData.email);
    console.log("Phone:", formData.phone);
    console.log("Position:", formData.position);
    console.log("Message:", formData.message);

    setSubmitted(true);

    updateForm({
      fullName: "",
      email: "",
      phone: "",
      position: "React Native Developer",
      message: "",
      resume: null,
    });
  };

  const closeMessage = (e) => {

    setMessageClose(true)
    setSubmitted(false)
  }

  if (submitted) {
    return (
      <div className="form-success">

        <SuccessMessage closeMessage={closeMessage} messageClose={messageClose} />

        {/* <h3>Application Submitted!</h3>
        <p>Thank you for applying. Our HR team will contact you soon.</p>
        <button className="primary-btn" onClick={() => setSubmitted(false)}>
          Back to Form
        </button> */}
      </div>
    );
  }




  return (
    <div className="career-form">
      <form className="form-reusable" onSubmit={handleSubmit}>

        <InputField
          label="Full Name *"
          type="text"
          placeholderText="Enter Full Name"
          value={formData.fullName || ""}
          inputValue={(e) => updateForm({ fullName: e.target.value })}
          error={errors.fullName}
        />

        <InputField
          label="Email *"
          type="email"
          placeholderText="Enter Email"
          value={formData.email || ""}
          inputValue={(e) => updateForm({ email: e.target.value })}
          error={errors.email}
        />

        <PhoneField
          label="Phone *"
          value={formData.phone || ""}
          onChange={(val) => updateForm({ phone: val })}
          error={errors.phone}
        />

        <DropDownCustom
          label="Position Applying For *"
          value={formData.position || "React Native Developer"}
          selectValue={(e) => updateForm({ position: e.target.value })}
          optionValue={OpenPositions}
        />

        <MessageField
          label="Message / Cover Letter"
          enterMessage="Enter Message"
          value={formData.message || ""}
          inputValue={(e) => updateForm({ message: e.target.value })}
        />

        <FileDropField
          label="Upload Resume"
          onFileSelect={(file) => updateForm({ resume: file })}
          error={errors.resume}
        />

        <Button
          btnType="submit"
          className="primary-btn"
          btnText="Submit Application"
        />
      </form>
    </div>
  );
};
