import SuccessLogo from "./successLogo"
import '../public.fonts/css/clash-display.css'
import { Text, Box} from "@chakra-ui/react"
import Button from "../../buttons/buttons.component"

function EmailSuccessfulPage(){
    return(
        <Box w='535px' h='701px'>
        <SuccessLogo/>
        <Text w='401px' h='32px' fontSize='24px' fontFamily='ClashDisplay-Bold' m='auto'
        justifyContent='center' pl='50px'>Email sent successfully!</Text>
        <Text w='378px' h='28px' fontSize='15px' fontFamily='ClashDisplay-Regular' 
        display='flex' justifyContent='center' m='auto' mt='10px' pb='55px' >
        We have sent a new password to your email address</Text>
        <Button buttonType='googleSignIn'>Continue</Button>

        </Box>
    )
}

export default EmailSuccessfulPage