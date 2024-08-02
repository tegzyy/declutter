import { Box, Text } from "@chakra-ui/react"
import '../public.fonts/css/clash-display.css'
import PasswordInput from "../passwordInpu/passwordInput.component"
import NormalPasswordInput from "../passwordInpu/NormalPasswordInput"
import Button from "../../buttons/buttons.component"


function NewPassword(){
   

    return(
       <Box w='443px' h='492px'>
       <Text fontSize='24px' fontFamily='ClashDisplay-Bold' >New Password</Text>

       <Text color='#908888' mt='20px' mb='30px' p='0px'>Set up a new password</Text>
        <form>
       <Box mb='20px'>
       <NormalPasswordInput label='Old password' placeholder='enter a password'/> </Box>
       <Box mb='20px'>
       <PasswordInput label='New password' placeholder='enter a password' newpass/> </Box>
       <Box mt='30px'>
       <NormalPasswordInput label='Confirm password' placeholder='enter a password'/> </Box> 
       <Button buttonType='grayscale'>Set Up Password</Button>
       </form>
       </Box>

    )
}

export default NewPassword