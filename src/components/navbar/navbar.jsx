import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineAppstore } from 'react-icons/ai';
import { useLocation, useParams } from 'react-router-dom';
import User from "../../assets/user2.png";
import { useSelector } from 'react-redux';
import { TbDeviceAnalytics } from 'react-icons/tb';
import { MdWorkspacesOutline } from 'react-icons/md';
import { BiMessageSquareDetail, BiStoreAlt } from 'react-icons/bi';
import { GoGitPullRequest } from 'react-icons/go';
import { FiSettings } from 'react-icons/fi';
import Notifications from '../notifications/notifications';

const Navbar = ({collapsed}) => {
  const { pathname } = useLocation();
  const currentUser = useSelector(({ userData }) => userData.currentUser);
//   console.log(pathname?.split('/'))


  return (
    <Flex boxShadow={"0px 4px 16px 0px #00000014"} borderBottom={"1px solid #E4E3E7"} position={"fixed"} width={collapsed ? ["100%", "100%", "calc(100% - 80px)", "calc(100% - 80px)"] : ["100%", "100%", "calc(100% - 240px)", "calc(100% - 240px)"]} transition={"250ms ease"} zIndex={"100"} bg="#FFFFFF" px={["1rem", "1.3rem"]} alignItems={"center"} height={"90px"} justifyContent={"space-between"}>
        <Text textTransform={"capitalize"} whiteSpace={"nowrap"} fontSize={"1rem"} color="#1D2939" fontWeight={"500"} padding={".2rem .75rem"}>
            {pathname === '/' && <AiOutlineAppstore color='#344054' style={{display: "inline", transform: "translateY(2px)", marginRight: ".2rem"}} />}
            {pathname?.split('/')?.slice(-1)[0] === 'analytics' && <TbDeviceAnalytics color='#344054' style={{display: "inline", transform: "translateY(2px)", marginRight: ".2rem"}} />}
            {pathname?.split('/')?.slice(-1)[0] === 'clients' && <MdWorkspacesOutline color='#344054' style={{display: "inline", transform: "translateY(2px)", marginRight: ".2rem"}} />}
            {pathname?.split('/')?.slice(-1)[0] === 'supervisors' && <MdWorkspacesOutline color='#344054' style={{display: "inline", transform: "translateY(2px)", marginRight: ".2rem"}} />}
            {pathname?.split('/')?.slice(-1)[0] === 'promoters' && <MdWorkspacesOutline color='#344054' style={{display: "inline", transform: "translateY(2px)", marginRight: ".2rem"}} />}
            {pathname?.split('/')?.slice(-1)[0] === 'outlets' && <BiStoreAlt color='#344054' style={{display: "inline", transform: "translateY(2px)", marginRight: ".2rem"}} />}
            {pathname?.split('/')?.slice(-1)[0] === 'requests' && <GoGitPullRequest color='#344054' style={{display: "inline", transform: "translateY(2px)", marginRight: ".2rem"}} />}
            {pathname?.split('/')?.slice(-1)[0] === 'settings' && <FiSettings color='#344054' style={{display: "inline", transform: "translateY(2px)", marginRight: ".2rem"}} />}
            {pathname?.split('/')?.slice(-1)[0] === 'messages' && <BiMessageSquareDetail color='#344054' style={{display: "inline", transform: "translateY(2px)", marginRight: ".2rem"}} />}
            {pathname === '/' ? "Overview" : pathname?.split('/')?.length > 2 ? pathname?.split('/')[1] : pathname?.split('/')?.slice(-1)[0]}
        </Text>
        <Flex alignItems={"center"} height={"100%"}>
            <Flex alignItems={"center"} gap={[".5rem", "2rem"]} pr={[".25rem", "1.3rem"]} height={"100%"}>
               
                <Notifications />

                <Flex alignItems={"center"} gap=".4rem">
                    <Avatar cursor={"pointer"} onClick={() => {}} size={"md"} transform={"scale(.85)"} border={"1.73913px solid #CFD0D3"} src={currentUser?.imgUrl || User} />
                    <Box>
                        <Text fontWeight={"500"} fontSize={".9rem"}>{currentUser?.role?.includes('Admin') ? (currentUser?.firstName) : currentUser?.role === "Agency" ? currentUser?.name : currentUser?.role === "Basic Subuser" ? currentUser?.name : currentUser?.companyName}</Text>
                        <Text color="#667085" fontSize={".9rem"}>{currentUser?.role}</Text>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Navbar;