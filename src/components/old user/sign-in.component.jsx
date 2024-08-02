import { Box } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import Button from "../buttons/buttons.component"
import GoogleIcon from "../buttons/icons/icons"
import InstagramIcon from "../buttons/icons/instagamIcon"
import { Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import '../authentication flow/public.fonts/css/clash-display.css'

function SignIn(){

    const rectangle = {
        width: '200px',
        height: '0.5px',
        backgroundColor: '#EFEDED',
        border: '2px solid #EFEDED',
        marginTop: '10px',
    }
    return(
        
        <Box w='456px' h='382px' margin='auto'>
        <Heading><Text fontFamily='ClashDisplay-Bold'>WelcomeBack</Text></Heading>
        <Text color='GrayText'>
        continue buying and selling household items easily </Text>
        <Link to="/sign-in">
        <Button>Log in with Email</Button> </Link>
        <Box w='443px' h='190px' margin='auto' pt='40px'>
        <Box w='363px' h='24px' display='flex' justifyContent='space-between' gap='20px'>
        <span style={rectangle}/> or <span style={rectangle}/>
        
        </Box>
        <Box w='363px' pr='40px' h='35px' display='flex' gap='5px' cursor='pointer' pt='3px'
        margin='auto' justifyContent='center' border= '1px solid black' mt='15px' ml='0px'>
        <GoogleIcon/> Sign In With Google
        </Box>
        <Box w='363px' pr='40px' h='35px' display='flex' gap='5px' cursor='pointer' pt='3px'
        margin='auto' justifyContent='center' border= '1px solid black' mt='15px' ml='0px'>
        <InstagramIcon/> Sign In With Instagram
        </Box>
        </Box>

        Not a registered user? 
        <Link to='/sign-up'><span style={{color: '#E66F15', fontWeight:'400px'}}>Create an account</span> </Link> 
        
        </Box>
    )
}

export default SignIn