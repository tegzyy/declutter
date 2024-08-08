import { Box, Flex, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import CustomInput from '../../../components/customInput/customInput'
import PrimaryButton from '../../../components/primaryButton/primarybutton'
import axiosInstance from '../../../services/api'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  })
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();



  const handleChange = (event) => {
    const { name, value } = event.target;
    if(name === 'phoneNumber') {
      setFormFields({ ...formFields, [name]: value.charAt(0) === '0' ? '+234' + value.slice(1) : '+234' + value});
    } else {
      setFormFields({ ...formFields, [name]: value });
    }
  };

  const createAccount = async(e) => {
    e.preventDefault()
    setLoading(true)

    try {
        const { data } = await axiosInstance.post('auth/sign-up', formFields)
        toast({
          description: data?.message,
          status: "success",
          position: "top-right",
          duration: 5000,
          isClosable: true,
        });
        navigate('/verify')
    } catch(error) {
        toast({
            title: "An Error Occurred",
            description: error?.response?.data?.message,
            status: "error",
            position: "top-right",
            duration: 5000,
            isClosable: true,
          });
    } finally {
        setLoading(false)
    }
  }

  return (
    <Box maxW="500px" mx="auto" h="400px" mt="3rem">
        <Text fontFamily="ClashDisplay-Bold" fontSize={"1.5rem"}>Create an account</Text>
        <Text color="#908888" fontWeight="500">Start buying and selling household items easily</Text>

        <form onSubmit={createAccount}>
            <Flex gap="1rem">
                <CustomInput
                type={'text'}
                required
                placeholder={"First Name"}
                onChange={handleChange}
                name="firstName"
                label="First Name"
                />
                <CustomInput
                type={'text'}
                required
                placeholder={"Last Name"}
                onChange={handleChange}
                name="lastName"
                label={"Last Name"}
                />
            </Flex>
            <CustomInput
            type={'email'}
            required
            placeholder={"Email Address"}
            onChange={handleChange}
            name="email"
            label={"Email Address"}
            />
            <CustomInput
                type={'password'}
                required
                placeholder={"Enter a valid password"}
                onChange={handleChange}
                name="password"
                label={"Password"}
                />
            <CustomInput
                type={'tel'}
                required
                placeholder={"Phone Number"}
                onChange={handleChange}
                name="phoneNumber"
                label={"Phone Number"}
                minLength="11"
                maxLength="11"
                />

                <Text textAlign={"center"} fontSize={".9rem"} mt={"1.2rem"} color={"#8C8C8C"} fontWeight={"400"}>By Creating an account, you agree to our <span style={{color: "#E66F15", fontWeight: '600', cursor: "pointer"}}>Terms & Conditions</span> and <span style={{color: "#E66F15", fontWeight: '700', cursor: "pointer"}}>Privacy Policy</span></Text>
        
                <PrimaryButton my="1.5rem" type="submit" text="Sign Up" loading={loading} />

                <Text textAlign={"center"} fontSize={".9rem"} color={"#8C8C8C"} fontWeight={"400"}>Already a registered user? <span style={{color: "#E66F15", fontWeight: '700', cursor: "pointer"}}>Log In</span></Text>
        </form>
    </Box>
  )
}

export default SignUp