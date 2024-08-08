import { Box, Heading, Text } from "@chakra-ui/react";
import FormInput from "../form-input/formInput.component";
import Button from "../../buttons/buttons.component";
import { useState } from "react";
import "./signUp.styles.scss";
import PasswordInput from "../passwordInpu/passwordInput.component";
import PhoneNumberInput from "../phoneNumberInput/phoneNumberInput.component";
import { Link } from "react-router-dom";
import "../public.fonts/css/clash-display.css";

const defaultFormFields = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
};

function SignUp() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password, firstName, lastName, phoneNumber } = formFields;
  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const createAccount = async (e) => {
    e.preventDefault();
    setLoading(true)
    console.log("sign up payload", formFields);

    // try {
    //   const { data } = await
    // } catch(error) {
    //     console.log(error)
    // } finally {
    //     setLoading(false)
    // }
  };

  return (
    <Box w="460px" h="684px" className="passo" m="auto">
      <Heading fontFamily="ClashDisplay-Bold">Create an account</Heading>
      <Text color="gray">Start buying and selling household items easily</Text>
      <form onSubmit={createAccount}>
        <Box w="400px" h="80px" display="flex" gap="4px" mb="30px" pb="40px">
          <FormInput
            label="First Name"
            type="text"
            placeholder="John"
            required
            onChange={handleChange}
            name="firstName"
            value={firstName}
          />

          <FormInput
            label="Last Name"
            type="text"
            placeholder="Doe"
            required
            onChange={handleChange}
            name="lastName"
            value={lastName}
          />
        </Box>

        <FormInput
          label="Email address"
          type="email"
          placeholder="you@mail.com"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <PasswordInput
          label="Password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Enter a valid password"
        />

        <FormInput
          label="Phone Number"
          type="tel"
          placeholder=""
          required
          onChange={handleChange}
          name="phoneNumber"
          value={phoneNumber}
          minLength="11"
          maxlength="11"
        />

        {/* <PhoneNumberInput /> */}

        <Box>
          <Text color="gray" fontSize="12px" w="360px">
            By creating an account, you agree to our
            <span style={{ color: "#E66F15", marginLeft: "5px" }}>
              Terms & Conditions and Privacy Policy
            </span>
          </Text>{" "}
        </Box>

        <Button buttonType="inverted">{loading ? 'loading..' : 'Sign Up'}</Button>

        <Text
          color="gray"
          fontSize="12px"
          w="250px"
          display="flex"
          textAlign="center"
          justifyContent="center"
          pl="15px"
          mt="10px"
        >
          Already a registered user?
          <Link to="/sign-in">
            <span style={{ color: "#E66F15", marginLeft: "5px" }}>Log In</span>{" "}
          </Link>
        </Text>
      </form>{" "}
    </Box>
  );
}

export default SignUp;
