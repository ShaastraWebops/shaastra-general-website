import React from "react"
import {
    Text,
    Stack,
    Flex,
    Heading,
    Box,
    Select,
   Input,
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
  } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { useState } from "react";
import CustomBox from '../../shared/CustomBox'


import bg from "../../../images/EventsWorkshops/events/bg.jpeg"
import { useGetEventsQuery } from "../../../generated/graphql";

const EventsAdmin = () => {

    const [vertical, setVertical] = useState<string>("")
    const [event, setEvent] = useState<string>("")

    const {data, loading, error} = useGetEventsQuery({})

    var events = data?.getEvents.events;


    return(
       <CustomBox>
           <Box width="100vw" padding="2vw 6vw">
            <Flex width="100%" justifyContent="center" marginBottom="8vh">
                <Heading textAlign="right" fontSize="7xl">EVENTS <br /> WORKSHOPS</Heading>
                <Heading alignSelf="center" color="#ea8a94" fontSize="7xl">&</Heading>
            </Flex>
            <Button width="100%" padding="1.5vw" backgroundColor="#75c9b0" marginBottom="4vh">Add Event</Button>
            <Flex width="88vw" marginBottom="4vh">
                <Input placeholder="Search for events"></Input>
                <Select placeholder="Vertical" marginLeft="2vw" width="15vw">
                            <option value="AEROFEST">AeroFest</option>
                            <option value="BIOGEN">Biogen</option>
                            <option value="BEVENTS">BEvents</option>
                            <option value="CL">Coding & Logic</option>
                            <option value="DB">Design & Build</option>
                            <option value="ELECFEST">ElecFest</option>
                            <option value="IGNITE">Ignite</option>
                            <option value="STRATEGISTS">Strategists</option>
                            <option value="WORKSHOPS">Workshops</option>
                </Select>
            </Flex>
            <Stack width="100%">
                <Box width="100%">
                    <Flex width="88vw" justifyContent="space-between" alignItems="center" className="admin-events-flex">
                        <Flex flexDirection="column" alignItems="center" width="15vw" height="15vw" className="admin-events-image-flex">
                            <Image src={bg} width="15vw" height="15vw" marginBottom="2vh"></Image>
                            <Text>Name</Text>
                        </Flex>
                        <Box>
                        <Text width="45vw">
                        The entire globe is now turning to the biotech sector to discover answers that will 
                                        assist humanity in overcoming the current Covid problem while also preparing us for 
                                        future outbreaks. The participants will go through many levels of questions such as, 
                                        Why did the second wave of Covid in India startle the whole world? Discuss the lessons 
                                        that India may learn in order to develop an effective research ecosystem capable of detecting, 
                                        understanding, and responding to future waves.
                        </Text>
                        </Box>
                    </Flex>
                    <Flex width="88vw" justifyContent="space-between" alignItems="center" marginTop="2vh" className="admin-events-details-flex">
                        <Box>
                            <Text>First: 100</Text>
                            <Text>First: 100</Text>
                            <Text>First: 100</Text>
                            <Text>First: 100</Text>
                        </Box>
                        <Box>
                            <Text>Platform: xoom</Text>
                            <Text>Reguiremetns: asdfghj</Text>
                            <Text>Type: Team</Text>
                        </Box>
                        <Box>
                            <Text>Team size: 4</Text>
                            <Text>Reg start: 1234567890</Text>
                            <Text>Reg start: 1234567890</Text>
                        </Box>
                        <Box>
                            <Text>Reg start: 1234567890</Text>
                            <Text>Reg start: 1234567890</Text>
                            <Button width="100%">Edit</Button>
                        </Box>
                    </Flex>
                </Box>
            </Stack>
           </Box>
       </CustomBox>
    )
}

export default EventsAdmin