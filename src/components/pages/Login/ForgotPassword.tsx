import React from "react"
import {
    Text,
    Stack,
    Flex,
    Link,
    Box,
    Heading,
    Input,
    Button,
    FormLabel,
    FormControl,
    Image,
    useColorModeValue,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'
import "../../../styles/Login.css"
import { useState } from "react"
import bg from "../../../images/Login/login.svg"
import CustomBox from '../../shared/CustomBox'
import Footer from '../../shared/Footer'
import { useGetPasswordOtpMutation, useResendVerificationMailMutation } from "../../../generated/graphql"
import { useHistory } from "react-router"


const Forgot = () => {

    const gradient = useColorModeValue("blackG", "whiteG")
    const [email, setEmail] = useState("")
    const history = useHistory()

    const [getPasswordOtpMutation, {data, loading, error}] = useGetPasswordOtpMutation()
    var { isOpen, onOpen, onClose } = useDisclosure()
    if(data)
    {
        onClose = () => {history.push('/')}
        return(
            <Modal isOpen={true} onClose={onClose}>
                <ModalOverlay />
                <ModalContent backgroundColor="#addfd0" color="black">
                    <ModalHeader>Check your registered Email ID for the link to reset your password</ModalHeader>
                    <ModalCloseButton />
                 </ModalContent>
            </Modal>
        )
    }
    else
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
        else 
            if(error)
            {
                if(error.message === "Email Not found")
                {
                    
                onClose = () => {history.push('/signup')}
                return(
                    <Modal isOpen={true} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent backgroundColor="#f1aaaa" color="black">
                            <ModalHeader>Email ID not registered. Kindly sign up.</ModalHeader>
                            <ModalCloseButton />
                        </ModalContent>
                    </Modal>
                )
                }
                else 
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
            }

    return(
        <CustomBox>
            <Flex className="login" width="100vw" height="100vh" justifyContent="center" alignItems="center" position="relative" zIndex="1">
            <Box width="60vw"  className={`${gradient} login-main-box`} height="fit-content" padding="5vw">
                    <Heading fontSize="4vw" marginBottom="6vh">Forgot <span>Password</span></Heading>
                    <Input placeholder="Enter Email ID" marginBottom="4vh" type="email" onChange={(e:any) => {setEmail(e.target.value)}}></Input>
                    <Button width="100%"  backgroundColor="#2467a1" marginBottom="4vh" marginTop="6vh"
                        onClick={async (e:any) => {
                            e.preventDefault();
                            try{
                                await getPasswordOtpMutation({variables: {email: email}})
                            }
                            catch(err) {console.log(err)}
                        }}
                    >Submit</Button>
                </Box>
                <Image src={bg} boxSize="25vw" bottom="30%" right="0%" className="login-image"></Image>
            </Flex>
            <Footer designed={[{ name: 'Krithikaa', mail: 'be20b020@smail.iitm.ac.in' }]} ></Footer>
        </CustomBox>  
    )
}

export default Forgot