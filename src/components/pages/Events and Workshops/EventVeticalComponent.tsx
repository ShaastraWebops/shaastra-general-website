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
    Heading,
  } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { useState } from "react";
import CustomBox from '../../shared/CustomBox'
import Footer from '../../shared/Footer';
import bg from "../../../images/EventsWorkshops/events/bg.jpeg"
import { useCreateTeamandRegisterMutation, useRegisterMutation } from "../../../generated/graphql";
import { useHistory } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const EventVerticalComponent = ({data, isAdmin} : any) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const search = useColorModeValue("border", "noBorder")
    const font = useColorModeValue("black", "white")
    const gradient = useColorModeValue("blackG", "whiteG")
    const button = useColorModeValue("dark", "light")
    
    const [radio, setRadio] = useState("i")
    const [register] = useRegisterMutation();
    const IndividualReg = async (eventId : string) =>{

        await register({
            variables : {
                EventID : eventId
            }
        })
        .then(()=> alert("Registered Suceesfully"))
        .catch(err => alert(err.message))

    }

    const [members, setMembers] = React.useState<string[]>([]);
    const [teamname, setTeamname] = React.useState<string>();

    const handleMembersInput = ({ index, event }: { index: number, event: React.ChangeEvent<HTMLInputElement> }) => {
        const values = [...members];

        values[index] = event.target.value
        setMembers(values)
    }
    const [teamreg] = useCreateTeamandRegisterMutation();

    const Teamregistration = async (eventID : string)=>{
        await teamreg({
            variables : {
               createTeamAndRegisterData : {
                   eventID,
                   name : teamname!,
                   members
               } 
            }
        }).then(()=> alert("Team succesfully registered"))
        .catch(err => alert(err.message))
    }

    if(radio === "t" && members.length === 0){
        setMembers([''])
    }

    const buttoncolor = useColorModeValue("#ea8a94","white");

    const history = useHistory();

    return(
       <Box  minHeight={"15vw"} m={2} p={2}>
            <Stack spacing={8}>
                    <Box className="event-main-box" minHeight={"15vh"}>
                    <Flex width="100vw" justifyContent="space-evenly" marginBottom="2vh" height="fit-content" className="vertical-events-flex">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <Box position="relative" boxSize="15vw">
                                        <Image src={data.pic ? data.pic : bg} boxSize="15vw" borderRadius="24px"></Image>
                                        <Box content="" position="absolute" top="0.5vw" left="0.5vw" borderRadius="24px"
                                        opacity="0.7" backgroundImage="linear-gradient(45deg, white, #ffffff00)" 
                                        boxSize="14vw" className="glass"></Box>
                                        <Flex boxSize="15vw" alignItems="center" justifyContent="center" position="absolute" top="0" className="event-name">
                                            <Text width="10vw" fontWeight="bold" color="black">{data?.name}</Text>
                                        </Flex>
                                    </Box>
                                </div>
                                <div className="flip-card-back">
                                    <Box width="15vw" padding="2vw" backgroundColor={buttoncolor} color="black" height="15vw" borderRadius="24px">
                                        <Heading as="h4" size={"sm"}>Points Distribution</Heading>
                                        <Flex justifyContent="space-between">
                                            <Text>1ST</Text>
                                            <Text>{data.firstplace}</Text>
                                        </Flex>
                                        <Flex justifyContent="space-between">
                                            <Text>2ND</Text>
                                            <Text>{data.secondplace}</Text>
                                        </Flex>
                                        <Flex justifyContent="space-between">
                                            <Text>3RD</Text>
                                            <Text>{data.thirdplace}</Text>
                                        </Flex>
                                        <Flex justifyContent="space-between">
                                            <Text>PARTICIPATION</Text>
                                            <Text>{data.participation}</Text>
                                        </Flex>
                                    </Box>
                                </div>
                            </div>
                        </div>
                        <Box borderRadius="24px" width="50vw" height="100%" marginLeft="15vw" className="event-desp">
                            <Flex flexDirection="column"  width="50vw" height="100%" alignItems="center" justifyContent="center">
                                    <Text width="48vw" className={font} borderRadius="24px"  padding="2vh" color="white" fontWeight="500" backdropFilter="blur(25px)">
                                    <ReactMarkdown
                                        children={data?.description!}
                                        remarkPlugins={[remarkGfm]}
                                    ></ReactMarkdown>
                                       <Flex flexDirection={['column','column','row','row']}>
                                       {
                                           !isAdmin ? ( data.registrationType === "NONE" ? <Box width="100%" marginTop="4vh"  height="2vw" >
                                           <Text float={'right'}>Registration is not required for this event</Text> 
                                           </Box>
                                           :
                                           (<Box width="100%" marginTop="4vh"  height="2vw" >
                                           <Button float={'right'} backgroundColor={buttoncolor} color='black'
                                            onClick={
                                                data.registrationType === "INDIVIDUAL" ? ()=>{IndividualReg(data.id)} : onOpen
                                            }
                                           >REGISTER NOW</Button>
                                           </Box>)) : null
                                        }
                                        <Box width="100%" marginTop="4vh"  height="2vw" >
                                            <Button float={'right'} backgroundColor={buttoncolor} color='black'
                                                    onClick={() => {
                                                        history.push(`/eventpage/${data.id}`)
                                                    }} >
                                                        View Details
                                                    </Button>
                                         </Box>
                                       </Flex>
                                        <Modal isOpen={isOpen} onClose={onClose}>
                                            <ModalOverlay />
                                            <ModalContent>
                                            <ModalHeader>Team Registration for {data.name}</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody>
                                                <FormControl>
                                                    <FormLabel>Your Shaastra ID</FormLabel>
                                                    <Input type="text"></Input>
                                                </FormControl>
                                                <FormControl marginTop="4vh">
                                                    <RadioGroup onChange={setRadio} value={radio}>
                                                        <Radio value="i" marginRight="2vw">Register as Individual</Radio>
                                                        <Radio value="t">Register as Team</Radio>
                                                    </RadioGroup>
                                                </FormControl>
                                                    <FormControl marginTop="1.5vh">
                                                        <FormLabel>Team Name</FormLabel>
                                                        <Input type="text" value={teamname} onChange={e => setTeamname(e.target.value)}></Input>
                                                        {
                                                            radio === "t" ? (
                                                        <React.Fragment>
                                                        <FormLabel marginTop="1.5vh">Team Members Shaastra IDs</FormLabel>
                                                        {
                                                            members.map((member, index) => {
                                                                return (
                                                                    <React.Fragment key={index}>
                                                                        <Flex width={'100%'}  >
                                                                            <FormControl>

                                                                                <Flex width="100%" justifyContent="space-between">
                                                                                <Input  id={"member" + index} placeholder={`Team Member ${index+1} Shaastra ID`} required
                                                                                 onChange={(event) => handleMembersInput({ index, event })} 
                                                                                ></Input>
                                                                                </Flex>
                                                                            </FormControl>

                                                                    <Flex p={[0, 3]} flexDirection={['column', 'row']}>
                                                                        {
                                                                            index === 0 ? null : (
                                                                                <Button mx={2} my={1} size={'xs'}
                                                                                    onClick={() => {
                                                                                        const values = [...members];
                                                                                        values.splice(index, 1)
                                                                                        setMembers(values)
                                                                                    }}
                                                                                ><MinusIcon /></Button>)}
                                                                        {
                                                                            index >= data.teamSize - 2 ? null : (
                                                                                <Button mx={2} my={1} size={'xs'}
                                                                                    onClick={() => {
                                                                                        if (members.length < data.teamSize - 1) {
                                                                                            setMembers([...members, ''])
                                                                                        }
                                                                                    }
                                                                                    }
                                                                                ><AddIcon /></Button>
                                                                            )
                                                                        }
                                                                     
                                                                    </Flex>
                                                                </Flex>
                                                                        </React.Fragment>)
                                                                })
                                                                }
                                                                <FormLabel>Max team size :{data.teamSize}</FormLabel>
                                                                </React.Fragment>
                                                            ) : null
                                                        }
                                                       
                                                    </FormControl>
                                                
                                            </ModalBody>

                                            <ModalFooter>
                                                <Button colorScheme='blue' mr={3} onClick={()=>Teamregistration(data.id)}>
                                                 Register
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
       </Box>
    )
}

export default EventVerticalComponent