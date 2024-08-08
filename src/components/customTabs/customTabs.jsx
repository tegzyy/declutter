import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const CustomTabs = ({ data, ...props }) => {
  return (
    <>
      <Tabs>
        <TabList border={"none"} gap="1rem" mb="1rem" {...props} flexWrap={"wrap"}>
          {data?.map((i, index) => (
            <Tab px="auto" color="#999999" fontWeight={"600"} fontSize={"14px"} _selected={{color: "#7F56D9", fontWeight: "600", borderBottom: "3px solid #7F56D9"}} key={index}>{i?.title}</Tab>
          ))}
        </TabList>

        <TabPanels>
          {data?.map((i, index) => (
            <TabPanel key={index} px="0">
              <p>{i?.render}</p>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
};

export default CustomTabs;
