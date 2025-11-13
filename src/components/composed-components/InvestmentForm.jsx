import { useState } from "react";
import { InputField } from "../atomic-components/InputField";
import { Dropdown } from "../atomic-components/Dropdown";
import { MessageField } from "../atomic-components/MessageField";
import { Button } from "../atomic-components/Button";
import { PhoneField } from "../atomic-components/PhoneField";
import { DropDownCustom } from "../atomic-components/DropDownCustom";

export const InvestmentForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [investorType, setInvestorType] = useState("Individual");
  const [investmentRange, setInvestmentRange] = useState("₹1L – ₹5L");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
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
    if (!fullName) newErrors.fullName = "Full name is required.";
    if (!email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Enter a valid email.";
    // if (!phone) newErrors.phone = "Phone number is required.";
    // else if (!/^[0-9]{10}$/.test(phone)) newErrors.phone = "Enter a valid 10-digit phone number.";
    if (!phone) newErrors.phone = "Phone number is required.";
    else {

      const digitsOnly = phone.replace(/\D/g, "");
      const lastTenDigits = digitsOnly.slice(-10);

      if (lastTenDigits.length !== 10)
        newErrors.phone = "Enter a valid 10-digit phone number.";
    }
    if (!consent) newErrors.consent = "Please accept the consent.";


    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Investor Type:", investorType);
    console.log("Investment Range:", investmentRange);
    console.log("Message:", message);
    console.log("Consent Given:", consent);

    setSubmitted(true);
    setFullName("");
    setEmail("");
    setPhone("");
    setInvestorType("Individual");
    setInvestmentRange("₹1L – ₹5L");
    setMessage("");
    setConsent(false);
  };

  if (submitted) {
    return (
      <div className="form-success">
        <h3>Thank You for Showing Interest!</h3>
        <p>Our investment team will get in touch with you soon.</p>
        <button className="primary-btn" onClick={() => setSubmitted(false)}>
          Back to Form
        </button>
      </div>
    );
  }

  return (
    <div className="joinus-form">
      <form onSubmit={handleSubmit} className="form-reusable">
        <InputField
          label="Full Name *"
          type="text"
          placeholderText='Enter Full Name'
          value={fullName}
          inputValue={(e) => setFullName(e.target.value)}
          error={errors.fullName}
        />


        <InputField
          label="Email *"
          type="email"
          placeholderText='Enter Email '
          value={email}
          inputValue={(e) => setEmail(e.target.value)}
          error={errors.email}

        />


        <PhoneField
          label="Phone *"
          placeholderText='Enter Phone Number'
          value={phone}
          onChange={setPhone}
          error={errors.phone}
        />


        <div className="investment-form-dropdown">
          <DropDownCustom
            label="Investor Type *"
            value={investorType}
            selectValue={(e) => setInvestorType(e.target.value)}
            optionValue={investorTypes}
          />

          <DropDownCustom
            label="Investment Range *"
            value={investmentRange}
            selectValue={(e) => setInvestmentRange(e.target.value)}
            optionValue={investmentRanges}
          />
        </div>

        <MessageField
          label="Message / Interest"
          enterMessage='Enter Message'
          value={message}
          inputValue={(e) => setMessage(e.target.value)}
        />

        <div className="checkbox-field">
          <input
            type="checkbox"
            id="consent"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
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
