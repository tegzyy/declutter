import { Box, Flex, Text, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { truncateText } from '../../utils/helper';
import CustomPagination from '../customPagination/customPagination';

const CustomTable = ({data, paginationProps}) => {
  
  const values = data[0]?.value?.map((_, index) =>
  data?.map(item => item?.value[index]));

  return (
    <Box overflow={"hidden"} border={"1px solid #475467"} borderRadius={"12px"} boxShadow="0px 1px 2px 0px #1018280D">
      <Flex padding={"1rem"} alignItems={"center"} bg="#E9E9E9" justifyContent={"space-between"}>
        {data?.map(({title, value}) => (
            <Text key={title} flex={"1"} whiteSpace={"nowrap"} textTransform={"capitalize"} fontWeight={"500"} fontSize={"13px"}>{title}</Text>
        ))}
      </Flex>
      {values?.map((i) => (
        <Flex padding={"1rem"} alignItems={"center"} borderTop={"1px solid #475467"} justifyContent={"space-between"}>
            {i?.map((v, index) => (
                <Tooltip hasArrow  key={index} label={v} placement='bottom'>
                    <Text onClick={() => v?.includes('cloudinary') ?  window.open(v, '_blank') : {}} flex={"1"} textTransform={"capitalize"} whiteSpace={"nowrap"} fontWeight={"500"} fontSize={"13px"}>{truncateText(v, 12)}</Text>
                </Tooltip>
            ))}
        </Flex>
      ))}

      {paginationProps && 
      <CustomPagination
        page={paginationProps?.page}
        setPage={paginationProps?.setPage}
        pageSize={paginationProps?.pageSize}
        totalElements={paginationProps?.totalElements}
      />}
    </Box>
  )
}

export default CustomTable