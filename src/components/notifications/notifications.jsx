import { Box, Divider, Flex, Image, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Spinner, Text } from "@chakra-ui/react";
import React, { Fragment, useEffect, useState } from "react";
import Bellicon from './bellicon.svg';
import moment from "moment";
import axiosInstance from "../../services/api";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";

const Notifications = () => {
    const currentUser = useSelector(({userData})=>  userData?.currentUser);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingm, setLoadingm] = useState(false);
  const [trigger, setTrigger] = useState(Math.random());

  const navigate = useNavigate();


const socket = io(process.env.REACT_APP_SOCKET_URL, {
    transports: ["websocket"]
    })

useEffect(() => {
    socket.on("connect", () => {
        socket.emit("setSocketId", {userId: currentUser?._id, role: currentUser?.role})
        // console.log(socket.connected);
    });
}, []);

useEffect(() => {
    socket.on("newNotification", (msg) => {
        setTrigger(Math.random())
    })
}, [])

  const getNotifications = async () => {
        setLoading(true)
        try {
            const {data} = await axiosInstance.get("/notifications/in-app")
            // console.log('notifications', data?.data)
            setNotifications(data?.data)
        } catch (error) {
            console.log(error?.response)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getNotifications()
    }, [trigger])

  const markAll = async() => {
    setLoadingm(true)
    try {
        const {data} = await axiosInstance.patch("/notifications/in-app/mark-all-as-read")
        setTrigger(Math.random())
        // console.log(data)
    } catch(error) {
        console.log(error?.response?.data?.message)
    } finally {
        setLoadingm(false)
    }
}

const handleNotifClick = (type, entityId, id) => {
    switch (type) {
        case 'Device':
            navigate(`/requests`);
        break;
        case 'Free Item':
            navigate(`/item-details/${entityId}`, {state: "free"})
        break;
        case 'Sale Item':
            navigate(`/item-details/${entityId}`)
        break;
        case 'Transaction':
            navigate(`/orders/${entityId}`)
        break;
        case 'Sale Item Offer':
            navigate(`/offers`)
        break;
        case 'Free Item Entrant':
            navigate(`/giveaway`)
        break;
        default:
        break;
    }
}

  return (
    <Box>
      <Popover size="xl">
        <PopoverTrigger>
          <Box position={"relative"}>
            <Image transform={"scale(.95)"} cursor={"pointer"} src={Bellicon} />
            {notifications.filter((i) => !i?.isRead).length > 0 && (
              <Box
                position={"absolute"}
                top="0"
                right={"12%"}
                height={"8px"}
                width="8px"
                borderRadius={"50%"}
                backgroundColor="#FD4207"
              ></Box>
            )}
          </Box>
        </PopoverTrigger>
        <PopoverContent
          maxH="500px"
          py={".6rem"}
          _focus={{ ounline: "none", boxShadow: "none" }}
        >
          <PopoverArrow />
          {/* <PopoverCloseButton /> */}
          <PopoverHeader
            fontFamily={"Clash Display"}
            fontWeight="700"
            color="#1A1A1A"
          >
            Notifications
          </PopoverHeader>
          <PopoverBody maxH="450px" overflowY={"scroll"}>
                  <>
                    {notifications.filter((i) =>
                      moment(i?.createdAt)
                        .calendar()
                        .toLowerCase()
                        .includes("today")
                    ).length > 0 && (
                      <Box
                        maxW={"90%"}
                        margin="2.2rem auto 1.5rem auto"
                        borderTop="1px solid #F6F6F6"
                      >
                        <Text
                          borderRadius={"20px"}
                          bg={"#F6FECC"}
                          color="#2E1604"
                          margin={"-1.2rem auto 0 auto"}
                          width={"fit-content"}
                          fontWeight={"500"}
                          fontSize=".75rem"
                          padding={".4rem 1.2rem"}
                        >
                          Latest
                        </Text>
                      </Box>
                    )}
                    {notifications
                      .filter((i) =>
                        moment(i?.createdAt)
                          .calendar()
                          .toLowerCase()
                          .includes("today")
                      )
                      .map(
                        (
                          {
                            description,
                            isRead,
                            entityId,
                            createdAt,
                            type,
                            _id,
                          },
                          index
                        ) => {
                          return (
                            <Fragment key={index}>
                              <Flex
                                onClick={() =>
                                  handleNotifClick(type, entityId, _id)
                                }
                                cursor={"pointer"}
                                py=".7rem"
                                gap=".5rem"
                                alignItems={"flex-start"}
                              >
                                
                                <Box>
                                  <Text
                                    color="#2E1604"
                                    fontSize={".85rem"}
                                    fontWeight="600"
                                  >
                                    {description}
                                  </Text>
                                  <Text
                                    mt={1}
                                    color="#8C8C8C"
                                    fontSize={".75rem"}
                                    fontWeight="600"
                                  >
                                    {moment(createdAt).calendar()}
                                  </Text>
                                </Box>
                              </Flex>
                              {index + 1 <
                                notifications.filter((i) =>
                                  moment(i?.createdAt)
                                    .calendar()
                                    .toLowerCase()
                                    .includes("today")
                                ).length && <Divider />}
                            </Fragment>
                          );
                        }
                      )}

                    {notifications.filter((i) =>
                      moment(i?.createdAt)
                        .calendar()
                        .toLowerCase()
                        .includes("today")
                    ).length > 0 && (
                      <Box
                        maxW={"90%"}
                        margin="2.2rem auto 1.5rem auto"
                        borderTop="1px solid #F6F6F6"
                      >
                        <Text
                          borderRadius={"20px"}
                          bg={"#F6FECC"}
                          color="#2E1604"
                          margin={"-1.2rem auto 0 auto"}
                          width={"fit-content"}
                          fontWeight={"500"}
                          fontSize=".75rem"
                          padding={".4rem 1.2rem"}
                        >
                          Older
                        </Text>
                      </Box>
                    )}
                    {notifications
                      .filter(
                        (i) =>
                          !moment(i?.createdAt)
                            .calendar()
                            .toLowerCase()
                            .includes("today")
                      )
                      .map(
                        (
                          {
                            description,
                            isRead,
                            entityId,
                            createdAt,
                            type,
                            _id,
                          },
                          index
                        ) => {
                          return (
                            <Fragment key={index}>
                              <Flex
                                onClick={() =>
                                  handleNotifClick(type, entityId, _id)
                                }
                                cursor={"pointer"}
                                py=".7rem"
                                gap=".5rem"
                                alignItems={"flex-start"}
                              >
                                <Box>
                                  <Text
                                    color="#2E1604"
                                    fontSize={".85rem"}
                                    fontWeight="600"
                                  >
                                    {description}
                                  </Text>
                                  <Text
                                    mt={1}
                                    color="#8C8C8C"
                                    fontSize={".75rem"}
                                    fontWeight="600"
                                  >
                                    {moment(createdAt).calendar()}
                                  </Text>
                                </Box>
                              </Flex>
                              {index + 1 <
                                notifications.filter((i) =>
                                  moment(i?.createdAt)
                                    .calendar()
                                    .toLowerCase()
                                    .includes("today")
                                ).length && <Divider />}
                            </Fragment>
                          );
                        }
                      )}
                  </>
          </PopoverBody>
          <PopoverFooter height={"40px"}>
            <Text
              onClick={markAll}
              cursor={"pointer"}
              transform={"translateY(3px)"}
              fontWeight="600"
              fontSize={".85rem"}
              color={"gray"}
              textAlign={"center"}
            >
              {loadingm ? <Spinner size={"xs"} /> : "Mark all as read"}
            </Text>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

export default Notifications;
