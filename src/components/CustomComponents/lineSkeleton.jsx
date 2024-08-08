import { Flex, Skeleton, Stack } from '@chakra-ui/react'
import React from 'react'

const LineSkeleton = ({num, ...props}) => {
  const arr = [...Array(num).keys()]

  return (
    <Stack mt=".5rem">
        {arr?.map((i, index) => {
            return (
                <Skeleton key={index} {...props} height={"40px"} />
            )
        })}
    </Stack>
  )
}

export default LineSkeleton