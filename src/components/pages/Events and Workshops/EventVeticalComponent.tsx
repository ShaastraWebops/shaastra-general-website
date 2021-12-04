import * as React from "react"
import {
    Text,
    Stack,
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
  } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { useState } from "react";
import CustomBox from '../../shared/CustomBox'
import Footer from '../../shared/Footer';

import bg from "../../../images/EventsWorkshops/events/bg.jpeg"

const EventVerticalComponent = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const search = useColorModeValue("border", "noBorder")
    const font = useColorModeValue("black", "white")
    const gradient = useColorModeValue("blackG", "whiteG")
    const button = useColorModeValue("dark", "light")
    
    const [radio, setRadio] = useState("i")

    const filter = () => {

    }

    return(
        <Stack spacing={8}>
                    <Box className="event-main-box" height="fit-content">
                    <Flex width="100vw" justifyContent="space-evenly" marginBottom="2vh" height="fit-content" className="vertical-events-flex">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <Box position="relative" boxSize="15vw">
                                        <Image src={bg} boxSize="15vw" borderRadius="24px"></Image>
                                        <Box content="" position="absolute" top="0.5vw" left="0.5vw" borderRadius="24px"
                                        opacity="0.7" backgroundImage="linear-gradient(45deg, white, #ffffff00)" 
                                        boxSize="14vw" className="glass"></Box>
                                        <Flex boxSize="15vw" alignItems="center" justifyContent="center" position="absolute" top="0" className="event-name">
                                            <Text width="10vw" fontWeight="bold" color="black">Paper and Poster Presentation (Astrazeneca sponsor)</Text>
                                        </Flex>
                                    </Box>
                                </div>
                                <div className="flip-card-back">
                                    <Box width="15vw" padding="2vw" backgroundColor="#0e101b" height="15vw" borderRadius="24px">
                                        <Flex justifyContent="space-between">
                                            <Text>1ST</Text>
                                            <Text>100</Text>
                                        </Flex>
                                        <Flex justifyContent="space-between">
                                            <Text>2ND</Text>
                                            <Text>50</Text>
                                        </Flex>
                                        <Flex justifyContent="space-between">
                                            <Text>3RD</Text>
                                            <Text>25</Text>
                                        </Flex>
                                        <Flex justifyContent="space-between">
                                            <Text>PARTICIPATION</Text>
                                            <Text>10</Text>
                                        </Flex>
                                    </Box>
                                </div>
                            </div>
                        </div>
                        <Box borderRadius="24px" width="50vw" height="100%" marginLeft="15vw" className="event-desp">
                            <Flex flexDirection="column"  width="50vw" height="100%" alignItems="center" justifyContent="center">
                                    <Text width="48vw" className={font} borderRadius="24px"  padding="2vh" color="white" fontWeight="500" backdropFilter="blur(25px)">
                                        The entire globe is now turning to the biotech sector to discover answers that will 
                                        assist humanity in overcoming the current Covid problem while also preparing us for 
                                        future outbreaks. The participants will go through many levels of questions such as, 
                                        Why did the second wave of Covid in India startle the whole world? Discuss the lessons 
                                        that India may learn in order to develop an effective research ecosystem capable of detecting, 
                                        understanding, and responding to future waves.
                                        <Button marginTop="4vh" width="100%" height="2vw" backgroundColor="white" color="black" className={button}
                                            onClick={onOpen}
                                        >REGISTER</Button>
                                        <Modal isOpen={isOpen} onClose={onClose}>
                                            <ModalOverlay />
                                            <ModalContent>
                                            <ModalHeader>Register for Paper Poster Competition</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody>
                                                <FormControl>
                                                    <FormLabel>Shaastra ID</FormLabel>
                                                    <Input type="text"></Input>
                                                </FormControl>
                                                <FormControl marginTop="4vh">
                                                    <RadioGroup onChange={setRadio} value={radio}>
                                                        <Radio value="i" marginRight="2vw">Individual</Radio>
                                                        <Radio value="t">Team</Radio>
                                                    </RadioGroup>
                                                </FormControl>
                                                {
                                                    radio==="t" &&
                                                    <FormControl marginTop="4vh">
                                                        <FormLabel>Team Name</FormLabel>
                                                        <Input type="text"></Input>
                                                        <FormLabel>Team Members</FormLabel>
                                                        <Flex width="100%" justifyContent="space-between">
                                                            <Input placeholder="Shaastra ID"></Input>
                                                        </Flex>
                                                    </FormControl>
                                                }
                                            </ModalBody>

                                            <ModalFooter>
                                                <Button colorScheme='blue' mr={3} onClick={onClose}>
                                                Submit
                                                </Button>
                                            </ModalFooter>
                                            </ModalContent>
                                        </Modal>
                                    </Text>
                                    
                            </Flex>
                        </Box>
                    </Flex>
                    </Box>
                </Stack>
    )
}

export default EventVerticalComponent