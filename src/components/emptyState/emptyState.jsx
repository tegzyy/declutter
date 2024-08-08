import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Illustration from './illustration.svg'

const EmptyState = ({text, img, ...props}) => {
  return (
    <Flex width={"100%"} justifyContent={"center"} {...props}>
        <Box>
        <Image width={img ? "90%" : "40%"} mx="auto" src={img || Illustration} />
        <Text fontSize={".85rem"} maxW={"170px"} mx="auto" textAlign={"center"} mt="1rem" fontWeight={"500"} color="#707070">{text}</Text>
        </Box>
    </Flex>
  )
}

export default EmptyState