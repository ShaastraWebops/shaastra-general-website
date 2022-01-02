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
import CardForWorkShop from './CardForWorksShop';
import EventsData from "./EventsData";

import bg from "../../../images/EventsWorkshops/events/bg.jpg"
import EventVerticalComponent from "./EventVeticalComponent"
import { Event, useGetEventsQuery } from "../../../generated/graphql";
import bg2 from '../../../images/EventsWorkshops/events/bg2.jpg'

const EventVertical = () => {

    const { name }: any = useParams()
    const desp = EventsData.filter(v => v.vertical === name)[0].desp

    const search = useColorModeValue("border", "noBorder")
    const font = useColorModeValue("black", "white")
    const gradient = useColorModeValue("blackG", "whiteG")
    const button = useColorModeValue("dark", "light")

    const { data, loading, error } = useGetEventsQuery({
        variables: {
            filter: name.toUpperCase()
        }
    })
    var events;
    if (data) {
        events = data?.getEvents.events;
        var eventsShuffle = events.map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
    }

    return (
        <CustomBox>
            <Box className="events-vertical">
                <Stack
                    textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 8, md: 8 }}
                    py={{ base: 20, md: 20 }}
                >
                    <Box position={"relative"} backgroundImage={bg} width="100%" height="fit-content" padding="4vw" backgroundRepeat="no-repeat" backgroundPosition="0px 50%" backgroundSize={"cover"}>
                        <Box color={"white"} content="" position={"absolute"} top="0" left="0" width={"100%"} height="100%" backgroundColor={"rgba(0, 0, 0, 0.4)"}></Box>
                        {
                            name === "aerofest" ? <Heading position={"relative"} zIndex={3} textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">AERO<span>FEST</span></Heading>
                                :
                                name === "cl" ? <Heading position={"relative"} zIndex={3} textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">Coding <span>&</span> Logic</Heading>
                                    :
                                    name === "elecfest" ? <Heading position={"relative"} zIndex={3} textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">ELEC<span>FEST</span></Heading>
                                        :
                                        name === "db" ? <Heading position={"relative"} zIndex={3} textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">Design <span>&</span> Build</Heading>
                                            :
                                            name === "workshops" ? <Heading position={"relative"} zIndex={3} textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">{name}</Heading>
                                                :
                                                name === "biogen" ? <Heading position={"relative"} zIndex={3} textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">BIO<span>GEN</span></Heading>
                                                    :
                                                    name === "bevents" ? <Heading position={"relative"} zIndex={3} textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">B<span>Events</span></Heading>
                                                        :
                                                        name === "ignite" ? <Heading position={"relative"} zIndex={3} textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">I<span>DP</span></Heading>
                                                            :
                                                            name === "strategists" ? <Heading position={"relative"} zIndex={3} textTransform="uppercase" backdropBlur="20px" fontSize="7xl" color="white">Quiz<span>zing</span></Heading>
                                                                : null
                        }
                        <Text position={"relative"} zIndex={3} color="white" width="60vw" margin="auto" className="vertical-desp" fontWeight={"700"} fontSize={"1.2vw"}>{desp}</Text>
                    </Box>
                    {name === "workshops" ? (
                        <Flex flexWrap={'wrap'} width={'100%'} justifyContent={'space-around'}>
                            <CardForWorkShop title="AI and RL,CV,complete guide to ML" WS1="AI and Reinforcement Learning" WS2="Zero to Hero in CV" WS3="A completer guide to Machine Learning" Price1="500" Price2="600" Price3="500" ActualPrice="1600" DiscountedPrice="1300" ComboName="AI Combo"/>
                            <CardForWorkShop title="Intro to Robotics & Path Tracking" WS1="Intro to Robotics" WS2="Path Tracking in Autonomous Vehicles" WS3="Build your own Autonomus Robot" Price1="500" Price2="500" Price3="600" ActualPrice="1600" DiscountedPrice="1300" ComboName="Robotics Combo"/>
                            <CardForWorkShop title="Data Science With Projects, Sustainibility using ML & DS" WS1="Intro to DS with Projects" WS2="Sustainibility using ML & DS" WS3="Art of Data Visualization" Price1="500" Price2="500" Price3="500" ActualPrice="1500" DiscountedPrice="1200" ComboName="Data Science Combo"/>
                            <CardForWorkShop title="CC,Hacking,Discord bot" WS1="Intro to Cloud Computing" WS2="Hacking 101 with Microcontrollers" WS3="Making Discord bot from scratch" Price1="500" Price2="500" Price3="500" ActualPrice="1500" DiscountedPrice="1200" ComboName="Cybermatic Combo"/>
                            <CardForWorkShop title="Arduino, embedded system,RTOS" WS1="Intro to Arduino and ioT" WS2="Intro to Embedded system Programming" WS3="Parallel Processing and Real-time OS" Price1="500" Price2="500" Price3="600" ActualPrice="1600" DiscountedPrice="1300" ComboName="Electronic Combo"/>
                        </Flex>
                    ) : (
                        <></>
                    )}
                    {/* <Flex width="100vw" justifyContent="space-evenly" alignItems="center">
                <input type="text" className={search} />
                <Button backgroundColor="white" className={search} color="black" onClick={filter}>Search</Button>
            </Flex> */}
                    {
                        eventsShuffle?.map((event) => {
                            if (event.vertical === "IGNITE" && event.id === "ckxdasopm0024wop7cxphcidu") return null
                            return (
                                <EventVerticalComponent data={event} isAdmin={false} />
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