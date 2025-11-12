import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export const PhoneField = ({ label, value, onChange, error }) => {
  return (
    <div className="input-fields phone-input-field">
      <label>{label}</label>
      <PhoneInput
        country={"us"}           
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
      {error && <p className="error-text">{error}</p>}
    </div>
  );
};
