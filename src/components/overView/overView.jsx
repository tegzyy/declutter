import { Box, Flex, Spinner, Text } from '@chakra-ui/react'
import React from 'react'

const Overview = ({data, loading}) => {
  const colors = ["#FFEBEB", "#EBFFED", "#EBF3FF", "#F6EBFF", "#FFEBEB", "#EBFFED"]
    
  return (
    <Flex gap={"1rem"} flexWrap={"wrap"} width={"100%"}>
        {data?.map(({title, value}, index) => {
            return (
                <Box key={title} height={"116px"} px=".8rem" flex={"1 1 150px"} borderRadius={"12px"} bg={colors[index]}>
                    {/* <Box mt="2.3rem" mb=".5rem" width={"27px"} height="27px" borderRadius={"50%"} border="4px solid #667085" /> */}
                    {loading ? <Spinner mt="3.4rem" size={"xs"} /> : <Text mt="2.7rem" fontSize={"1.2rem"} color="#667085" fontWeight={"700"}>{value}</Text>}
                    <Text fontSize={".9rem"} color="#667085" fontWeight={"500"}>{title}</Text>
                </Box>
            )
        })}
    </Flex>
  )
}

export default Overview