import * as React from "react"
import {
    Text,
    Stack, Input,
    Flex,
    Link,
    Box, Select,
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
import tshirt1 from '../../../images/EventsWorkshops/tshirt1.jpeg';
import tshirt2 from '../../../images/EventsWorkshops/tshirt2.jpeg';
import tshirt3 from '../../../images/EventsWorkshops/tshirt3.jpeg';
import bg from "../../../images/EventsWorkshops/events/bg.jpg"
import EventVerticalComponent from "./EventVeticalComponent"
import { Event, useGetEventsQuery } from "../../../generated/graphql";
import bg2 from '../../../images/EventsWorkshops/events/bg2.jpg'
import '../../../styles/eventWorkshops.css';
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
    const [selectedTshirt, setSelectedTshirt] = React.useState("");
    const SelectedTshirt = (e) => {
        let name, value;
        name = e.target.name;
        value = e.target.value;
        setSelectedTshirt(value);
        console.log(selectedTshirt);
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
                 {/* <Flex width={'90%'} justifyContent={'center'}>
                        <Flex flexDirection={'column'} width={'100%'} justifyContent={'center'} alignItems={'center'} border={'1px black dashed'} borderRadius={'10px'}>
                            <Text paddingTop={'20px'} fontSize={'30px'} fontWeight={800} paddingBottom={'0px'}>Select Any 2 Course + T-Shirt</Text>
                            <Text paddingTop={'10px'} fontSize={'25px'} fontWeight={600} paddingBottom={'0px'}>At Only Discounted Price &#8377;1150</Text>
                            <Text paddingTop={'0px'} fontSize={'20px'} fontWeight={600} paddingBottom={'20px'} textDecorationLine={'line-through'}>&#8377;1350</Text>
                            <Input borderRadius={'0px'} variant='flushed' placeholder='Enter Your Address Here' className="specialinput" marginBottom={'20px'} />
                            <Flex justifyContent={'space-around'} width={'90%'}>
                                <a href="#" onClick={SelectedTshirt}>
                                    <Image border={'2px solid #000'} src={tshirt1} alt="tshirt1" value="saved forever" name="saved forever" width={'170px'} borderRadius={'10px'} marginBottom={'10px'}></Image>
                                </a>
                                <a href="#" onClick={SelectedTshirt}>
                                    <Image border={'2px solid #000'} src={tshirt2} alt="tshirt2" value="dogecoins" name="dogecoins" width={'170px'} borderRadius={'10px'} marginBottom={'10px'}></Image>
                                </a>
                                <a href="#" onClick={SelectedTshirt}>
                                    <Image border={'2px solid #000'} src={tshirt3} alt="tshirt3" value="shoot at the future" name="shoot at the future" width={'170px'} borderRadius={'10px'} marginBottom={'10px'}></Image>
                                </a>
                            </Flex>
                            <Flex width={'93%'} justifyContent={'center'}>
                                <Select placeholder='Select T-Shirt Size' marginBottom={'20px'}>
                                    <option value='option1'>XS</option>
                                    <option value='option2'>S</option>
                                    <option value='option3'>M</option>
                                    <option value='option4'>L</option>
                                    <option value='option5'>XL</option>
                                    <option value='option6'>XXL</option>
                                </Select>
                            </Flex>
                            <Flex width={'93%'} justifyContent={'center'}>
                                <Select placeholder='Select 1st Course' marginBottom={'20px'}>
                                    <option value='option1'>Inverse Kinematics using ROS Moveit</option>
                                    <option value='option2'>Sustainability using Machine Learning and Data Science</option>
                                    <option value='option3'>Circuit simulation and PCB design</option>
                                    <option value='option4'>Grant Writing Workshop</option>
                                    <option value='option5'>Path Tracking in Autonomous Vehicles</option>
                                    <option value='option6'>A Complete Guide to Machine Learning</option>
                                    <option value='option7'>Build your own Autonomous Robot</option>
                                    <option value='option8'>Computers can fly now? (Intro to Cloud Computing)</option>
                                    <option value='option9'>Parallel Processing and Real-Time Operating Systems</option>
                                    <option value='option10'>Full Stack Web development</option>
                                    <option value='option11'>Zero to Hero in Computer Vision</option>
                                    <option value='option12'>Learn Fusion 360: Design, Animate & Simulate</option>
                                    <option value='option13'>Introduction to Robotics</option>
                                    <option value='option14'>Art of Data Visualisation</option>
                                    <option value='option15'>Introduction to Embedded Systems Programming</option>
                                    <option value='option16'>Understanding the Finite Element Method and its Applications</option>
                                    <option value='option17'>How to make a Discord Bot from scratch</option>
                                    <option value='option18'>Introductory Data Science course With Real Life Projects</option>
                                    <option value='option19'>Introduction to Arduino and IoT</option>
                                    <option value='option20'>Artificial Intelligence and Reinforcement Learning</option>
                                    <option value='option21'>Hacking 101 with Microcontrollers</option>
                                    <option value='option22'>Simulation of Mechanisms using MATLAB</option>
                                    <option value='option23'>Product Management 101</option>
                                    <option value='option24'>Consult 101</option>
                                </Select>
                            </Flex>
                            <Flex width={'93%'} justifyContent={'center'}>
                                <Select placeholder='Select 2nd Course' marginBottom={'20px'}>
                                    <option value='option1'>Inverse Kinematics using ROS Moveit</option>
                                    <option value='option2'>Sustainability using Machine Learning and Data Science</option>
                                    <option value='option3'>Circuit simulation and PCB design</option>
                                    <option value='option4'>Grant Writing Workshop</option>
                                    <option value='option5'>Path Tracking in Autonomous Vehicles</option>
                                    <option value='option6'>A Complete Guide to Machine Learning</option>
                                    <option value='option7'>Build your own Autonomous Robot</option>
                                    <option value='option8'>Computers can fly now? (Intro to Cloud Computing)</option>
                                    <option value='option9'>Parallel Processing and Real-Time Operating Systems</option>
                                    <option value='option10'>Full Stack Web development</option>
                                    <option value='option11'>Zero to Hero in Computer Vision</option>
                                    <option value='option12'>Learn Fusion 360: Design, Animate & Simulate</option>
                                    <option value='option13'>Introduction to Robotics</option>
                                    <option value='option14'>Art of Data Visualisation</option>
                                    <option value='option15'>Introduction to Embedded Systems Programming</option>
                                    <option value='option16'>Understanding the Finite Element Method and its Applications</option>
                                    <option value='option17'>How to make a Discord Bot from scratch</option>
                                    <option value='option18'>Introductory Data Science course With Real Life Projects</option>
                                    <option value='option19'>Introduction to Arduino and IoT</option>
                                    <option value='option20'>Artificial Intelligence and Reinforcement Learning</option>
                                    <option value='option21'>Hacking 101 with Microcontrollers</option>
                                    <option value='option22'>Simulation of Mechanisms using MATLAB</option>
                                    <option value='option23'>Product Management 101</option>
                                    <option value='option24'>Consult 101</option>
                                </Select>
                            </Flex>
                            <Button
                                mt={10}
                                w={'40%'}
                                marginBottom={'20px'}
                                bg={'#301b1b'}
                                color={'white'}
                                rounded={'xl'}
                                boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                                _hover={{
                                    bg: '#543535',
                                }}
                                _focus={{
                                    bg: '#543535',
                                }}>
                                Register Now
                            </Button>
                        </Flex>
                    </Flex> */}

                    {name === "workshops" ? (
                        <Flex flexWrap={'wrap'} width={'100%'} justifyContent={'space-around'}>
                            <CardForWorkShop title="Dive into the world of ML with" WS1="AI and Reinforcement Learning" WS2="Zero to Hero in CV" WS3="A completer guide to Machine Learning" Price1="500" Price2="600" Price3="500" ActualPrice="1600" DiscountedPrice="1300" ComboName="AI Combo" />
                            <CardForWorkShop title="Get into amazing world of robotics with" WS1="Intro to Robotics" WS2="Path Tracking in Autonomous Vehicles" WS3="Build your own Autonomus Robot" Price1="500" Price2="500" Price3="600" ActualPrice="1600" DiscountedPrice="1300" ComboName="Robotics Combo" />
                            <CardForWorkShop title="Learn the amazing applications of Data Science with " WS1="Intro to DS with Projects" WS2="Sustainibility using ML & DS" WS3="Art of Data Visualization" Price1="500" Price2="500" Price3="500" ActualPrice="1500" DiscountedPrice="1200" ComboName="Data Science Combo" />
                            <CardForWorkShop title="Gear up your computer skills with " WS1="Intro to Cloud Computing" WS2="Hacking 101 with Microcontrollers" WS3="Making Discord bot from scratch" Price1="500" Price2="500" Price3="500" ActualPrice="1500" DiscountedPrice="1200" ComboName="Cybermatic Combo" />
                            <CardForWorkShop title="Explore the exciting world of electronics with" WS1="Intro to Arduino and ioT" WS2="Intro to Embedded system Programming" WS3="Parallel Processing and Real-time OS" Price1="500" Price2="500" Price3="600" ActualPrice="1600" DiscountedPrice="1300" ComboName="Electronic Combo" />
                            <CardForWorkShop title="Start your career in consultancy and management with" WS3="Product Management 101" WS2="Consult 101" WS1="2 Workshops" Price1="500" Price2="500" Price3="350" ActualPrice="1000" DiscountedPrice="800" ComboName="Management Workshops" />
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