import SuccessLogo from "./successLogo"
import '../public.fonts/css/clash-display.css'
import { Text, Box} from "@chakra-ui/react"
import Button from "../../buttons/buttons.component"

function SuccessfulPage(){
    return(
        <Box w='535px' h='701px'>
        <SuccessLogo/>
        <Text w='133px' fontSize='24px' fontFamily='ClashDisplay-Bold' m='auto' 
        justifyContent='center' display='flex'>Awesome!</Text>
        <Text w='366px' h='28px' fontSize='18px' fontFamily='ClashDisplay-Regular' 
        display='flex' justifyContent='center' m='auto' pb='55px' >
        You have successfully created an account</Text>
        <Button buttonType='googleSignIn'>Continue</Button>

        </Box>
    )
}

export default SuccessfulPage