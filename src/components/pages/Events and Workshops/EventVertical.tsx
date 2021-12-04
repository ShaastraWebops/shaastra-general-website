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

import bg from "../../../images/EventsWorkshops/events/bg.jpeg"
import EventVerticalComponent from "./EventVeticalComponent"
import { Event, useGetEventsQuery } from "../../../generated/graphql";

const EventVertical = () => {

    const {name} : any = useParams()
    const desp = EventsData.filter(v => v.vertical === name)[0].desp

    const search = useColorModeValue("border", "noBorder")
    const font = useColorModeValue("black", "white")
    const gradient = useColorModeValue("blackG", "whiteG")
    const button = useColorModeValue("dark", "light")

    const {data , loading , error} = useGetEventsQuery({
        variables : {
            filter : name
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
            <Box backgroundImage={bg} width="100vw" height="fit-content" padding="4vw" backgroundRepeat="no-repeat" backgroundPosition="center"> 
                {
                    name==="AEROFEST" ? <Heading textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">AERO<span>FEST</span></Heading>
                    : 
                    name==="CL" ? <Heading textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">Coding <span>&</span> Logic</Heading>
                    :
                    name==="ELECFEST" ? <Heading textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">ELEC<span>FEST</span></Heading>
                    :
                    name==="DB" ? <Heading textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">Design <span>&</span> Build</Heading>
                    :
                    name==="WORKSHOPS" ? <Heading textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">{name}</Heading>
                    :
                    name==="BIOGEN" ? <Heading textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">BIO<span>GEN</span></Heading>
                    :
                    name==="BEVENTS" ? <Heading textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">B<span>Events</span></Heading>
                    : null
                }
                <Text color="white" width="50vw" margin="auto" className="vertical-desp">{desp}</Text>
            </Box>
            <Flex width="100vw" justifyContent="space-evenly" alignItems="center">
                <input type="text" className={search} />
                <Button backgroundColor="white" className={search} color="black" onClick={filter}>Search</Button>
            </Flex>
            {
                data?.getEvents.events.map((event)=>{
                        return(
                            <EventVerticalComponent data= {event} />
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