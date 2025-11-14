import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { InputField } from "../atomic-components/InputField";
import { MessageField } from "../atomic-components/MessageField";
import { Button } from "../atomic-components/Button";
import { PhoneField } from "../atomic-components/PhoneField";
import { DropDownCustom } from "../atomic-components/DropDownCustom";
import { SuccessMessage } from "./SucessMessage";

export const InvestmentForm = () => {
  const { formData, updateForm } = useAppContext();

  const [messageClose, setMessageClose] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const investorTypes = [
    { value: "Individual", label: "Individual" },
    { value: "Company", label: "Company" },
    { value: "Institutional", label: "Institutional" },
  ];

  const investmentRanges = [
    { value: "₹1L – ₹5L", label: "₹1L – ₹5L" },
    { value: "₹5L – ₹25L", label: "₹5L – ₹25L" },
    { value: "₹25L – ₹1Cr", label: "₹25L – ₹1Cr" },
    { value: "₹1Cr+", label: "₹1Cr+" },
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

    if (!formData.consent) newErrors.consent = "Please accept the consent.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    console.log("Full Name:", formData.fullName);
    console.log("Email:", formData.email);
    console.log("Phone:", formData.phone);
    console.log("Investor Type:", formData.investorType);
    console.log("Investment Range:", formData.investmentRange);
    console.log("Message:", formData.message);
    console.log("Consent Given:", formData.consent);

    setSubmitted(true);

    updateForm({
      fullName: "",
      email: "",
      phone: "",
      investorType: "Individual",
      investmentRange: "₹1L – ₹5L",
      message: "",
      consent: false,
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

        {/* <h3>Thank You for Showing Interest!</h3>
        <p>Our investment team will get in touch with you soon.</p>
        <button className="primary-btn" onClick={() => setSubmitted(false)}>
          Back to Form
        </button> */}
      </div>
    );
  }

  return (
    <div className="joinus-form">
      <form onSubmit={handleSubmit} className="form-reusable">

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
          placeholderText="Enter Phone Number"
          value={formData.phone || ""}
          onChange={(val) => updateForm({ phone: val })}
          error={errors.phone}
        />

        <div className="investment-form-dropdown">
          <DropDownCustom
            label="Investor Type *"
            value={formData.investorType || "Individual"}
            selectValue={(e) => updateForm({ investorType: e.target.value })}
            optionValue={investorTypes}
          />

          <DropDownCustom
            label="Investment Range *"
            value={formData.investmentRange || "₹1L – ₹5L"}
            selectValue={(e) => updateForm({ investmentRange: e.target.value })}
            optionValue={investmentRanges}
          />
        </div>

        <MessageField
          label="Message / Interest"
          enterMessage="Enter Message"
          value={formData.message || ""}
          inputValue={(e) => updateForm({ message: e.target.value })}
        />

        <div className="checkbox-field">
          <input
            type="checkbox"
            id="consent"
            checked={formData.consent || false}
            onChange={(e) => updateForm({ consent: e.target.checked })}
          />
          <label htmlFor="consent">
            I agree to be contacted regarding investment opportunities.
          </label>
        </div>
        {errors.consent && <p className="error-text">{errors.consent}</p>}

        <Button btnType="submit" className="primary-btn" btnText="Submit" />
      </form>
    </div>
  );
};
