import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Metrics = ({data}) => {
  return (
    <Flex alignItems={"center"} gap={"1rem"} overflowX={"scroll"} sx={
        { 
        '::-webkit-scrollbar':{
            display:'none'
        }
        }
    }>
        {data?.map(({title, value}) => (
            <Box key={title} p="1.35rem 1.5rem" flex="1 1 300px" bg="#FFF" minW={"165px"} borderRadius={"6px"} border=".5px solid #F2F4F7">
                <Text color="#667085" fontWeight={"500"} fontSize={"1.7rem"}>{value}</Text>
                <Text color="#667085">{title}</Text>
            </Box>
        ))}
    </Flex>
  )
}

export default Metrics