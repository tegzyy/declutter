import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { HiChevronDoubleLeft, HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const CustomPagination = ({page, setPage,  pageSize, totalPages, totalElements}) => {
  return (
    <Flex gap="2.5rem" alignItems={"center"} px="1.5rem" borderRadius={"24px"} height={"50px"} bg="#FFF" boxShadow={"rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"} position={"fixed"} bottom={"2%"} left={"58%"} transform={"translateX(-50%)"} zIndex={"10"}>
        <Text fontWeight={"500"} fontSize={".85rem"}>Showing items {((page * pageSize) + 1) - pageSize} - {pageSize > totalElements ? (totalElements * page) : (pageSize * page)}</Text>
        <Flex alignItems={"center"} gap="1rem">
            {page >= 3 && <HiChevronDoubleLeft cursor={"pointer"} onClick={() => setPage(1)} />}
            <HiChevronLeft cursor={"pointer"} onClick={page >= 2 ? () => setPage(page - 1) : {}} />
            <Text fontWeight={"500"} fontSize={".85rem"}>{page}</Text>
            {(pageSize * page) < totalElements && <HiChevronRight onClick={() => setPage(page + 1)} cursor={"pointer"} />}
        </Flex>
    </Flex>
  )
}

export default CustomPagination;