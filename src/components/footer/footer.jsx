import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import FullLogo from "../../assets/full-logo.svg";
import Discord from "./icons/discord.svg";
import Chat from "./icons/chat.svg";
import Facebook from "./icons/facebook.svg";
import Youtube from "./icons/youtube.svg";
import Twitter from "./icons/twitter.svg";
import Instagram from "./icons/instagram.svg";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const footerLinks = [
  {
    title: "Home",
    link: "",
  },
  {
    title: "Porte Shop",
    link: "",
  },
  {
    title: "About us",
    link: "",
  },
  {
    title: "Contact us",
    link: "",
  },
  {
    title: "FAQ",
    link: "",
  },
  {
    title: "Privacy",
    link: "",
  },
  {
    title: "Terms & Condition",
    link: "",
  },
  {
    title: "Sponsorship",
    link: "",
  },
];

const socials = [
  {
    icon: Discord,
    link: "",
  },
  {
    icon: Twitter,
    link: "",
  },
  {
    icon: Chat,
    link: "",
  },
  {
    icon: Instagram,
    link: "",
  },
  {
    icon: Facebook,
    link: "",
  },
  {
    icon: Youtube,
    link: "",
  },
];

const Footer = ({collapsed}) => {
  const currentUser = useSelector(({userData})=>  userData?.currentUser);
  const {pathname} = useLocation()

  return (
    <Box ml={collapsed ? ["0", "0", "80px", "80px"] : currentUser && !pathname?.includes('welcome') ? ["0", "0", "240px", "240px"] : "0"} transform={"250ms ease"}>
      <Box bg="#002F3D" padding={["3rem 1rem", "3rem 3rem"]}>
        <Flex justifyContent={"center"}>
          <Flex gap=".7rem" flexWrap={"wrap"} justifyContent={"space-around"}>
            {footerLinks?.map(({ title }) => (
              <Text
                whiteSpace={"nowrap"}
                cursor={"pointer"}
                key={title}
                borderRadius={"40px"}
                fontSize={".9rem"}
                color={"#FFF"}
                fontWeight={"500"}
                padding={"10px 24px"}
                border="1px solid #02BAF1"
              >
                {title}
              </Text>
            ))}
          </Flex>
        </Flex>
        <Box
          my="2.2rem"
          width={"80%"}
          mx="auto"
          borderTop={"2px solid #1D5E82"}
        />
        <Image src={FullLogo} width={["50%", "13%"]} mx="auto" />
        <Flex my="2rem" gap={"1.5rem"} width={"fit-content"} mx="auto">
          {socials?.map(({ icon }, index) => (
            <Image
              cursor={"pointer"}
              transition={"250ms ease"}
              _hover={{ transform: "scale(.9)" }}
              key={index}
              src={icon}
            />
          ))}
        </Flex>
        <Text color={"#FFF"} textAlign={"center"} fontWeight={"500"}>
          &copy; Gameporte Interactive Inc.
        </Text>
      </Box>
      <Box bg="#000F14" py="1.7rem">
        <Text
          color={"#EAEAEB"}
          fontSize={".85rem"}
          textAlign={"center"}
          maxW={"85%"}
          mx="auto"
        >
          Gameporte is not endorsed by, directly affiliated with, maintained or
          sponsored by Apple Inc, Electronic Arts, Activision Blizzard, Take-Two
          Interactive, Microsoft, Xbox, Sony, PlayStation or Epic Games. All
          content, games titles, trade names and/or trade dress, trademarks,
          artwork and associated imagery are trademarks and/or copyright
          material of their respective owners.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
