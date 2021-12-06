import React, { useState } from "react"
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
import bg from "../../../images/Login/login.svg"
import CustomBox from '../../shared/CustomBox'
import Footer from '../../shared/Footer'
import { useResetPasswordMutation } from "../../../generated/graphql"
import { useHistory, useParams } from "react-router"


const ForgotAfter = () => {

    const gradient = useColorModeValue("blackG", "whiteG")
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [pw, setPw] = useState("")
    const [otp, setOtp] = useState("")

    const [resetPasswordMutation, {data, loading, error}] = useResetPasswordMutation()

    var { isOpen, onOpen, onClose } = useDisclosure()

    if(data)
    {
        onClose = () => {history.push('/login')}
        return(
            <Modal isOpen={true} onClose={onClose}>
                <ModalOverlay />
                <ModalContent backgroundColor="#addfd0" color="black">
                    <ModalHeader>Password reset</ModalHeader>
                    <ModalCloseButton />
                 </ModalContent>
            </Modal>
        )
    }
    else 
    {
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
            if(error.message === "Invalid Otp")
            {
                
                onClose = () => {history.push('/')}
                return(
                    <Modal isOpen={true} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent backgroundColor="#f1aaaa" color="black">
                            <ModalHeader>Invalid OTP</ModalHeader>
                            <ModalCloseButton />
                        </ModalContent>
                    </Modal>
                )
            }
            else 
            {
                onClose = () => {history.push('/')}
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
    }

    return(
        <CustomBox>
            <Flex className="login" width="100vw" height="100vh" justifyContent="center" alignItems="center" position="relative" zIndex="1">
            <Box width="60vw"  className={`${gradient} login-main-box`} height="fit-content" padding="5vw">
                    <Heading fontSize="4vw" marginBottom="6vh">Reset <span>Password</span></Heading>
                    <Input placeholder="Enter registered Email ID" type="text" marginBottom="4vh" onChange={(e:any) => {setEmail(e.target.value)}}></Input>
                    <Input placeholder="Reset Password OTP" type="text" marginBottom="4vh" value={otp} onChange={(e:any) => {setOtp(e.target.value)}}></Input>
                    <Input placeholder="Enter new password" marginBottom="4vh" type="password" onChange={(e: any) => {setPw(e.target.value)}}></Input>
                    <Button width="100%"  backgroundColor="#2467a1" marginBottom="4vh" marginTop="6vh"
                        onClick={async (e:any) => {
                            e.preventDefault();
                            try{
                                await resetPasswordMutation({variables: {resetPasswordInput:{email: email, otp:otp, newPassword: pw}}})
                            }
                            catch(err) {console.log(err)}
                        } }
                    >Reset Password</Button>
                </Box>
                <Image src={bg} boxSize="25vw" bottom="30%" right="0%" className="login-image"></Image>
            </Flex>
            <Footer designed={[{ name: 'Krithikaa', mail: 'be20b020@smail.iitm.ac.in' }]} ></Footer>
        </CustomBox>  
    )
}

export default ForgotAfter