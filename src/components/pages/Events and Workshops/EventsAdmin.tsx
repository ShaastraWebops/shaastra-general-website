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
import { useGetEventsQuery } from "../../../generated/graphql";
import EventVerticalComponent from "./EventVeticalComponent";

const EventsAdmin = () => {

    const [vertical, setVertical] = useState<string>("AEROFEST")
    const [event, setEvent] = useState<string>("")

    const {data, loading, error} = useGetEventsQuery({
        variables : {
            filter : vertical
        }
    })

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
                <Select placeholder="Vertical" marginLeft="2vw" width="15vw" value={vertical} onChange={e=> setVertical(e.target.value)}>
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
            <Box className="events-vertical">
                <Stack
                 textAlign={'center'}
                 align={'center'}
                 spacing={{ base: 8, md: 8 }}
                 paddingBottom={{ base: 20, md: 20 }}>
                {
                events?.map((event)=>{
                        return(
                            <EventVerticalComponent data= {event} isAdmin ={true} />
                        )
                }) 
            }
                </Stack>
            </Box>
           
           </Box>
       </CustomBox>
    )
}

export default EventsAdmin