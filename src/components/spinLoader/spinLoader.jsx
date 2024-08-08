import { Flex, Spinner } from '@chakra-ui/react'
import React from 'react'

const SpinLoader = ({...props}) => {
  return (
    <Flex mt="10rem" justifyContent={"center"} {...props}>
        <Spinner size={"lg"} color="#000" />
    </Flex>
  )
}

export default SpinLoader