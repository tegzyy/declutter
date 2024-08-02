import { useState } from "react";
import PropTypes from 'prop-types'
import { FaRegEye } from "react-icons/fa"
import { FaRegEyeSlash } from "react-icons/fa"

const NormalPasswordInput = ({ label, name, value, onChange, placeholder }) => {
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
      </div>
    );
  };
  
  NormalPasswordInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
  };
  
  NormalPasswordInput.defaultProps = {
    placeholder: '',
  };
  
  export default NormalPasswordInput;