import React, { useState } from "react";
import { Box, Flex, Input, InputGroup, InputRightElement, Spinner, Text } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const CustomListInput = ({ placeholder, type, resolving, resolvedData, value, list, setData, loading, reset, ...props }) => {
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

  const handleClick = (val) => {
    setData(val)
    reset()
  }


  return (
    <>
    <InputGroup position={"relative"}>
      <Input
        py="1.75rem"
        placeholder={placeholder}
        px="1rem"
        borderRadius={"12px"}
        bg="#FFF"
        // mt="1rem"
        value={value}
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
    <Box mb={value?.length >= 1 ? "1rem" : ""} mt=".5rem" borderRadius={".6rem"} boxSizing="border-box" maxHeight={value?.length >= 1 ? "150px" : "0"} transition={"250ms ease"} bg="#FFF" border={value?.length >= 1 ? "1px solid #C7CBD1" : "none"} overflowY={"scroll"}>
      {loading ?
      <Flex justifyContent={"center"} my="1.5rem">
        <Spinner size={"sm"} />
      </Flex>
      :
      list?.map(({id, title, subtitle}) => (
        <Box onClick={() => handleClick({id, title, subtitle})} cursor={"pointer"} p=".5rem .7rem .5rem .7rem" key={id} borderBottom={'.5px solid #D0D5DD'}>
          <Text fontSize={".9rem"} fontWeight={"500"}>{title}</Text>
          <Text fontSize={".8rem"} fontWeight={"400"}>{subtitle}</Text>
        </Box>
      ))}
    </Box>
    </>
  );
};

export default CustomListInput;
