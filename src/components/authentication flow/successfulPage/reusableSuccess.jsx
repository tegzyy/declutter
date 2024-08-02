import SuccessLogo from "./successLogo"
import '../public.fonts/css/clash-display.css'
import { Text, Box} from "@chakra-ui/react"
import Button from "../../buttons/buttons.component"

function PasswordSuccessfulPage(){
    return(
        <Box w='535px' h='701px'>
        <SuccessLogo/>
        <Text w='401px' h='32px' fontSize='23px' fontFamily='ClashDisplay-Bold' m='auto'
        justifyContent='center'>Password Successfully Changed!</Text>
        <Text w='378px' h='28px' fontSize='16px' fontFamily='ClashDisplay-Regular' 
        display='flex' justifyContent='center' m='auto' mt='10px' pb='55px' >
        You can now log in with your new password</Text>
        <Button buttonType='googleSignIn'>Continue</Button>

        </Box>
    )
}

export default PasswordSuccessfulPage