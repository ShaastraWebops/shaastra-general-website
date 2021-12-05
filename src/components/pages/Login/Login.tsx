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
import bg from "../../../images/Login/login.svg"
import CustomBox from '../../shared/CustomBox'
import Footer from '../../shared/Footer'
import { LoginInput, useLoginMutation, UserRole } from "../../../generated/graphql"
import { useState } from "react"
import { useHistory } from "react-router-dom"

const Login = () => {

    const gradient = useColorModeValue("blackG", "whiteG")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()


    const [loginMutation, {data, loading, error}] = useLoginMutation()

    var { isOpen, onOpen, onClose } = useDisclosure()

    if(data)
    {
        if(data.login?.isVerified === false) history.push("/verify")
        else
        if(data.login?.role === UserRole.User) localStorage.setItem("role", "User")
        else 
         if(data.login?.role === UserRole.Admin)
         { 
             localStorage.setItem("role", "Admin") 
             history.push("/admin")

        }
        onClose = () => {history.push('/')}
        return(
            <Modal isOpen={true} onClose={onClose}>
                <ModalOverlay />
                <ModalContent backgroundColor="#addfd0" color="black">
                    <ModalHeader>Logged in successfully</ModalHeader>
                    <ModalCloseButton />
                 </ModalContent>
            </Modal>
        )
    }
    if(error)
    {
         if(error.message === "Account Not Found")
         {
                onClose = () => {history.push('/signup')}
                return(
                    <Modal isOpen={true} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent backgroundColor="#f1aaaa" color="black">
                            <ModalHeader>Email ID not registered. <br /> Sign Up to continue.</ModalHeader>
                            <ModalCloseButton />
                        </ModalContent>
                    </Modal>
                )
         }
         else
          if(error.message === "Invalid Credential")
          {
            onClose = () => {window.location.reload()}
                return(
                    <Modal isOpen={true} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent backgroundColor="#f1aaaa" color="black">
                            <ModalHeader>Invalid credentials</ModalHeader>
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
                        <ModalHeader>Some error occurred</ModalHeader>
                        <ModalCloseButton />
                    </ModalContent>
                </Modal>
            )
          }
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
    return(
        <CustomBox>
            <Flex className="login" width="100vw" height="100vh" justifyContent="center" alignItems="center" position="relative" zIndex="1">
            <Box width="60vw"  className={`${gradient} login-main-box`} height="fit-content" padding="5vw" borderRadius="24px">
                    <Heading fontSize="4vw" marginBottom="6vh">LOG<span>IN</span></Heading>
                    <Input placeholder="Email ID" marginBottom="4vh" type="email" onChange={(e:any) => {setEmail(e.target.value)}}></Input>
                    <Input placeholder="Password" type="password" onChange={(e:any) => {setPassword(e.target.value)}}></Input>
                    <Button width="100%"  backgroundColor="#2467a1" marginBottom="4vh" marginTop="6vh"
                        onClick={async (e) => {
                            e.preventDefault();
                            try
                            {
                                await loginMutation({variables: {LoginInput: {email: email, password: password}}})
                            }
                            catch(err) {console.log(err)}
                        }}
                    >Login</Button>
                    <Flex width="100%" justifyContent="space-between" >
                        <Link href="/forgotpassword">Forgot password?</Link>
                        <Link href="/signup">Sign Up</Link>
                    </Flex>
                </Box>
                <Image src={bg} boxSize="25vw" bottom="30%" right="0%" className="login-image"></Image>
            </Flex>
            <Footer designed={[{ name: 'Krithikaa', mail: 'be20b020@smail.iitm.ac.in' }]} ></Footer>
        </CustomBox>  
    )
}

export default Login