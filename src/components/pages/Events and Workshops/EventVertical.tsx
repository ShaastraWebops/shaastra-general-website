import * as React from "react"
import {
    Text,
    Stack,
    Flex,
    Link,
    Box,
    Heading,
    Image,
    Button,
    useColorModeValue,
    Center
  } from '@chakra-ui/react'
import { useParams } from "react-router-dom"
import CustomBox from '../../shared/CustomBox'
import Footer from '../../shared/Footer';

import EventsData from "./EventsData";

import bg from "../../../images/EventsWorkshops/events/bg.jpg"
import EventVerticalComponent from "./EventVeticalComponent"
import { Event, useGetEventsQuery } from "../../../generated/graphql";
import bg2 from '../../../images/EventsWorkshops/events/bg2.jpg'

const EventVertical = () => {

    const {name} : any = useParams()
    const desp = EventsData.filter(v => v.vertical === name)[0].desp

    const search = useColorModeValue("border", "noBorder")
    const font = useColorModeValue("black", "white")
    const gradient = useColorModeValue("blackG", "whiteG")
    const button = useColorModeValue("dark", "light")

    const {data , loading , error} = useGetEventsQuery({
        variables : {
            filter : name.toUpperCase()
        }
    })
    console.log(data?.getEvents.events)
    const filter = () => {

    }

    return(
        <CustomBox>
        <Box className="events-vertical">
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 8 }}
                py={{ base: 20, md: 20 }}
            >
            <Box position={"relative"} backgroundImage={bg} width="100vw" height="fit-content" padding="4vw" backgroundRepeat="no-repeat" backgroundPosition="0px 50%" backgroundSize={"cover"}> 
            <Box color={"white"} content="" position={"absolute"} top="0" left="0" width={"100vw"} height="100%" backgroundColor={"rgba(0, 0, 0, 0.4)"}></Box>
                {
                    name==="aerofest" ? <Heading position={"relative"} zIndex={3} textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">AERO<span>FEST</span></Heading>
                    : 
                    name==="cl" ? <Heading position={"relative"} zIndex={3} textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">Coding <span>&</span> Logic</Heading>
                    :
                    name==="elecfest" ? <Heading position={"relative"} zIndex={3} textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">ELEC<span>FEST</span></Heading>
                    :
                    name==="db" ? <Heading position={"relative"} zIndex={3} textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">Design <span>&</span> Build</Heading>
                    :
                    name==="workshops" ? <Heading position={"relative"} zIndex={3} textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">{name}</Heading>
                    :
                    name==="biogen" ? <Heading position={"relative"} zIndex={3} textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">BIO<span>GEN</span></Heading>
                    :
                    name==="bevents" ? <Heading position={"relative"} zIndex={3} textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">B<span>Events</span></Heading>
                    : 
                    name==="ignite" ? <Heading position={"relative"} zIndex={3} textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">I<span>DP</span></Heading>
                    :
                    name==="strategists" ? <Heading position={"relative"} zIndex={3} textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">Quiz<span>zing</span></Heading>
                    : null
                }
                <Text position={"relative"} zIndex={3} color="white" width="60vw" margin="auto" className="vertical-desp" fontWeight={"700"} fontSize={"1.2vw"}>{desp}</Text>
            </Box>
            {/* <Flex width="100vw" justifyContent="space-evenly" alignItems="center">
                <input type="text" className={search} />
                <Button backgroundColor="white" className={search} color="black" onClick={filter}>Search</Button>
            </Flex> */}
            {
                data?.getEvents.events.map((event)=>{
                    if(event.vertical === "IGNITE" && event.id === "ckxdasopm0024wop7cxphcidu" ) return null
                        return(
                            <EventVerticalComponent data= {event} isAdmin = {false}/>
                        )
                }) 
            }
            </Stack>
        </Box>
        <Footer designed={[{ name: 'Krithikaa', mail: 'be20b020@smail.iitm.ac.in' }]} />
    </CustomBox>
    )
}

export default EventVertical;