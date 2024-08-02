import { Box, Text, } from "@chakra-ui/react"
import '../public.fonts/css/clash-display.css'
import Button from "../../buttons/buttons.component"
import OtpInput from "react-otp-input"
import { useState } from "react"
import "./verifyEmail.styles.scss"



function VerifyEmail(){
    const [otp, setOtp] = useState('')
    const [isFocused, setIsFocused] = useState(false)

    const handleFocus = ()=>{
      setIsFocused(true)
    }

    const handleBlur=()=>{
      setIsFocused(false)
    }
    
    const handleChange = (otp) => {
        setOtp(otp)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log('OTP Submitted:',otp)
        //Add your submission logic here
    }

    return(
       <Box className="verify-email-wrapper">
       <Text fontSize='24px' fontFamily='ClashDisplay-Bold'>Verify Email </Text>
       <Text color='gray' w='476px' fontSize='20px'>
       We just sent a verification code to your email address</Text>
       <Box className="otp">
       <form onSubmit={handleSubmit}>
      
         <OtpInput onFocus={handleFocus}
         onBlur={handleBlur}
           value={otp}
           onChange={handleChange}
           numInputs={4}
           separator={<span>-</span>}
           renderInput={(props)=><input{...props}/>}
           inputStyle = {{
            width: '70px',
            height: '70px',
            marginTop: '30px',
            fontSize: '1.5rem',
            borderRadius: '4px',
            border: '1px solid black',
            backgroundColor: isFocused ? 'white' : 'gray',
            marginLeft:'30px' }} />
       
     </form></Box>
       
       <Text fontSize='16px' w='300px' m='auto'> Didn't recieve a code?
       <span style={{color: '#E66F15', fontWeight:'400px'}}>
       Click to resend</span> </Text>
       <Button buttonType='grayscale'>Verify email</Button>
       </Box> 
    )
}

export default VerifyEmail