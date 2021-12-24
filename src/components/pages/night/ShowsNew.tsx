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
    useDisclosure,
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

  import Dan from "../../../images/night/Dan_img.jpg"
  import Gloves from "../../../images/night/Gloves02.jpg"
  import Harmony from "../../../images/night/Harmony-SonicSnares-2.jpg"
  import Heimdall from "../../../images/night/Heimdall1.jpg"
  import Mirage from "../../../images/night/Mirage.jpg"
  import Nothwind from "../../../images/night/Nothwind1.jpg"
  import Vivek from "../../../images/night/vivek patil.jpg"
  import Reverb from "../../../images/night/Reverb.jpg"

  import Four from "../../../images/night/4.jpeg"
  import Dyskenetic from "../../../images/night/dyskenetic.jpeg"
  import Lizzie from "../../../images/night/lizzie.jpg"
  import Alex from "../../../images/night/alex mclen.jpg"

const Shows = () => {
    return(
       <CustomBox>
           <Stack
            textAlign={'center'}
            align={'center'}
            spacing={{ base: 8, md: 8 }}
            py={{ base: 20, md: 20 }}
            padding="4vw"
            overflowX={"hidden"}
           >
               <Flex 
                    height={"5vh"} width="100vw" 
                    padding="2vw" 
                    justifyContent={"flex-start"} alignItems={"center"} 
                    fontFamily={"Roboto"} fontSize={"1vw"}
                    backgroundColor={"black"} color="white"
                >
                    <Text marginRight={"4vw"}> <a href="#home">Home</a> </Text>
                    <Text marginRight={"4vw"}> <a href="#about">About us</a> </Text>
                    <Text marginRight={"4vw"}> <a href="#previous">Previous shows</a> </Text>
                    <Text marginRight={"4vw"}> <a href="#reverb">Reverb</a> </Text>
                    <Text > <a href="#contact">Contact Shaastra Nights</a> </Text>
               </Flex>
               <Flex 
                flexDirection={"column"} justifyContent={"center"} alignItems={"center"}
                height="66vh" 
                id="home"
               >
                   <Heading
                    fontSize={"3vw"}
                    marginBottom={"4vh"}
                   >SHAASTRA NIGHTS</Heading>
                   <Box
                    backgroundColor={"#00F7FF"} color={"black"}
                    fontFamily={"Montserrat"} fontWeight={"bold"}
                    padding={"1vw"}
                    borderRadius={"12px"}
                   >Register for shows</Box>
               </Flex>
               <Flex
                height="100vh" width="100vw"
                color="white"
                id="about"
                flexDirection={"column"} justifyContent={"center"} alignItems={"center"} 
               >
                   <Heading marginBottom={"4vh"} fontSize={"3vw"}>About Us</Heading>
                   <Text width="80%" fontSize={"1.5vw"}>
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
                   <Heading marginBottom={"8vh"} fontSize={"3vw"} color="white">
                        Previous Shows
                   </Heading>
                   <Flex
                    width="70%" margin="auto" marginBottom={"4vh"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                   >
                       <Tooltip label="Sand Art and Light Show | Shaastra 2016 - Performed by Vivek Patil: The renowned visual storyteller artist, headlined the first show. Putting together a trifecta of Light, Sand, and Speed Art, the show was a stunning visual experience." 
                        placement="right" padding="2vw" fontSize={"1vw"} backgroundColor={"#0047AB"} color="white" font-fontFamily={"Roboto"}>
                        <Image borderRadius={'24px'} src={Vivek} boxSize={"20vw"} objectFit={"cover"}></Image>
                       </Tooltip>
                       <Tooltip label="MIRAGE Laser Show | Shaastra 2019 - Performed by Vilas Nayak: A finalist of the 3rd season of India’s Got Talent, the self-taught speed painting artist mesmerized the crowd with his quick pace and stunning technique." 
                        placement="right" padding="2vw" fontSize={"1vw"} backgroundColor={"#0047AB"} color="white" font-fontFamily={"Roboto"}>
                        <Image borderRadius={'24px'} src={Mirage} boxSize={"20vw"} objectFit={"cover"}></Image>
                       </Tooltip>
                   </Flex>
                   <Flex
                    width="70%" margin="auto" marginBottom={"4vh"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                   >
                       <Tooltip label="LASER HARP Live Performance | Shaastra 2020 - Performed by Heimdall: Armed himself with a harp that is lit up in the colors of the visible spectrum, his oeuvre of thumping electronic music along with the vibrant light orchestration, the show was an enrapturing production." 
                        placement="right" padding="2vw" fontSize={"1vw"} backgroundColor={"#0047AB"} color="white" font-fontFamily={"Roboto"}>
                        <Image borderRadius={'24px'} src={Heimdall} boxSize={"20vw"} objectFit={"cover"}></Image>
                       </Tooltip>
                       <Tooltip label="Virtual Magic Show | Shaastra Juniors 2020 - Performed by Dan Rhodes: He blew the minds of our young audience with his savvy magic tricks. The then 16-year-old magician became an inspiration for the young crowd." 
                        placement="right" padding="2vw" fontSize={"1vw"} backgroundColor={"#0047AB"} color="white" font-fontFamily={"Roboto"}>
                        <Image borderRadius={'24px'} src={Dan} boxSize={"20vw"} objectFit={"cover"}></Image>
                       </Tooltip>
                   </Flex>
                   <Flex
                    width="70%" margin="auto"
                    justifyContent={"space-between"}
                    alignItems={"center"}
                   >
                       <Tooltip label="HARMONY | Shaastra 2021 - Main Show by Sonic Snares: With his vivacious act of lush HD visuals and intoxicating beats, the brilliant Austrian artist took the audience into a world of trance." 
                        placement="right" padding="2vw" fontSize={"1vw"} backgroundColor={"#0047AB"} color="white" font-fontFamily={"Roboto"}>
                        <Image borderRadius={'24px'} src={Harmony} boxSize={"20vw"} objectFit={"cover"}></Image>
                       </Tooltip>
                       {/* <Tooltip label="Virtual Magic Show | Shaastra Juniors 2020 - Performed by Dan Rhodes: He blew the minds of our young audience with his savvy magic tricks. The then 16-year-old magician became an inspiration for the young crowd." 
                        placement="right" padding="2vw" fontSize={"1vw"} backgroundColor={"#0047AB"} color="white" font-fontFamily={"Roboto"}>
                        <Image borderRadius={'24px'} src={Dan} boxSize={"25vw"} objectFit={"cover"}></Image>
                       </Tooltip> */}
                   </Flex>
               </Flex>
               <Flex width={"100vw"} height={"100vh"} marginTop={"0%"}
               id="reverb"
                flexDirection={"column"} justifyContent={"center"} alignItems={"center"}
                color="white" position="relative"
                backgroundImage={Reverb} backgroundPosition={"center"} backgroundRepeat={"no-repeat"} backgroundSize={"cover"}
               >
                   <Box position={"absolute"} top="0" left="0" content="" height="100vh" width="100vw" backgroundColor={"rgba(0, 0, 0, 0.6)"}></Box>
                   <Heading marginBottom={"4vh"} fontSize={"3vw"} zIndex={"2"}>Reverb</Heading>
                   <Text width="80%" fontSize={"1.5vw"} fontFamily={"Montserrat"} zIndex={"2"}>
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
                    width="70%" margin="auto" marginBottom={"4vh"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                   >
                       <Tooltip label="ALGORAVE | Presented by Reverb - Alex McLean, Lizzie Wilson, and Abhinay Khoparzi: This legendary collaboration among the 3 pioneering artists took coding from the obscurities of a screen to the dance floor." 
                        placement="right" padding="2vw" fontSize={"1vw"} backgroundColor={"#0047AB"} color="white" font-fontFamily={"Roboto"}>
                        <Image borderRadius={'24px'} src={Four} boxSize={"20vw"} objectFit={"cover"}></Image>
                       </Tooltip>
                       <Tooltip label="ALGORAVE | Presented by Reverb - Alex McLean, Lizzie Wilson, and Abhinay Khoparzi: This legendary collaboration among the 3 pioneering artists took coding from the obscurities of a screen to the dance floor." 
                        placement="right" padding="2vw" fontSize={"1vw"} backgroundColor={"#0047AB"} color="white" font-fontFamily={"Roboto"}>
                        <Image borderRadius={'24px'} src={Alex} boxSize={"20vw"} objectFit={"cover"}></Image>
                       </Tooltip>
                   </Flex>
                   <Flex
                    width="70%" margin="auto" marginBottom={"4vh"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                   >
                       <Tooltip label="REVERB ft. Dyskinetic | Shaastra Juniors 2021: The show introduced MiMu gloves to the young technophiles out there with spooky soundtracks." 
                        placement="right" padding="2vw" fontSize={"1vw"} backgroundColor={"#0047AB"} color="white" font-fontFamily={"Roboto"}>
                        <Image borderRadius={'24px'} src={Dyskenetic} boxSize={"20vw"} objectFit={"cover"}></Image>
                       </Tooltip>
                       <Tooltip label="ALGORAVE | Presented by Reverb - Alex McLean, Lizzie Wilson, and Abhinay Khoparzi: This legendary collaboration among the 3 pioneering artists took coding from the obscurities of a screen to the dance floor." 
                        placement="right" padding="2vw" fontSize={"1vw"} backgroundColor={"#0047AB"} color="white" font-fontFamily={"Roboto"}>
                        <Image borderRadius={'24px'} src={Lizzie} boxSize={"20vw"} objectFit={"cover"}></Image>
                       </Tooltip>
                   </Flex>
               </Flex>
               <Flex with="100vw"  justifyContent={"center"} padding="2vw" margin="0"
                id="contact"
               >
                    <Box fontSize={"2vw"} fontFamily={"Roboto"}>Contact Shaastra Nights: shows@shaastra.org</Box>
               </Flex>
           </Stack>
           <Footer designed={[{ name: 'Krithikaa', mail: 'be20b020@smail.iitm.ac.in' }]} ></Footer>   
       </CustomBox>
    )
}

export default Shows