import { useState } from "react";
import { InputField } from "../atomic-components/InputField";
import { MessageField } from '../atomic-components/MessageField';
import { Button } from "../atomic-components/Button";

export const Form = () => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!firstName) newErrors.firstName = "First name is required.";
        if (!lastName) newErrors.lastName = "Last name is required.";
        if (!email) newErrors.email = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Enter a valid email.";
        if (!phone) newErrors.phone = "Phone number is required.";
        else if (!/^[0-9]{10}$/.test(phone)) newErrors.phone = "Enter a valid 10-digit phone number.";


        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("Email:", email);
        console.log("Phone:", phone);

        console.log("Message:", message);

        setSubmitted(true);
        setfirstName("");
        setlastName("");
        setEmail("");
        setPhone("");
        setMessage("");
    };


    if (submitted) {
        return (
            <div className="form-success">
                <h3>Thank You for Showing Interest!</h3>
                <p>Our team will get in touch with you soon.</p>
                <button className="primary-btn" onClick={() => setSubmitted(false)}>
                    Back to Form
                </button>
            </div>
        );
    }

    return (
        <>
            <div className="form-reusable">
                <InputField
                    label='First Name'
                    type='text'
                    placeholderText='Enter First Name'
                    value={firstName}
                    inputValue={(e) => setfirstName(e.target.value)}
                    error={errors.firstName}
                />

                <InputField
                    label='Last Name'
                    type='text'
                    placeholderText='Enter Last Name'
                    value={lastName}
                    inputValue={(e) => setlastName(e.target.value)}
                    error={errors.lastName}
                />

                <InputField
                    label='Email'
                    type='email'
                    placeholderText='Enter Email'
                    value={email}
                    inputValue={(e) => setEmail(e.target.value)}
                    error={errors.email}
                />

                <InputField
                    label='Phone'
                    type='tel'
                    placeholderText='Enter Phone Number'
                    value={phone}
                    inputValue={(e) => {
                        const onlyNums = e.target.value.replace(/\D/g, '').slice(0, 10);
                        setPhone(onlyNums);
                    }}

                    error={errors.phone}
                />

                <MessageField
                    label='Message'
                    type='text'
                    enterMessage='Enter Message'
                    value={message}
                    inputValue={(e) => setMessage(e.target.value)}
                />


                {/* <button type="submit" className="primary-btn" onClick={handleSubmit}>submit</button> */}
            </div>
            <div className="form-btn">
                <Button btnType="submit" className="primary-btn" btnText="Submit" submitForm={handleSubmit} />
            </div>
        </>
    )
}