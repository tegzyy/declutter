import React, { useState } from "react";
import { FormControl, FormLabel, Input, InputGroup, InputRightElement, Text, Textarea } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const CustomTextArea = ({ placeholder, type, label, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
      <Textarea
        py="1.1rem"
        placeholder={placeholder}
        px="1rem"
        borderRadius={"12px"}
        bg="#FFF"
        mb="1rem"
        zIndex={"6"}
        color={"#71717A"}
        row={"5"}
        onFocus={handleFocus}
        _focus={{ borderColor: "#000000", outline: "none", boxShadow: "none" }}
        _hover={{ borderColor: "#C7CBD1", outline: "none", boxShadow: "none" }}
        _placeholder={{color: "#71717A", fontSize: ".9rem"}}
        border={"1px solid #C7CBD1"}
        borderColor={"#C7CBD1"}
        type={showPassword ? "text" : type}
        {...props}
      />
      {type === "password" && <InputRightElement zIndex={"7"} mt=".65rem" children={showPassword ? <ViewIcon color={"#8F939B"} cursor={"pointer"} onClick={() => setShowPassword(!showPassword)} /> : <ViewOffIcon color={"#8F939B"} cursor={"pointer"} onClick={() => setShowPassword(!showPassword)} />} />}
    </InputGroup>
    </FormControl> 
  );
};

export default CustomTextArea;
