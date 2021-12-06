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

SwiperCore.use([Scrollbar]);

const EditProfile = () => {

    const {data: user, loading: userLoading, error: userError} = useMeQuery()

    const history = useHistory()

    const [email, setEmail] = useState(user?.me?.email)
    const [name, setName]  = useState(user?.me?.name)
    const [number, setNumber] = useState(user?.me?.mobile)
    const [college, setCollege] = useState(user?.me?.college)
    const [branch, setBranch] = useState(user?.me?.department)
    const [State, setState] = useState(user?.me?.state)
    const [city, setCity] = useState(user?.me?.city)
    const [address, setAddress] = useState(user?.me?.address)
    const [mobile, setMobile] = useState(user?.me?.mobile)

    const [editProfileMutation, {data, loading, error}] = useEditProfileMutation()
    var { isOpen, onOpen, onClose } = useDisclosure()

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
                        <Modal isOpen={true} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent backgroundColor="#f1aaaa" color="black">
                                <ModalHeader>Error Occurred</ModalHeader>
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
                <Flex width="100%" className="profile-main-flex">
                    <Flex flexDirection="column" width="30vw" fontSize="1.5vw" justifyContent="space-between">
                        <Link href="/profile" marginBottom="4vh">Profile Details</Link>
                        <Link href="/editprofile" color="#C2C4FF">Edit Profile</Link>
                        <Button width="fit-content" margin="auto" backgroundColor="#DB7171">Logout</Button>
                        <Image src={bg} boxSize="22vw" alignSelf="center"></Image>
                    </Flex>
                    <Flex flexDirection="column">
                        <Box width="60vw" backgroundColor="#8294A4" fontSize="1.5vw" padding="4vw" borderRadius="24px" marginBottom="4vh">
                           <FormControl marginBottom="4vh">
                               <FormLabel>Name</FormLabel>
                               <Input value={name} onChange={(e:any) => {setName(e.target.value)}} type="text"></Input>
                           </FormControl>
                           <Flex marginBottom="6vh">
                           <FormControl marginBottom="4vh">
                               <FormLabel>Email</FormLabel>
                               <Input value={email} marginRight="2vw" onChange={(e:any) => {setEmail(e.target.value)}} type="email"></Input>
                           </FormControl>
                           <FormControl marginBottom="4vh">
                               <FormLabel marginLeft="2vw">Mobile Number</FormLabel>
                               <Input value={mobile} marginLeft="2vw"  onChange={(e:any) => {setMobile(e.target.value)}}></Input>
                           </FormControl>
                           </Flex>
                           <Flex marginBottom="6vh">
                        <Select placeholder="College" marginRight="2vw" value={college} onChange={(e:any) => {setCollege(e.target.value)}}>
                            <option value="IITM">IITM</option>
                        </Select>
                        <Select placeholder="Branch" value={branch} onChange={(e:any) => {setBranch(e.target.value)}}>
                            <option value="BE">BE</option>
                        </Select>
                    </Flex>
                    <FormControl marginBottom="4vh">
                        <FormLabel>Address</FormLabel>
                        <Input type="text" value={address} onChange={(e:any) => {setAddress(e.target.value)}}></Input>
                    </FormControl>
                    <Flex marginBottom="6vh">
                        <Select placeholder="State" value={State} onChange={(e:any) => {setState(e.target.value)}}>
                            {
                                Object.keys(cities).map(s => {
                                    return(<option value={s}>{s}</option>)
                                })
                            }
                        </Select>
                        <Select placeholder="City" marginLeft="2vw" value={city} onChange={(e:any) => {setCity(e.target.value)}}>
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
                                    await editProfileMutation({variables: {data:
                                         {
                                            name: name!, college: college!, state: State!,city: city!,email : email! , address : address!,
                                            department :branch!, mobile : mobile!

                                        }}})
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