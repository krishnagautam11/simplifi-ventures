import { useState } from "react";
import { InputField } from "../atomic-components/InputField";
import { Dropdown } from "../atomic-components/Dropdown";
import { MessageField } from "../atomic-components/MessageField";

export const InvestmentForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [investorType, setInvestorType] = useState("Individual");
  const [investmentRange, setInvestmentRange] = useState("₹1L – ₹5L");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Dropdown options
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

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !email || !phone || !consent) {
      alert("Please fill all required fields and accept the consent.");
      return;
    }

    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Investor Type:", investorType);
    console.log("Investment Range:", investmentRange);
    console.log("Message:", message);
    console.log("Consent Given:", consent);

    // Simulate success popup
    setSubmitted(true);
    setFullName("");
    setEmail("");
    setPhone("");
    setInvestorType("Individual");
    setInvestmentRange("₹1L – ₹5L");
    setMessage("");
    setConsent(false);
  };

  // Success message UI
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
    <div className=" joinus-form">
      <h2 className="form-heading">Invest in Our Project</h2>
      <p className="form-subtext">
        We’re building the future of fintech and startup support. Join us as an
        investor and grow with us.
      </p>

      <form onSubmit={handleSubmit} className="form-reusable">
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

        <Dropdown
          label="Investor Type"
          value={investorType}
          selectValue={(e) => setInvestorType(e.target.value)}
          optionValue={investorTypes}
        />

        <Dropdown
          label="Investment Range"
          value={investmentRange}
          selectValue={(e) => setInvestmentRange(e.target.value)}
          optionValue={investmentRanges}
        />

        <MessageField
          label="Message / Interest"
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

        <button type="submit" className="primary-btn">
          Submit Interest
        </button>
      </form>
    </div>
  );
};
