import { Box, Text } from "@chakra-ui/react"
import '../public.fonts/css/clash-display.css'
import FormInput from "../form-input/formInput.component"
import { useState } from "react"
import Button from "../../buttons/buttons.component"

function PasswordReset(){
    const [email, setEmail] = useState('')

    const HandleChange = (event)=>{
        const value = event.target.value

        setEmail(value)
    }

    return(
       <Box w='400px' h='258px' m='auto' >
       <Text fontSize='24px' fontFamily='ClashDisplay-Bold'>Reset Password</Text>
       <Text>We will send a new password to your email address</Text>
       <form>
       <Box w='443px'>
       <FormInput label="Email address" type="email" placeholder="you@mail.com"
    required onChange={HandleChange}
   name="email" value={email}/>

        <Button buttonType='grayscale'>Forgot Password</Button> </Box>
       </form>

       </Box>
    )
}

export default PasswordReset