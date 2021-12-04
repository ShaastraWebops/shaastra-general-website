    import React, { useEffect } from "react"
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
import { LoginInput, useLoginMutation, useVerifyUserMutation } from "../../../generated/graphql"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router"
import { verify } from "crypto"

const Verify = () => {
    const {token} = useParams<{token: string}>();
    const history = useHistory()

    const [verifyUserMutation, {data, loading, error}] = useVerifyUserMutation()

    const verify = async () => {
        try{
            await verifyUserMutation({variables: {otp: token}})
        }
        catch(err) {console.log(err)}
    }
    // useEffect(() => {
    //     verify()
    // }, [])
    verify()
    var { isOpen, onOpen, onClose } = useDisclosure()
    if(data?.verifyUser)
    {
        onClose = () => {history.push('/login')}
        return(
            <Modal isOpen={true} onClose={onClose}>
                <ModalOverlay />
                <ModalContent backgroundColor="#addfd0" color="black">
                    <ModalHeader>Email Verified!</ModalHeader>
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
        else return null
}

export default Verify