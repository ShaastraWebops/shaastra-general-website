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
  } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { useState } from "react";
import CustomBox from '../../shared/CustomBox'
import Footer from '../../shared/Footer';
import "../../../styles/Login.css"

import bg from "../../../images/homepage_illustrations/small ribi.png"
import bg2 from "../../../images/EventsWorkshops/events/bg.jpeg"

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Scrollbar
  } from 'swiper';
  
import 'swiper/swiper-bundle.min.css'  
import 'swiper/swiper.min.css'
import { useHistory } from "react-router";
import {useMeQuery} from "../../../generated/graphql"

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
                <Text>{data?.me?.shaastraID}</Text>
                <Flex width="100vw" className="profile-main-flex" minHeight="80vh" justifyContent="space-evenly">
                    <Flex height={["fit-content","80vh"]} padding={["1vw", "0vw"]}  flexDirection="column" margin="auto" alignItems="center" width={["100%", "20vw"]} fontSize="1.5vw" justifyContent="space-between">
                        <Link href="/profile" color="#C2C4FF" marginBottom="2vh">Profile Details</Link>
                        <Link href="/editprofile">Edit Profile</Link>
                        <Button fontSize={["5vw","1.5vw"]} onClick={(e) => {e.preventDefault(); history.push('/signout')}} width={["fit-content","100%"]} margin="auto" backgroundColor="#DB7171">Logout</Button>
                        <Image src={bg} boxSize="22vw" alignSelf="center"></Image>
                    </Flex>
                    <Flex flexDirection="column">
                        <Box width={["100%", "60vw"]} margin="auto" fontSize={["5vw","1.5vw"]} padding={["1vw", "4vw"]} borderRadius="24px" marginBottom="4vh">
                            <Flex marginBottom="4vh" textAlign="left" justifyContent="space-between" flexDirection="column">
                                    <Text>Email ID</Text>
                                    <Text width="100%" backgroundColor="#C2C4FF" color="black" padding="1vh" borderRadius="12px">{data?.me?.email}</Text>
                            </Flex>
                            <Flex marginBottom="4vh" textAlign="left" justifyContent="space-between" flexDirection="column">
                                    <Text>Mobile Number</Text>
                                    <Text width="100%" backgroundColor="#C2C4FF" color="black" padding="1vh" borderRadius="12px">{data?.me?.mobile}</Text>
                            </Flex>
                           <Flex width="100%" justifyContent="space-between" marginBottom="4vh">
                                <Flex marginBottom="4vh" width="40%" textAlign="left" justifyContent="space-between" flexDirection="column">
                                        <Text>College</Text>
                                        <Text width="100%" backgroundColor="#C2C4FF" color="black" padding="1vh" borderRadius="12px">{data?.me?.college}</Text>
                                </Flex>
                                <Flex width="40%" marginBottom="4vh" textAlign="left" justifyContent="space-between" flexDirection="column">
                                    <Text>Branch</Text>
                                    <Text width="100%" backgroundColor="#C2C4FF" color="black" padding="1vh" borderRadius="12px">{data?.me?.department}</Text>
                                </Flex>
                           </Flex>
                           <Flex marginBottom="4vh" textAlign="left" justifyContent="space-between" flexDirection="column">
                                    <Text>Address</Text>
                                    <Text width="100%" backgroundColor="#C2C4FF" color="black" padding="1vh" borderRadius="12px">{data?.me?.address}</Text>
                            </Flex>
                           <Flex width="100%" justifyContent="space-between">
                                <Flex marginBottom="4vh" width="40%" textAlign="left" justifyContent="space-between" flexDirection="column">
                                        <Text>City</Text>
                                        <Text width="100%" backgroundColor="#C2C4FF" color="black" padding="1vh" borderRadius="12px">{data?.me?.city}</Text>
                                </Flex>
                                <Flex marginBottom="4vh" width="40%" textAlign="left" justifyContent="space-between" flexDirection="column">
                                        <Text>State</Text>
                                        <Text width="100%" backgroundColor="#C2C4FF" color="black" padding="1vh" borderRadius="12px">{data?.me?.state}</Text>
                                </Flex>
                           </Flex>
                        </Box>
                        <Swiper
                            scrollbar={{hide: false}}
                            slidesPerView={3}
                            spaceBetween={10}
                        >
                            <SwiperSlide>
                                <Flex backgroundImage={bg2} backdropBlur="100px" color="black" fontWeight="500" width="100%" height="100%" justifyContent="center" alignItems="center" flexDirection="column">
                                    <Text>Name</Text>
                                    <Text>6pm</Text>
                                    <Text>Individual</Text>
                                </Flex>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <Flex backgroundImage={bg2} backdropBlur="100px" color="black" fontWeight="500" width="100%" height="100%" justifyContent="center" alignItems="center" flexDirection="column">
                                                <Text>Name</Text>
                                                <Text>6pm</Text>
                                                <Text>Team</Text>
                                            </Flex>
                                        </div>
                                        <div className="flip-card-back">
                                            <Flex  width="100%" height="100%" justifyContent="center" alignItems="center" flexDirection="column">
                                                <Text>Team name</Text>
                                            </Flex>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {
                                data?.me?.registeredEvents.map(e => {
                                    return(
                                        <SwiperSlide>
                                            <Flex justifyContent="center" alignItems="center" flexDirection="column">
                                                <Text>{e.name}</Text>
                                                <Text>{e.eventTimeFrom}</Text>
                                                <Text>{e.registrationType}</Text>
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