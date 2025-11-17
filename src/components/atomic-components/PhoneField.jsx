import { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export const PhoneField = ({ label, value, onChange, error }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const countryBtn = document.querySelector(".country-btn");

    if (!countryBtn) return;

    const toggleOpen = () => setOpen((prev) => !prev);
    countryBtn.addEventListener("click", toggleOpen);

    // Close when clicking outside
    const handleClickOutside = (e) => {
      if (
        !e.target.closest(".country-list") &&
        !e.target.closest(".country-btn")
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      countryBtn.removeEventListener("click", toggleOpen);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


  return (
    <div className="input-fields phone-input-field flex flex-col gap-1">
      <label className="font-medium">{label}</label>

      <div className="phone-input-wrapper relative flex items-center">
        <PhoneInput
          country="us"
          value={value}
          onChange={onChange}
          enableSearch={false}
          disableSearchIcon={true}
          inputProps={{
            name: "phone",
            required: true,
            autoFocus: false,
          }}
          inputClass="phone-input"
          buttonClass="country-btn"
        />
        <span className={`custom-arrow-phone-field ${open ? "open" : ""}`}></span>
      </div>

      {error && <p className="error-text">{error}</p>}
    </div>


    // <div className="input-fields phone-input-field">
    //   <label>{label}</label>
    //   <div className="phone-input-wrapper">
    //     <PhoneInput
    //       country={"us"}
    //       value={value}
    //       onChange={onChange}
    //       enableSearch={false}
    //       disableSearchIcon={true}

    //       inputProps={{
    //         name: "phone",
    //         required: true,
    //         autoFocus: false,
    //       }}
    //       inputClass="phone-input"
    //       buttonClass="country-btn"


    //     />
    //     <span className={`custom-arrow-phone-field ${open ? "open" : ""}`}></span>
    //   </div>

    //   {error && <p className="error-text">{error}</p>}
    // </div>
  );
};
