
import { useState } from 'react';
import OTPInput from 'react-otp-input';

const OtpInput = () => {
    const [otp, setOtp] = useState('');
  
    const handleChange = (otp) => {
      setOtp(otp);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('OTP Submitted:', otp);
      // Add your submission logic here
    };
  
    return (
        <div>
      <form onSubmit={handleSubmit}>
        
          <OTPInput
            value={otp}
            onChange={handleChange}
            numInputs={6}
            separator={<span>-</span>}
            inputStyle={{
              width: '2rem',
              height: '2rem',
              margin: '0 0.5rem',
              fontSize: '1.5rem',
              borderRadius: '4px',
              border: '1px solid rgba(0,0,0,0.3)',
            }}
          />
       
        <button type="submit">Submit OTP</button>
      </form>  </div>
    );
  };
  
  export default OtpInput;