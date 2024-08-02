import { useState } from "react";
import './phoneNumberInput.styles.scss'

const PhoneNumberInput = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const formatPhoneNumber = (value) => {
        // Remove all non-digit characters
        const phoneNumberDigits = value.replace(/\D/g, '');

        // Format as (123) 456-7890
        const formattedPhoneNumber = phoneNumberDigits.replace(
            /^(\d{3})(\d{3})(\d{4})$/,
            '($1) $2-$3'
        );

        return formattedPhoneNumber;
    };

    const handleChange = (e) => {
        const input = e.target.value;
        const formattedInput = formatPhoneNumber(input);
        setPhoneNumber(formattedInput);
    };

    const validatePhoneNumber = (value) => {
        const phoneNumberDigits = value.replace(/\D/g, '');
        return phoneNumberDigits.length === 10;
    };

    const handleBlur = () => {
        if (!validatePhoneNumber(phoneNumber)) {
            alert('Please enter a valid 10-digit phone number');
        }
    };

    return (
        <div className="phone-number-input">
            <label htmlFor="phone">Phone Number (optional)</label>
            <input
                type="text"
                id="phone"
                value={phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="enter a valid phone number"
                maxLength="15" // To accommodate the formatted length
            />
        </div>
    );
};

export default PhoneNumberInput