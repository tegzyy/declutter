import React, { useState } from "react";
import { Box, FormControl, FormLabel, Input, InputGroup, InputLeftElement, InputRightElement, Spinner, Text } from "@chakra-ui/react";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { BiSearchAlt2 } from "react-icons/bi";

const CustomInput = ({ placeholder, type, resolving, resolvedData, sType,label, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const transformedResolution = resolvedData || null

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (event) => {
    if (!event.target.value) {
      setIsFocused(false);
    }
  };

  return (
    <FormControl>
          {label && <FormLabel fontSize={"13px"} bg="#FFF" width={"fit-content"} transform={"translateY(5px)"}>{label}</FormLabel>}
    <InputGroup position={"relative"}>
      {sType === "search" && <InputLeftElement zIndex={"7"}  children={<BiSearchAlt2 color="#C7CBD1" />} />}
      <Input
        py="1.75rem"
        placeholder={placeholder}
        px="1rem"
        borderRadius={"12px"}
        bg="#FFF"
        mt="1rem"
        zIndex={"6"}
        color={"#71717A"}
        onFocus={handleFocus}
        _focus={{ borderColor: "#000000", outline: "none", boxShadow: "none" }}
        _hover={{ borderColor: "#C7CBD1", outline: "none", boxShadow: "none" }}
        _placeholder={{color: "#71717A", fontSize: ".9rem"}}
        border={"1px solid #C7CBD1"}
        borderColor={"#C7CBD1"}
        type={showPassword ? "text" : type}
        {...props}
      />
      {type === "password" && <InputRightElement zIndex={"7"} mt="1.4rem" children={showPassword ? <AiOutlineEye style={{transform: "scale(1.4) translateX(-.4rem)", cursor: "pointer"}} color="#71717A" onClick={() => setShowPassword(!showPassword)} /> : <AiOutlineEyeInvisible style={{transform: "scale(1.4) translateX(-.4rem)", cursor: "pointer"}} color="#71717A" onClick={() => setShowPassword(!showPassword)} />} />}
      {resolving === true && <InputRightElement zIndex={"7"} mt="1.4rem" ml=".-7rem" children={<Spinner color="#CFD0D3" />} />}
      {resolving !== true && transformedResolution !== null ? <InputRightElement zIndex={"7"} mt="1.5rem" ml=".-7rem" children={<Text fontSize={".8rem"} fontWeight={"600"} transform={"translateX(-1.3rem)"} color={transformedResolution?.type === "error" ? "red.600" : "green.600"}>{transformedResolution?.type === "error" ? "Taken" : "Available"}</Text>} /> : null}
    </InputGroup>
    </FormControl>
  );
};

export default CustomInput;
