import React, { useEffect } from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Flex,
    SimpleGrid,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    Alert,
    AlertIcon,
    Image,
    Link,
  } from '@chakra-ui/react'
import "../../../styles/Login.css"
import { useResendVerificationMailMutation, useVerifyUserMutation } from "../../../generated/graphql"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router"
import Footer from "../../shared/Footer"
import CustomBox from "../../shared/CustomBox"
import { gradient } from "tsparticles"

const Verify = () => {
    const [otp, setOtp] = React.useState('')
    const history = useHistory()
    const [verifyuser, {data, loading, error}] = useVerifyUserMutation()
    const [resendmail] = useResendVerificationMailMutation();
    const [email , setemail] = React.useState('');
    const [input , setInput] = React.useState(false);
    const [alert , setalert] = React.useState(false)
    const [success, setSuccess] = React.useState(false)


    const handlesubmit = () => {
        verifyuser({
          variables: {
            otp,
          },
        })
          .then((res) => {
            if (res.data?.verifyUser) {
             setSuccess(true)
            }
          })
          .catch((err) => console.log(err))
      }

      const resend = () =>{
        resendmail({variables:{
          requestForgotPassInput : {
            email
          }
        }}).then(res => {
          if(res.data?.resendVerificationMail){
            setalert(true)
          }
        })
        .catch(err => console.error(err)
        )
      }
  
    var { isOpen, onOpen, onClose } = useDisclosure()
    if(success)
    {
        onClose = () => {history.push('/login')}
        return(
            <Modal isOpen={true} onClose={onClose}>
                <ModalOverlay />
                <ModalContent backgroundColor="#addfd0" color="black">
                    <ModalHeader>Email Verified!Please login to register for workshops</ModalHeader>
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
            if(error.message === "Invalid OTP!")
            {
                onClose = () => {window.location.reload()}
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
        else return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      flexDirection='column'
    >
         <CustomBox>
            <Flex className="login" width="100vw" height="100vh" justifyContent="center" alignItems="center" position="relative" zIndex="1">
            <Box width="60vw"  className={`${gradient} login-main-box`} height="fit-content" padding="5vw" borderRadius="24px">
                    <Heading fontSize="4vw" marginBottom="6vh">  Verify yo<span>ur mail</span></Heading>
                    <Input
                        marginBottom="4vh"
                        placeholder='OTP'
                        type='text'
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <Button width="100%"  backgroundColor="#2467a1" marginBottom="4vh"
                        onClick={handlesubmit}
                    >Verify</Button>
                    <Flex width="100%" justifyContent="space-between" >
                    {
                        !input ? ( <Link onClick = {()=>setInput(true)}>Resend Verification mail</Link>) : null
                    }
                     {
                            input ? (
                            <Flex width={"100%"} flexDirection={"column"}>
                            <Flex width={"100%"} flexDirection={['column','column','row','row']}>
                            <FormControl id='name'>
                            <Input
                            width={"60%"}
                            placeholder='email'
                            type='email'
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            />
                           </FormControl> 
                        <Button onClick = {resend}
                           width ={"40%"} backgroundColor="#2467a1" marginBottom="4vh">
                         Resend Verification mail
                        </Button>
                        </Flex>
                        {
                        alert ? (
                            <Alert status='success'>
                            <AlertIcon />
                            Verification mail has been sent 
                            </Alert>
                        ) : null
                    }
                    </Flex>): null
                        }
                    </Flex>
                </Box>
            </Flex>
            <Footer designed={[{ name: 'Krithikaa', mail: 'be20b020@smail.iitm.ac.in' }]} ></Footer>
        </CustomBox>     
    </Flex>
        )
}

export default Verify