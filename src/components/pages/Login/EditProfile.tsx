import React from "react"
import {
    Text,
    Stack,
    Link,
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
    Select,
    FormErrorMessage,
    FormHelperText,
    Heading,
  } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { useState } from "react";
import CustomBox from '../../shared/CustomBox'
import Footer from '../../shared/Footer';
import "../../../styles/Login.css"

import {cities} from "./cities"

import bg from "../../../images/homepage_illustrations/small ribi.png"

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Scrollbar
  } from 'swiper';
  
import 'swiper/swiper-bundle.min.css'  
import 'swiper/swiper.min.css'
import { useEditProfileMutation, useMeQuery } from "../../../generated/graphql";
import {useHistory} from "react-router-dom"
import { FaSchool } from "react-icons/fa";
import success from "../../../images/Login/login-success.svg"
import errorSVG from "../../../images/Login/login-error.svg"

SwiperCore.use([Scrollbar]);

const EditProfile = () => {

    const {data: user, loading: userLoading, error: userError} = useMeQuery()
    console.log(user)

    const history = useHistory()

    const [email, setEmail] = useState(user?.me?.email)
    const [name, setName]  = useState(user?.me?.name)
    const [number, setNumber] = useState(user?.me?.mobile)
    const [college, setCollege] = useState(user?.me?.college)
    const [branch, setBranch] = useState(user?.me?.department)
    const [State, setState] = useState(user?.me?.state)
    const [city, setCity] = useState(user?.me?.city)
    const [address, setAddress] = useState(user?.me?.address)

    const [editProfileMutation, {data, loading, error}] = useEditProfileMutation()
    var { isOpen, onOpen, onClose } = useDisclosure()

    if(data)
    {
        onClose = () => {
            window.location.reload()
        }

        return(
            <Modal isOpen={true} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent color="black" paddingTop={["10vw","5vw"]} width={["fit-content", "auto"]}>
                    <Image src={success} margin="auto" boxSize={["50vw","20vw"]}></Image>
                    <ModalCloseButton />
                    <ModalBody backgroundColor="#A7EAAA" width="100%" padding="2vw">
                        <Text textAlign="center" fontSize={["4vw","2vw"]} backgroundColor="#A7EAAA" borderRadius="24px" margin="auto" color="#0a2d4d">Details edited successfully!</Text>
                    </ModalBody>
                 </ModalContent>
            </Modal>
        )
    }
    if(loading)
        {
            onClose = () => {}
            return(
                <Modal isOpen={true} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent backgroundColor="#e2e19c" color="black">
                        <ModalHeader>Loading...</ModalHeader>
                        <ModalCloseButton />
                    </ModalContent>
                </Modal>
            )
        }
        else if(error)
        {
            onClose = () => {window.location.reload()}
                return(
                    <Modal isOpen={true} onClose={onClose} isCentered>
                    <ModalOverlay />
                    <ModalContent color="black" paddingTop={["10vw","5vw"]} width={["fit-content", "auto"]}>
                        <Image src={errorSVG} margin="auto" boxSize={["50vw","20vw"]}></Image>
                        <ModalBody backgroundColor="#f1aaaa" width="100%" padding="2vw">
                            <Text textAlign="center" fontSize={["4vw","2vw"]}  borderRadius="24px" margin="auto" color="#0a2d4d">Some error occurred</Text>
                        </ModalBody>
                        <ModalCloseButton />
                    </ModalContent>
                </Modal>
                )   
        }
    

    return(
        <CustomBox>
            <Stack
                    textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 8, md: 8 }}
                    py={{ base: 20, md: 20 }}
                    padding="4vw"
            >
                <Heading fontSize="3.5vw" className="profile-heading">Hi! {user?.me?.name}</Heading>
                <Flex width="100%" className="profile-main-flex" minHeight="80vh" justifyContent="space-evenly">
                    <Flex height={["fit-content","80vh"]} padding={["1vw", "0vw"]}  flexDirection="column" margin="auto"  width={["100%", "20vw"]} fontSize="1.5vw" justifyContent="space-between">
                        <Link href="/profile" marginBottom="4vh">Profile Details</Link>
                        <Link href="/editprofile" color="#C2C4FF">Edit Profile</Link>
                        <Button fontSize={["5vw","1.5vw"]} onClick={(e) => {e.preventDefault(); history.push('/signout')}} width={["fit-content","100%"]} margin="auto" backgroundColor="#DB7171">Logout</Button>
                        <Image src={bg} boxSize="22vw" alignSelf="center"></Image>
                    </Flex>
                    <Flex flexDirection="column">
                        <Box width={["100%", "60vw"]} margin="auto" fontSize={["5vw","1.5vw"]} padding={["1vw", "4vw"]} borderRadius="24px" marginBottom="4vh">
                           <FormControl marginBottom="4vh">
                               <FormLabel>Name</FormLabel>
                               <Input color="black" value={name} placeholder={user?.me?.name} onChange={(e:any) => {setName(e.target.value)}} type="text"></Input>
                           </FormControl>
                           <FormControl marginBottom="4vh">
                               <FormLabel>Email</FormLabel>
                               <Input value={email} placeholder={user?.me?.email} onChange={(e:any) => {setEmail(e.target.value)}} type="email"></Input>
                           </FormControl>
                           <Flex marginBottom="6vh">
                        <Select placeholder={user?.me?.college} marginRight="2vw" value={college} onChange={(e:any) => {setCollege(e.target.value)}}>
                            <option value="IITM">IITM</option>
                        </Select>
                        <Select placeholder={user?.me?.department} value={branch} onChange={(e:any) => {setBranch(e.target.value)}}>
                            <option value="BE">BE</option>
                        </Select>
                    </Flex>
                    <FormControl marginBottom="4vh">
                        <FormLabel>Address</FormLabel>
                        <Input type="text" value={address} placeholder={user?.me?.address} onChange={(e:any) => {setAddress(e.target.value)}}></Input>
                    </FormControl>
                    <Flex marginBottom="6vh">
                        <Select placeholder={user?.me?.state} value={State} onChange={(e:any) => {setState(e.target.value)}}>
                            {
                                Object.keys(cities).map(s => {
                                    return(<option value={s}>{s}</option>)
                                })
                            }
                        </Select>
                        <Select placeholder={user?.me?.city} marginLeft="2vw" value={city} onChange={(e:any) => {setCity(e.target.value)}}>
                            {
                                cities["Kerala"].map(c => {
                                    return(<option value={c}>{c}</option>)
                                })
                            }
                        </Select>
                    </Flex>
                    <Flex width="100%" justifyContent="space-between" className="profile-button-flex">
                        <Button backgroundColor="#DB7171" onClick={(e:any) => {e.preventDefault(); history.push('/forgotpassword')}}>Change password</Button>
                        <Button backgroundColor="#9FDB71"
                            onClick={async (e:any) => {
                                e.preventDefault();
                                try
                                {
                                    await editProfileMutation({variables: {data: {city: city, name: name, school: college, state: State}}})
                                }
                                catch(err) {console.log(err)}
                            }}
                        >Submit changes</Button>
                    </Flex>
                        </Box>
                    </Flex>
                </Flex>
            </Stack>    
            <Footer designed={[{ name: 'Krithikaa', mail: 'be20b020@smail.iitm.ac.in' }]} ></Footer>      
        </CustomBox>
    )
}

export default EditProfile;