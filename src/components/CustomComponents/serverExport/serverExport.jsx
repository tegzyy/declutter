import React, { useState } from 'react'
import SecondaryButton from '../secondaryButton/secondarybutton'
import CustomDrawer from '../customDrawer/customDrawer';
import { Flex, Text } from '@chakra-ui/react';
import CustomInput from '../customInput/customInput';
import PrimaryButton from '../primaryButton/primarybutton';
import { DownloadIcon } from '@chakra-ui/icons';

const ServerExport = ({entity, queries}) => {
  const [rangeFrom, setRangeFrom] = useState(1)
  const [rangeTo, setRangeTo] = useState(100)
  const [size, setSize] = useState('')

  const baseURL = process.env.REACT_APP_BASE_URL;

  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    
  return (
    <>
   
    <CustomDrawer
    position={"right"}
    title={"Export to Excel"}
    triggerClose={""}
    setTriggerClose={() => {}}
    toggleElement={
      <SecondaryButton text={"Export"} icon="download" loading={false}  />
    }
    content={
        <>
        <Text>Specify data download range</Text>
        <Flex mt="1rem" gap={"1rem"} alignItems={"center"}>
          <CustomInput
          type={"tel"}
          required
          placeholder={"From"}
          onChange={e => setRangeFrom(e.target.value)}
          value={rangeFrom}
          />
          <Text transform={"translateY(.5rem)"}>-</Text>
          <CustomInput
          type={"tel"}
          required
          placeholder={"To"}
          onChange={e => setRangeTo(e.target.value)}
          value={rangeTo}
          max={5000}
          />
        </Flex>
        <a href={`${baseURL}/${entity}/excel?startRange=${rangeFrom}&endRange=${rangeTo}${queries}`} target="_blank" rel="noopener noreferrer">
          <PrimaryButton mt="4rem" text="Export Data" icon="download" loading={false} />
        </a>

        <Text my="1.5rem" textAlign={"center"}>Or</Text>

        <CustomInput
          type={"tel"}
          required
          placeholder={"Size"}
          onChange={e => setSize(e.target.value)}
          value={size}
          max={5000}
        />

        <Flex gap=".5rem" mt="2rem" flexWrap={"wrap"}>
          {pages?.map((i, index) => (
            <a href={`${baseURL}/${entity}/excel?startRange=${index === 0 ? 1 : (size * index) + 1}&endRange=${index === 0 ? size : (size * i)}${queries}`} target="_blank" rel="noopener noreferrer">
              <Text p=".3rem" borderRadius={"4px"} fontSize={".8rem"} cursor={"pointer"} border="1px solid gray">Page {i} <DownloadIcon transform={"translateY(-1px)"} opacity={".7"} /></Text>
            </a>
          ))}
        </Flex>
        
        </>
    }
    />
    </>
  )
}

export default ServerExport