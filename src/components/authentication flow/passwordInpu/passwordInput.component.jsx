import PropTypes from 'prop-types'
import { useState } from 'react'
import './passwordInput.scss'
import { FaRegEye } from "react-icons/fa"
import { FaRegEyeSlash } from "react-icons/fa"

const PasswordInput = ({ label, name, value, onChange, placeholder }) => {
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

  
    return (
      <div className="password-input-group">
        {label && <label htmlFor={name}>{label}</label>}
        <div className="password-input-wrapper ">
          <input
            type={showPassword ? 'text' : 'password'}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="form-control"
            
          />
           <button
            type="button"
            className="password-toggle-icon"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaRegEyeSlash/> : <FaRegEye/>}
           
          </button>
          
        </div>
        <span className="pass-text">Must be a min of 8 characters including numbers and letters</span>
      </div>
    );
  };
  
  PasswordInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
  };
  
  PasswordInput.defaultProps = {
    placeholder: '',
  };
  
  export default PasswordInput;