import { Box, FormControl, FormLabel, Select, Text } from '@chakra-ui/react'
import React from 'react'

const CustomSelect = ({placeholder, options, setSelection, selection,label, ...props}) => {
  return (
    <FormControl>
    {label && <FormLabel fontSize={"13px"} bg="#FFF" width={"fit-content"} transform={"translateY(5px)"}>{label}</FormLabel>}
    <Select
    height={"59.59px"}
    // px="1rem"
    mt="1rem"
    zIndex={"6"}
    bg="#FFF"
    // onMouseEnter={handleFocus}
    // onClick={handleFocus}
    // onSelect={handleFocus}
    _focus={{ borderColor: "#000000", outline: "none", boxShadow: "none" }}
    _hover={{ borderColor: "#C7CBD1", outline: "none", boxShadow: "none" }}
    _placeholder={{color: "#71717A", fontSize: ".9rem"}}
    border={"1px solid #C7CBD1"}
    borderColor={"#C7CBD1"}
    color={"#71717A"}
    // _placeholder={{ opacity: 0 }}
    placeholder={placeholder}
    onChange={e => setSelection(e.target.value)}
    {...props}
    >
      {options?.map(({title, value}) => {
        return (
            <option style={{color: "#000"}} key={title} value={value}>{title}</option>
        )
      })}
    </Select>
    </FormControl>
  )
}

export default CustomSelect