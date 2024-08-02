import { Heading, Text, Box } from "@chakra-ui/react"
import { useState } from "react"
import FormInput from "./form-input/formInput.component"
import Button from "../buttons/buttons.component"
import { Link } from "react-router-dom"
import '../authentication flow/public.fonts/css/clash-display.css'

const defaultFormFields = {
    email: '',
    password: ''
}

function LogIn(){
    
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password} = formFields

    const handleChange = (event)=>{
        const {name, value} = event.target

        setFormFields({...formFields, [name]:value})
    }


    return(
    <Box w='457px' h='422px' m='auto'>
    <Heading><Text fontFamily='ClashDisplay-Bold'>Log In</Text></Heading>
    <Text color='gray'>Continue buying and selling household items easily</Text>
    <form>
    <FormInput label="Email address" type="email" placeholder="you@mail.com"
    required onChange={handleChange}
   name="email" value={email}/>

   <FormInput label="Password" type="password" placeholder="enter a valid password"
   required onChange={handleChange}
    name="password" value={password}/>
    <Link to='/password-reset'>
        Forgot password? </Link>
        <Button buttonType='grayscale'>Log in</Button>

        Not a registered user? <Link to='/new-user'>
        <span style={{color: '#E66F15', fontWeight:'400px'}}>Create an account</span>
        </Link>
    </form>
    </Box>
    
    )
}

export default LogIn