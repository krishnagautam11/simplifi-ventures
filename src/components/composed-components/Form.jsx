import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { InputField } from "../atomic-components/InputField";
import { MessageField } from '../atomic-components/MessageField';
import { Button } from "../atomic-components/Button";
import { PhoneField } from "../atomic-components/PhoneField";
import { SuccessMessage } from "./SucessMessage";

export const Form = () => {

    const [messageClose, setMessageClose] = useState(false);

    const { formData, updateForm } = useAppContext();

    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!formData.fullName) newErrors.fullName = "Full name is required";
        if (!formData.email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Enter a valid email";

        if (!formData.phone) newErrors.phone = "Phone number is required.";
        else {
            const digitsOnly = formData.phone.replace(/\D/g, "");
            const lastTenDigits = digitsOnly.slice(-10);
            if (lastTenDigits.length !== 10)
                newErrors.phone = "Enter a valid 10-digit phone number.";
        }

        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;

        console.log("Full Name:", formData.fullName);
        console.log("Email:", formData.email);
        console.log("Phone:", formData.phone);
        console.log("Message:", formData.message);

        setSubmitted(true);

        updateForm({
            fullName: "",
            email: "",
            phone: "",
            message: "",
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

                {/* <h3>Thank You!</h3>
                <p>Our team will get in touch with you soon.</p>
                <button className="primary-btn" onClick={() => setSubmitted(false)}>
                    Back to Form
                </button> */}
            </div>
        );
    }

    return (
        <>
            <div className="form-reusable">
                <InputField
                    label='Full Name *'
                    type='text'
                    placeholderText='Enter Full Name'
                    value={formData.fullName || ""}
                    inputValue={(e) => updateForm({ fullName: e.target.value })}
                    error={errors.fullName}
                />

                <InputField
                    label='Email *'
                    type='email'
                    placeholderText='Enter Email'
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

                <MessageField
                    label='Message *'
                    enterMessage='Enter Message'
                    value={formData.message || ""}
                    inputValue={(e) => updateForm({ message: e.target.value })}
                />
            </div>

            <div className="form-btn">
                <Button
                    btnType="submit"
                    className="primary-btn"
                    btnText="Submit"
                    submitForm={handleSubmit}
                />
            </div>
        </>
    );
};
