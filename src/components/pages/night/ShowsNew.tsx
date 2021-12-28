import React from "react"
import CustomBox from '../../shared/CustomBox'
import Footer from '../../shared/Footer'

import {
    Text,
    Stack,
    Link,
    Flex,
    Tooltip,
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
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Heading,
    Center,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverArrow,
    PopoverCloseButton,
    PopoverBody,
    PopoverFooter,
    ButtonGroup,
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'

  import Dan from "../../../images/night/Dan_img.jpg"
  import Gloves from "../../../images/night/Gloves02.jpg"
  import Harmony from "../../../images/night/Harmony-SonicSnares-2.jpg"
  import Heimdall from "../../../images/night/Heimdall1.jpg"
  import Mirage from "../../../images/night/Mirage.jpg"
  import Nothwind from "../../../images/night/Nothwind1.jpg"
  import Vivek from "../../../images/night/vivek patil.jpg"
  import Reverb from "../../../images/night/Reverb.jpg"
  import Soda from "../../../images/night/Comedy Night.jpeg"
  import About from "../../../images/night/About Us_Background.png"

  import Four from "../../../images/night/4.jpeg"
  import Dyskenetic from "../../../images/night/dyskenetic.jpeg"
  import Lizzie from "../../../images/night/lizzie.jpg"
  import Alex from "../../../images/night/alex mclen.jpg"

  import ShowsBg from "../../../images/night/ShowsHome.mp4"

  import ContactBg from "../../../images/night/Contact us - Background.png"

  import "../../../styles/night/ShowsNew.css"

const Shows = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isLabelOpen1, setIsLabelOpen1] = React.useState(false)
    const [isLabelOpen2, setIsLabelOpen2] = React.useState(false)
    const [isLabelOpen3, setIsLabelOpen3] = React.useState(false)
    const [isLabelOpen4, setIsLabelOpen4] = React.useState(false)
    const [isLabelOpen5, setIsLabelOpen5] = React.useState(false)
    const [isLabelOpen6, setIsLabelOpen6] = React.useState(false)
    const [isLabelOpen7, setIsLabelOpen7] = React.useState(false)
    const [isLabelOpen8, setIsLabelOpen8] = React.useState(false)
    const [isLabelOpen9, setIsLabelOpen9] = React.useState(false)
    const [isLabelOpen10, setIsLabelOpen10] = React.useState(false)
    // const [isLabelOpen, setIsLabelOpen] = React.useState(false)
    // const [isLabelOpen, setIsLabelOpen] = React.useState(false)
    var message = `
    Sand Art and Light Show | Shaastra 2016  Performed by Vivek Patil\n\
    The renowned visual storyteller artist, headlined the first show. Putting together a trifecta of Light, Sand, and Speed Art, the show was a stunning visual experience.`
    return(
       <CustomBox>
           <link href="http://fonts.cdnfonts.com/css/neue-helvetica-bq" rel="stylesheet"></link>
           <Stack
            textAlign={'center'}
            align={'center'}
            // spacing={{ base: 8, md: 8 }}
            py={{ base: 20, md: 20 }}
            padding={["18vw","4vw"]} 
            overflowX={"hidden"}
           >
               <Flex 
                    height={"5vh"} width="100vw" 
                    padding="2vw"
                    justifyContent={"flex-start"} alignItems={"center"} 
                    fontFamily={"Roboto"} fontSize={["2.5vw","1vw"]}
                    backgroundColor={"black"} color="white"
                >
                    <Text marginRight={"4vw"}> <a href="#homeShowNew">Home</a> </Text>
                    <Text marginRight={"4vw"}> <a href="#about">About us</a> </Text>
                    <Text marginRight={"4vw"}> <a href="#previous">Previous shows</a> </Text>
                    <Text marginRight={"4vw"}> <a href="#reverb">Reverb</a> </Text>
                    <Text > <a href="#contact">Contact Shaastra Nights</a> </Text>
               </Flex>
               <Flex 
                flexDirection={"column"} justifyContent={"center"} alignItems={"center"}
                height="83vh" width="100vw" marginTop={"0vw"}
                id="homeShowNew" position={"relative"}
               >
                   <Box className="video-container-shows" position={"absolute"} top={"0"} left="0">
                   <video id="video-shows" src={ShowsBg} muted={true} autoPlay={true} loop={true}>
                    </video>
                   </Box>
                   <Box width="100vw" height={"83vh"} position={"absolute"} top={"0"} left={"0"} content="" backgroundColor={"rgba(0, 0, 0, 0.6)"} zIndex={"1"}></Box>
                   <Heading
                    zIndex={"2"}
                    fontSize={["8vw","4vw"]}
                    color={"white"}
                    marginBottom={"4vh"}
                    fontFamily= "Neue Helvetica BQ"
                   >SHAASTRA NIGHTS</Heading>
                   {/* <Box
                    backgroundColor={"#00F7FF"} color={"black"}
                    fontFamily={"Montserrat"} fontWeight={"bold"}
                    padding={["2vw","1vw"]} zIndex={"2"}
                    borderRadius={["5px","12px"]} fontSize={["2.75vw", "1vw"]}
                   >Register for shows</Box> */}
               </Flex>
               <Flex
                height="100vh" width="100vw"
                color="white"
                id="about" position={"relative"}
                flexDirection={"column"} justifyContent={"center"} alignItems={"center"} 
               >
                   <Image src={About} position={"absolute"} top="0" left="0" width="100vw" height="100vh" objectFit={"cover"}></Image>
                   <Heading marginBottom={"4vh"} fontSize={["8vw","3vw"]} zIndex={2}  fontFamily= "Neue Helvetica BQ">ABOUT US</Heading>
                   <Text width="80%" fontSize={["4vw","1.5vw"]} zIndex={2}>
                    The flagship event of Shaastra, Shaastra Nights, has made the former a noteworthy leader amongst 
                    parallel fests in the country. Shaastra Nights provide a platform for exquisite performers to display 
                    their artistic prowess while giving the audience a once-in-a-lifetime opportunity to witness a confluence of 
                    technology and culture. Shaastra Nights is non-ticketed - an attribute that distinguishes it from shows 
                    akin; it enables students and the public to access quality entertainment at its finest. Behind the warranted 
                    glitz and glamour, Shaastra Nights' true intentions shine - diversity and inclusivity.
                   </Text>
               </Flex>
               <Flex
                 id="previous"
                 backgroundColor={"black"}
                 padding={"4vh 0"}
                 height="fit-content" width="100vw"
                 flexDirection={"column"} justifyContent={"center"} alignItems={"center"}
               >
                   <Heading marginBottom={"8vh"} fontSize={["8vw","3vw"]} color="white"  fontFamily= "Neue Helvetica BQ">
                        PREVIOUS SHOWS
                   </Heading>
                   <Flex
                    width={["90%","70%"]} margin="auto" marginBottom={"4vh"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                   >
                       <Tooltip size="400px" label={`
                       Sand Art and Light Show | Shaastra 2016  Performed by Vivek Patil -
                       The renowned visual storyteller artist, headlined the first show. Putting together a trifecta of Light, Sand, and Speed Art, the show was a stunning visual experience.`} 
                        placement="right" padding="2vw" className="shows-tooltip" maxWidth={["50vw","25vw"]} fontSize={["2.5vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}
                        isOpen={isLabelOpen1} 
                        >
                        <Image onMouseEnter={() => setIsLabelOpen1(true)}
                                onMouseLeave={() => setIsLabelOpen1(false)}
                                onClick={() => setIsLabelOpen1(true)}
                        borderRadius={'24px'} src={Vivek} boxSize={["35vw","25vw"]} objectFit={"cover"}></Image>
                       </Tooltip>
                       <Tooltip isOpen={isLabelOpen2}
                       label="MIRAGE Laser Show | Shaastra 2019  Performed by Vilas Nayak - A finalist of the 3rd season of India’s Got Talent, the self-taught speed painting artist mesmerized the crowd with his quick pace and stunning technique." 
                        placement="right" padding="2vw" fontSize={["2.5vw","1vw"]} maxWidth={["50vw","25vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                        <Image onMouseEnter={() => setIsLabelOpen2(true)}
                                onMouseLeave={() => setIsLabelOpen2(false)}
                                onClick={() => setIsLabelOpen2(true)} 
                                borderRadius={'24px'} src={Mirage} boxSize={["35vw","25vw"]} objectFit={"cover"}></Image>
                       </Tooltip>
                   </Flex>
                   <Flex
                      width={["90%","70%"]} margin="auto" marginBottom={"4vh"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                   >
                       <Tooltip isOpen={isLabelOpen3}  
                       label="LASER HARP Live Performance | Shaastra 2020 Performed by Heimdall - Armed himself with a harp that is lit up in the colors of the visible spectrum, his oeuvre of thumping electronic music along with the vibrant light orchestration, the show was an enrapturing production." 
                        placement="right" padding="2vw" maxWidth={["55vw","28vw"]} fontSize={["2.5vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                        <Image onMouseEnter={() => setIsLabelOpen3(true)}
                                onMouseLeave={() => setIsLabelOpen3(false)}
                                onClick={() => setIsLabelOpen3(true)} 
                                borderRadius={'24px'} src={Heimdall} boxSize={["35vw","25vw"]} objectFit={"cover"}></Image>
                       </Tooltip>
                       <Tooltip isOpen={isLabelOpen4} 
                       label="Virtual Magic Show | Shaastra Juniors 2020 Performed by Dan Rhodes - He blew the minds of our young audience with his savvy magic tricks. The then 16-year-old magician became an inspiration for the young crowd." 
                        placement="right" padding="2vw" maxWidth={["55vw","25vw"]} fontSize={["2.5vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                        <Image onMouseEnter={() => setIsLabelOpen4(true)}
                                onMouseLeave={() => setIsLabelOpen4(false)}
                                onClick={() => setIsLabelOpen4(true)} 
                                borderRadius={'24px'} src={Dan} boxSize={["35vw","25vw"]} objectFit={"cover"}></Image>
                       </Tooltip>
                   </Flex>
                   <Flex
                     width={["90%","70%"]} margin="auto"
                    justifyContent={"space-between"}
                    alignItems={"center"}
                   >
                       <Tooltip isOpen={isLabelOpen5} 
                       label="HARMONY | Shaastra 2021 Main Show by Sonic Snares With his vivacious act of lush HD visuals and intoxicating beats, the brilliant Austrian artist took the audience into a world of trance." 
                        placement="right" padding="2vw" maxWidth={["40vw","18vw"]} fontSize={["2.5vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                        <Image onMouseEnter={() => setIsLabelOpen5(true)}
                                onMouseLeave={() => setIsLabelOpen5(false)}
                                onClick={() => setIsLabelOpen5(true)} 
                                borderRadius={'24px'} src={Harmony} boxSize={["35vw","25vw"]} objectFit={"cover"} objectPosition={"top"}></Image>
                       </Tooltip>
                       <Tooltip isOpen={isLabelOpen6} 
                       label="CHAOS | Shaastra 2021 Opening Show by Sudarshan Ramamurthy - popularly known as SODA, set the mood for the comedy night with his witty humor." 
                        placement="right" padding="2vw" maxWidth={["40vw","18vw"]} fontSize={["2.5vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                        <Image onMouseEnter={() => setIsLabelOpen6(true)}
                                onMouseLeave={() => setIsLabelOpen6(false)}
                                onClick={() => setIsLabelOpen6(true)} 
                                borderRadius={'24px'} src={Soda} boxSize={["35vw","25vw"]} objectFit={"cover"}></Image>
                       </Tooltip>
                   </Flex>
               </Flex>
               <Flex width={"100vw"} height={"100vh"} marginTop={"0%"}
               id="reverb"
                flexDirection={"column"} justifyContent={"center"} alignItems={"center"}
                color="white" position="relative"
                backgroundImage={Reverb} backgroundPosition={"center"} backgroundRepeat={"no-repeat"} backgroundSize={"cover"}
               >
                   <Box position={"absolute"} top="0" left="0" content="" height="100vh" width="100vw" backgroundColor={"rgba(0, 0, 0, 0.6)"}></Box>
                   <Heading marginBottom={"4vh"} fontSize={["8vw","3vw"]} zIndex={"2"}  fontFamily= "Neue Helvetica BQ">REVERB</Heading>
                   <Text width="80%" fontSize={["4vw","1.5vw"]} fontFamily={"Montserrat"} zIndex={"2"}>
                    Our latest series, Reverb, aims to bridge the gap between technology and music by showcasing 
                    performances that are a juxtaposition of the same.
                   </Text>
               </Flex>
               <Flex
                 backgroundColor={"black"}
                 padding={"4vh 0"}
                 height="fit-content" width="100vw"
                 flexDirection={"column"} justifyContent={"center"} alignItems={"center"}
               >
                   <Flex
                    width={["90%","70%"]} margin="auto" marginBottom={"4vh"} paddingTop={"4vh"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                   >
                       <Tooltip isOpen={isLabelOpen7} 
                       label="ALGORAVE | Presented by Reverb - Alex McLean, Lizzie Wilson, and Abhinay Khoparzi This legendary collaboration among the 3 pioneering artists took coding from the obscurities of a screen to the dance floor." 
                        placement="right" padding="2vw"maxWidth={["50vw","25vw"]} fontSize={["2.5vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                        <Image onMouseEnter={() => setIsLabelOpen7(true)}
                                onMouseLeave={() => setIsLabelOpen7(false)}
                                onClick={() => setIsLabelOpen7(true)} 
                                borderRadius={'24px'} src={Four} boxSize={["35vw","25vw"]} objectFit={"cover"}></Image>
                       </Tooltip>
                       <Tooltip isOpen={isLabelOpen8} 
                       label="ALGORAVE | Presented by Reverb - Alex McLean, Lizzie Wilson, and Abhinay Khoparzi This legendary collaboration among the 3 pioneering artists took coding from the obscurities of a screen to the dance floor." 
                        placement="right" padding="2vw" maxWidth={["50vw","25vw"]} fontSize={["2.5vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                        <Image onMouseEnter={() => setIsLabelOpen8(true)}
                                onMouseLeave={() => setIsLabelOpen8(false)}
                                onClick={() => setIsLabelOpen8(true)} 
                                borderRadius={'24px'} src={Alex} boxSize={["35vw","25vw"]} objectFit={"cover"}></Image>
                       </Tooltip>
                   </Flex>
                   <Flex
                    width={["90%","70%"]} margin="auto" marginBottom={"4vh"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                   >
                       <Tooltip isOpen={isLabelOpen9} 
                       label="REVERB ft. Dyskinetic | Shaastra Juniors 2021 The show introduced MiMu gloves to the young technophiles out there with spooky soundtracks." 
                        placement="right" padding="2vw" maxWidth={["55vw","25vw"]} fontSize={["2.5vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                        <Image onMouseEnter={() => setIsLabelOpen9(true)}
                                onMouseLeave={() => setIsLabelOpen9(false)}
                                onClick={() => setIsLabelOpen9(true)} 
                                borderRadius={'24px'} src={Dyskenetic} boxSize={["35vw","25vw"]} objectFit={"cover"}></Image>
                       </Tooltip>
                       <Tooltip isOpen={isLabelOpen10} 
                       label="ALGORAVE | Presented by Reverb - Alex McLean, Lizzie Wilson, and Abhinay Khoparzi This legendary collaboration among the 3 pioneering artists took coding from the obscurities of a screen to the dance floor." 
                        placement="right" padding="2vw" maxWidth={["50vw","25vw"]} fontSize={["2.5vw","1vw"]} backgroundColor={"#00F7FF"} color="black" font-fontFamily={"Roboto"}>
                        <Image onMouseEnter={() => setIsLabelOpen10(true)}
                                onMouseLeave={() => setIsLabelOpen10(false)}
                                onClick={() => setIsLabelOpen10(true)} 
                                borderRadius={'24px'} src={Lizzie} boxSize={["35vw","25vw"]} objectFit={"cover"}></Image>
                       </Tooltip>
                   </Flex>
               </Flex>
               <Flex with="100vw"  justifyContent={"center"} padding="2vw" margin="0"
                id="contact" height={["5vh","15vh"]} position={"relative"} 
               >
                    <Image src={ContactBg} width="110vw" height={["5vh","15vh"]} position="absolute" top="0" left="0%" objectFit={"cover"}></Image>
                    <Box zIndex="2" width="100vw" padding="auto" fontSize={["3.5vw","2vw"]} fontFamily={"Montserrat"}> <b>Contact Shaastra Nights:</b> shows@shaastra.org</Box>
               </Flex>
           </Stack>
           <Footer designed={[{ name: 'Krithikaa', mail: 'be20b020@smail.iitm.ac.in' }]} ></Footer>   
       </CustomBox>
    )
}

export default Shows