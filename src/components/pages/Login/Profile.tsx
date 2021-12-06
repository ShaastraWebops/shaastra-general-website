import React from "react"
import {
    Text,
    Stack,
    Link,
    Flex,
    Input,
    Box,
    RadioGroup,
    Radio,
    Image,
    Button,
    useColorModeValue,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Heading,
    Center,
  } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { useState } from "react";
import CustomBox from '../../shared/CustomBox'
import Footer from '../../shared/Footer';
import "../../../styles/Login.css"

import bg from "../../../images/homepage_illustrations/small ribi.png"

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Scrollbar
  } from 'swiper';
  
import 'swiper/swiper-bundle.min.css'  
import 'swiper/swiper.min.css'
import { useHistory } from "react-router";
import {RegistraionType, useMeQuery} from "../../../generated/graphql"
import moment from "moment";

SwiperCore.use([Scrollbar]);

const Profile = () => {

    const history = useHistory()

    const {data, loading, error} = useMeQuery()
    var { isOpen, onOpen, onClose } = useDisclosure()

    if(loading)
        {
            onClose = () => {}
            return(
                <Modal isOpen={true} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent backgroundColor="#e2e19c" color="black">
                        <ModalHeader>Loading...</ModalHeader>
                        <ModalCloseButton />
                    </ModalContent>
                </Modal>
            )
        }
    else if(error)
    {
        onClose = () => {window.location.reload()}
                return(
                    <Modal isOpen={true} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent backgroundColor="#f1aaaa" color="black">
                            <ModalHeader>Error Occurred</ModalHeader>
                            <ModalCloseButton />
                        </ModalContent>
                    </Modal>
                )
    }

    return(
        <CustomBox>
            <Stack
                    textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 8, md: 8 }}
                    py={{ base: 20, md: 20 }}
                    padding="4vw"
            >
                <Heading className="profile-heading" fontSize="3.5vw">Hi! {data?.me?.name}</Heading>
                <Flex width="100%" className="profile-main-flex">
                    <Flex flexDirection="column" width="30vw" fontSize="1.5vw" justifyContent="space-between">
                        <Link href="/profile" color="#C2C4FF" marginBottom="2vh">Profile Details</Link>
                        <Link href="/editprofile">Edit Profile</Link>
                        <Button onClick={(e) => {e.preventDefault(); history.push('/logout')}} width="fit-content" margin="auto" backgroundColor="#DB7171">Logout</Button>
                        <Image src={bg} boxSize="22vw" alignSelf="center"></Image>
                    </Flex>
                    <Flex flexDirection="column">
                        <Box width="60vw" backgroundColor="#8294A4" fontSize="1.5vw" padding="4vw" borderRadius="24px" marginBottom="4vh">
                           <Flex width="100%" justifyContent="space-between" marginBottom="4vh">
                            <Flex borderBottom="2px solid white" justifyContent="space-between" marginRight="4vw">
                                <Text>Email</Text>
                                <Text>{data?.me?.email}</Text>
                            </Flex>
                            <Flex borderBottom="2px solid white" justifyContent="space-between">
                               <Text>Mobile Number</Text>
                               <Text>{data?.me?.mobile}</Text>
                           </Flex>
                           </Flex>
                           <Flex width="100%" justifyContent="space-between" marginBottom="4vh">
                               <Flex width="40%" borderBottom="2px solid white" justifyContent="space-between" marginRight="4vw">
                                    <Text>College</Text>
                                    <Text>{data?.me?.college}</Text>
                               </Flex>
                               <Flex width="40%" borderBottom="2px solid white" justifyContent="space-between">
                                    <Text>Branch</Text>
                                    <Text>{data?.me?.department}</Text>
                               </Flex>
                           </Flex>
                           <Flex borderBottom="2px solid white" alignItems="center" justifyContent="space-between" marginBottom="4vh">
                               <Text>Address</Text>
                               <Text width="60%" textAlign="right">{data?.me?.address}</Text>
                           </Flex>
                           <Flex width="100%" justifyContent="space-between">
                                <Flex width="40%" borderBottom="2px solid white" justifyContent="space-between" marginRight="4vw">
                                            <Text>City</Text>
                                            <Text>{data?.me?.city}</Text>
                                </Flex>
                               <Flex width="40%" borderBottom="2px solid white" justifyContent="space-between">
                                    <Text>State</Text>
                                    <Text>{data?.me?.state}</Text>
                               </Flex>
                           </Flex>
                        </Box>
                        <Heading m={2} p={2}>Registered Events</Heading>
                        <Swiper
                            scrollbar={{hide: false}}
                            slidesPerView={3}
                            spaceBetween={10}
                        >
                            {
                                data?.me?.registeredEvents.map(e => {
                                    return(
                                            <SwiperSlide >
                                            <Flex flexDirection="column" alignItems="center" justifyItems={"center"} textAlign="center"
                                            height={"300px"} 
                                            >
                                            <a href={`/eventpage/${e.id}`}>
                                                <Image src={e.pic!} height={"150px"} width={"100%"} borderRadius={"10px"} objectFit={"fill"}></Image>
                                                </a>
                                                <Box color={"black"} fontWeight={"600"} p={2}>
                                                <Text>{e.name}</Text>
                                                <Flex flexDirection={"column"}>
                                                <Text>Events Starts From</Text>
                                                <Text> {moment(parseInt(e.eventTimeFrom)).format("MMMM Do YYYY")}</Text>
                                                {
                                                   e.registrationType === RegistraionType.Team && e.yourTeam && (<Button
                                                   onClick={()=> { console.log(e.yourTeam?.name)}}>View Team</Button>)
                                                }
                                                </Flex>
                                                </Box>
                                                
                                            </Flex>
                                        </SwiperSlide>
                                                        )
                                })
                            }
                        </Swiper>
                    </Flex>
                </Flex>
            </Stack>    
            <Footer designed={[{ name: 'Krithikaa', mail: 'be20b020@smail.iitm.ac.in' }]} ></Footer>      
        </CustomBox>
    )
}

export default Profile;