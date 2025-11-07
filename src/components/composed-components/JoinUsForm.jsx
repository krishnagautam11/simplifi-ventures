import { useState } from "react";
import { InputField } from "../atomic-components/InputField";
import { Dropdown } from "../atomic-components/Dropdown";
import { RadioField } from "../atomic-components/RadioField";
import {MessageField} from '../atomic-components/MessageField'

export const Form = () => {
    const [companyName, setCompanyName] = useState('');
    const [companySize, setCompanySize] = useState('');
    const [email, setEmail] = useState('');
    const [companyWebsite, setCompanyWebsite] = useState('');
    const [industry, setIndustry] = useState('');
     const [productDescription, setProductDescription] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedValue, setSelectedValue] = useState('General Inquiry');
    const [radioValue, setRadioValue] = useState('');

    const fruits = [
        { value: 'General Inquiry', label: 'General Inquiry' },
        { value: 'banana', label: 'Banana' },
        { value: 'orange', label: 'Orange' },
        { value: 'kiwi', label: 'kiwi' }
    ];

    const radios = [
        { value: 'male', label: 'male' },
        { value: 'female', label: 'female' }
    ]




    function handleSubmit(e) {

        e.preventDefault();
        let isValid = true;

        if (firstName == '') {

            isValid = false;

        }
        if (lastName == '') {

            isValid = false;

        }
        if (email == '') {

            isValid = false;

        }

        if (isValid) {
            console.log("first name is :", firstName)
            console.log("last name is :", lastName)
            console.log("email is :", email)
            console.log("password is :", password)
            console.log("phone is :", phone)
            console.log("dropdown value is :", selectedValue)
            console.log("radio value is :", radioValue)
        }
    }


    return (
        <>
            <div className="form-resuable">
                <InputField
                    label='First Name'
                    type='text'
                    value={firstName}
                    inputValue={(e) => setfirstName(e.target.value)}
                />

                <InputField
                    label='Last Name'
                    type='text'
                    value={lastName}
                    inputValue={(e) => setlastName(e.target.value)}
                />

                <InputField
                    label='Email'
                    type='email'
                    value={email}
                    inputValue={(e) => setEmail(e.target.value)}
                />

                <InputField
                    label='Phone'
                    type='number'
                    value={phone}
                    inputValue={(e) => setPhone(e.target.value)}
                />

                <MessageField
                    label='Message'
                    type='text'
                    value={message}
                    inputValue={(e) => setMessage(e.target.value)}
                />

                {/* <InputField
                    label='Password'
                    type='password'
                    value={password}
                    inputValue={(e) => setPassword(e.target.value)}
                /> */}

                {/* <Dropdown
                    label='dropdown'
                    optionValue={fruits}
                    value={selectedValue}
                    selectValue={(e) => setSelectedValue(e.target.value)}
                /> */}
                {/* <RadioField
                    label='Radio'
                    name='gender'
                    type='radio'
                    value={radioValue}
                    radioOption={radios}
                    radioSelectValue={(e) => setRadioValue(e.target.value)}
                /> */}



                <button type="submit" className="primary-btn" onClick={handleSubmit}>submit</button>
            </div>
        </>
    )
}