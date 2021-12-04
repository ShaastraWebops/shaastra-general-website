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
import { LoginInput, useLoginMutation, useLogoutUserMutation, useVerifyUserMutation } from "../../../generated/graphql"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router"
import { verify } from "crypto"

const SignOut = () => {
    const {token} = useParams<{token: string}>();
    const history = useHistory()

    const [logoutMutation, {data, loading, error}] = useLogoutUserMutation()
    const logout = async () => {
        try{
            await logoutMutation()
        }
        catch(err) {console.log(err)}
    }
    logout();

    var { isOpen, onOpen, onClose } = useDisclosure()

    if(data?.logoutUser)
    {
        onClose = () => {history.push('/')}
        return(
            <Modal isOpen={true} onClose={onClose}>
                <ModalOverlay />
                <ModalContent backgroundColor="#addfd0" color="black">
                    <ModalHeader>Logged out successfully</ModalHeader>
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
        else return null
}

export default SignOut