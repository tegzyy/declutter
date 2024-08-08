import { Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { LuCopy } from 'react-icons/lu'

const CopyButton = ({text, toCopy}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(toCopy);
    setCopied(true);
    setTimeout(() => {
        setCopied(false);
    }, 1000);
  };

  return (
    <>
    {text ? 
    <Text onClick={handleCopy}>{text}</Text>
    :
    copied ?
    <Text fontSize={".85rem"} fontWeight={"500"} color={"#98A2B3"}>copied</Text>
    :
    <LuCopy onClick={handleCopy} color='#98A2B3' style={{cursor: "pointer"}} />
    }
    </>
  )
}

export default CopyButton