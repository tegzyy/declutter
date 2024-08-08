import { Box, Flex, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import ExportCSV from '../exportCsv'
import { useEffect, useState } from 'react'
import axiosInstance from '../../services/api'
import { useParams } from 'react-router-dom'
import CustomInput from '../customInput/customInput'
import LineSkeleton from '../lineSkeleton'
import EmptyState from '../emptyState/emptyState'
import { buildResourceURL, buildResourceURL2 } from '../../utils/helper'
import CustomPagination from '../customPagination/customPagination'
import ServerExport from '../serverExport/serverExport'

const ListCompare = ({listType}) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;

  const [date, setDate] = useState(formattedDate)
  const [loading, setLoading] = useState(false)
  const [searchVal, setSearchVal] = useState('')
  const [list, setList] = useState([])
  const {iid} = useParams()

  const [page, setPage] = useState(1)
  const [total, setTotal] = useState("")
  const limit = 100;

  const queryParams = [
    {
      key: 'initiativeId',
      value: iid
    },
    {
      key: 'date',
      value: date
    },
    {
      key: 'limit',
      value: limit
    },
    {
      key: 'page',
      value: page
    },
    {
      key: 'resourceType',
      value: listType
    },
  ]

  const queryParamsx = [
    {
      key: 'initiativeId',
      value: iid
    },
    {
      key: 'date',
      value: date
    },
    {
      key: 'resourceType',
      value: listType
    },
  ]

  const getRecords = async() => {
    setLoading(true)
    try {
      const { data } = await axiosInstance.get(buildResourceURL(`initiative-stores/no-submission`, queryParams))
      setList(data?.data)
      setTotal(data?.totalCount)
    } catch(error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getRecords()
  }, [date])


  const datax = [
    {
        title: "Date"
    },
    {
        title: "Outlet"
    },
    {
        title: "Location"
    },
    {
        title: "Promoter"
    },
    {
        title: "Supervisor"
    },
  ]

  const fullDatax = list?.map(i => ({
    date,
    store: i?.store?.name,
    state: i?.store?.state,
    promoter: i?.promoter?.firstName + ' ' + i?.promoter?.lastName,
    supervisor: i?.supervisor?.firstName + ' ' + i?.supervisor?.lastName,
    promoterPhone: i?.promoter?.phoneNumber,
    supervisorPhone: i?.supervisor?.phoneNumber
  }))

  const headers = [
    {
      key: 'date',
      name: 'Date',
    },
    {
      key: 'store',
      name: 'Store',
    },
    {
      key: 'state',
      name: 'State',
    },
    {
      key: 'promoter',
      name: 'Promoter',
    },
    {
      key: 'promoterPhone',
      name: 'Promoter Phone Number',
    },
    {
      key: 'supervisor',
      name: 'Supervisor',
    },
    {
      key: 'supervisorPhone',
      name: 'Supervisor Phone Number',
    }
  ]

  const filteredStores = searchVal?.length > 0 ? list?.filter(v => (v?.store?.name?.toLowerCase()?.includes(searchVal?.toLowerCase())) || (v?.promoter?.firstName?.toLowerCase()?.includes(searchVal?.toLowerCase())) || (v?.supervisor?.firstName?.toLowerCase()?.includes(searchVal?.toLowerCase()))) : list


  return (
    <Box>
        <Flex my="1rem" justifyContent={"space-between"} alignItems={"center"}>
            <Flex alignItems={"center"} gap="1rem">
              <Text whiteSpace={"nowrap"}><strong>{total}</strong> outlets have no submissions</Text>
              <CustomInput
              type={"text"}
              required
              value={searchVal}
              placeholder={`Search by outlet, promoter or supervisor names..`}
              onChange={e => setSearchVal(e.target.value)}
              mt="0"
              sType="search"
              width="400px"
              py="1.15rem"
              />
            </Flex>
            

            <Flex gap="1rem" alignItems={"center"}>
              {/* <ExportCSV headers={headers} items={fullDatax} /> */}
              <ServerExport entity={'initiative-stores/no-submission'} queries={buildResourceURL2('', queryParamsx)} />
              <Box width={"150px"}>
                <CustomInput
                type={"date"}
                required
                placeholder={"Select Date"}
                onChange={e => setDate(e.target.value)}
                mt="0"
                value={date}
                py=".97rem !important"
                />
              </Box>
            </Flex>

        </Flex>
        
        <Table mt="1.2rem" borderRadius={"12px"} overflow={"hidden"}>
            <Thead bg="#F9FAFB" border="1px solid #EAECF0">
                <Tr>
                    {datax?.map(i => (
                        <Th key={i} whiteSpace={"nowrap"} textTransform={"capitalize !important"} color={"#475467"}>{i?.title}</Th>
                    ))}
                </Tr>
            </Thead>
            
            <Tbody>
            {loading ?
            <LineSkeleton num={8} />
            :
            filteredStores?.length < 1 ?
            <EmptyState text={"No records for for this date"} />
            :
            filteredStores?.map((({store, promoter, supervisor}) => {
                return (
                    <Tr key={store} cursor={"pointer"}>
                        <Td>
                            <Text mb=".2rem" color={"#101828"} fontSize={".9rem"} fontWeight={"500"} textTransform={"capitalize"}>{date?.slice(0, 10) || "-- -- --"}</Text>
                        </Td>
                        <Td color={"#475467"} fontSize={".9rem"}>
                            <Text mb=".2rem" color={"#101828"} fontSize={".9rem"} fontWeight={"500"} textTransform={"capitalize"}>{store?.name}</Text>    
                        </Td>
                        <Td color={"#475467"} fontSize={".9rem"}>
                            <Text mb=".2rem" color={"#101828"} fontSize={".9rem"} fontWeight={"500"} textTransform={"capitalize"}>{store?.state}</Text>    
                        </Td>
                        <Td color={"#475467"} fontSize={".9rem"}>
                            <Text mb=".2rem" color={"#101828"} fontSize={".9rem"} fontWeight={"500"} textTransform={"capitalize"}>{promoter?.firstName + ' ' + promoter?.lastName}</Text>    
                            <Text color={"#101828"} fontSize={".8rem"} fontWeight={"400"} textTransform={"capitalize"}>{promoter?.phoneNumber}</Text>    
                        </Td>
                        <Td color={"#475467"} fontSize={".9rem"}>
                            <Text mb=".2rem" color={"#101828"} fontSize={".9rem"} fontWeight={"500"} textTransform={"capitalize"}>{supervisor?.firstName + ' ' + supervisor?.lastName}</Text>
                            <Text mb=".2rem" color={"#101828"} fontSize={".8rem"} fontWeight={"400"} textTransform={"capitalize"}>{supervisor?.phoneNumber}</Text>    
                        </Td>
                    </Tr>
                )
            }))
            }
            </Tbody>
        </Table>

        <CustomPagination
         page={page}
         setPage={setPage}
         pageSize={limit}
         totalElements={total}
        />
    </Box>
  )
}

export default ListCompare;