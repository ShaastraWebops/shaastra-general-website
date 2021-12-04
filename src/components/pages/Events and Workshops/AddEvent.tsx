import * as React from "react"
import {
    Text,
    Stack,
    Flex,
    Link,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Image,
    Button,
    Select,
    RadioGroup,
    Radio,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'
import { useHistory } from "react-router-dom"
import { useState } from "react"
import CustomBox from '../../shared/CustomBox'
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "../../../styles/Events.css"

import bg from "../../../images/EventsWorkshops/events/bg.jpeg"
import { RegistraionType, useAddEventMutation } from "../../../generated/graphql"

import AWS from 'aws-sdk'
const uploadFile = require('react-s3')
const S3FileUpload = require('react-s3')

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      directory?: string
      webkitdirectory?: string
      moxdirectory?: string
    }
  }
  

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
  });

const EventAdmin = () => {

    const [value, setValue] = React.useState("Hello!")
    const [selectedTab, setSelectedTab] = React.useState<"write" | "preview">("write");

    const [radio, setRadio] = useState<RegistraionType>(RegistraionType.None)
    const [name, setName] = React.useState("")
    const [vertical, setVertical] = React.useState("")
    const [desp, setDesp] = React.useState("")
    const [platform, setPlatform] = React.useState("")
    const [req, setReq] = useState("")
    const [regStart, setRegStart] = useState("")
    const [regEn, setRegEnd] = useState("")
    const [eventStart, setEventStart] = useState("")
    const [eventEnd, setEventEnd] = useState("")
    const [teamSize, setTeamSize] = useState()
    const [participation, setParticipation] = useState("")
    const [first, setFirst] = useState("")
    const [second, setSecond] = useState("")
    const [third, setThird] = useState("")

    const [addEventMutation, {data, loading, error}] = useAddEventMutation()
    const history = useHistory()

    var [file, setFile] = useState<File[]>([])
    var [newFile, setNewFile] = useState<string[]>([])

    // AWS.config.update({
    //     accessKeyId: 'AKIA4VXHNASLCGXPQAHM',
    //     secretAccessKey: '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',
    //   })
    //   const myBucket = new AWS.S3({
    //     params: { Bucket: 'ca21' },
    //     region: 'ap-south-1',
    //   })
    //   const UploadImageToS3WithNativeSdk = async (file: any) => {
    //     const params = {
    //       ACL: 'public-read',
    //       Body: file,
    //       Bucket: 'ca21',
    //       Key: file.name,
    //     }
    
    //     await myBucket
    //       .putObject(params)
    //       .on('httpUploadProgress', (evt) => {})
    //       .send((err) => {
    //         if (err) console.log(err)
    //       })
    //   }

    var { isOpen, onOpen, onClose } = useDisclosure()

    if(data)
    {
        onClose = () => {history.push('/admin/add')}
        return(
            <Modal isOpen={true} onClose={onClose}>
                <ModalOverlay />
                <ModalContent backgroundColor="#addfd0" color="black">
                    <ModalHeader>Event Added</ModalHeader>
                    <ModalCloseButton />
                 </ModalContent>
            </Modal>
        )
    }
    if(error)
    {
        onClose = () => {history.push('/admin/add')}
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
    if(loading)
    {
        onClose = () => {history.push('/admin/add')}
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
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 8 }}
                py={{ base: 20, md: 20 }}
            >
            <Heading>ADD EVENT</Heading>
            <Box backgroundImage={bg} width="100vw" padding="4vw" className="admin-add">
                <Box backgroundImage="linear-gradient(-45deg, #ffffff98, #ffffff09)" borderRadius="24px" backdropFilter="blur(30px)" padding="5vw">
                    <Flex width="100%" justifyContent="space-between" alignItems="flex-end">
                        <FormControl>
                            <FormLabel fontSize="1.5vw">Name of Event</FormLabel>
                            <Input 
                                type="text" outline="none" color="black"
                                backgroundColor="transparent" borderBottom="5px solid white"
                                onChange={(e:any) => {setName(e.target.value)}}    
                            >
                            </Input>
                        </FormControl>
                        <Select placeholder="Vertical" width="30vw" marginLeft="5vw" onChange={(e:any) => {setVertical(e.target.value)}}>
                            <option value="AEROFEST">AeroFest</option>
                            <option value="BIOGEN">Biogen</option>
                            <option value="BEVENTS">BEvents</option>
                            <option value="CL">Coding & Logic</option>
                            <option value="DB">Design & Build</option>
                            <option value="ELECFEST">ElecFest</option>
                            <option value="IGNITE">Ignite</option>
                            <option value="STRATEGISTS">Strategists</option>
                            <option value="WORKSHOPS">Workshops</option>
                        </Select>
                    </Flex>
                    <FormControl marginTop="4vh">
                        <FormLabel fontSize="1.5vw">Description</FormLabel>
                        <ReactMde
                        value={value}
                        onChange={setValue}
                        selectedTab={selectedTab}
                        onTabChange={setSelectedTab}
                        generateMarkdownPreview={markdown =>
                          {
                            setDesp(converter.makeHtml(markdown))
                            return(Promise.resolve(converter.makeHtml(markdown)))
                          }
                        }
                       ></ReactMde>
                    </FormControl>
                    <Flex width="100%">
                        <FormControl>
                            <FormLabel>Platform</FormLabel>
                            <Input type="text" outline="none" color="black"
                                backgroundColor="transparent" borderBottom="5px solid white"
                                onChange={(e:any) => {setPlatform(e.target.value)}}    
                            ></Input>
                        </FormControl>
                        <FormControl width="150%" marginLeft="2vw">
                            <FormLabel>Requirements</FormLabel>
                            <Input type="text" outline="none" color="black" 
                                backgroundColor="transparent" borderBottom="5px solid white"
                                onChange={(e:any) => {setReq(e.target.value)}}    
                            ></Input>
                        </FormControl>
                    </Flex>
                    <Flex width="100%">
                        <FormControl>
                            <FormLabel>Registration Start</FormLabel>
                            <Input type="datetime-local" outline="none" color="black"
                                backgroundColor="transparent" borderBottom="5px solid white"
                                onChange={(e:any) => {setRegStart(e.target.value)}} value={regStart}    
                            ></Input>
                        </FormControl>
                        <FormControl marginLeft="2vw">
                            <FormLabel>Registration End</FormLabel>
                            <Input type="datetime-local" outline="none" color="black" 
                                backgroundColor="transparent" borderBottom="5px solid white"
                                onChange={(e:any) => {setRegEnd(e.target.value)}}
                            ></Input>
                        </FormControl>
                    </Flex>
                    <Flex width="100%">
                        <FormControl>
                            <FormLabel>Event Start</FormLabel>
                            <Input type="datetime-local" outline="none" color="black"
                                backgroundColor="transparent" borderBottom="5px solid white"
                                onChange={(e:any) => {setEventStart(e.target.value)}}
                            ></Input>
                        </FormControl>
                        <FormControl marginLeft="2vw">
                            <FormLabel>Event End</FormLabel>
                            <Input type="datetime-local" outline="none" color="black" 
                                backgroundColor="transparent" borderBottom="5px solid white"
                                onChange={(e:any) => {setEventEnd(e.target.value)}}    
                            ></Input>
                        </FormControl>
                    </Flex>
                    <Flex>
                        <FormControl>
                            <FormLabel>Participation</FormLabel>
                            <Input type="text" outline="none" color="black"
                                backgroundColor="transparent" borderBottom="5px solid white"
                                onChange={(e:any) => {setParticipation(e.target.value)}}></Input>
                        </FormControl>
                        <FormControl marginLeft="2vw">
                            <FormLabel>First</FormLabel>
                            <Input type="text" outline="none" color="black"
                                backgroundColor="transparent" borderBottom="5px solid white"
                                onChange={(e:any) => {setFirst(e.target.value)}}></Input>
                        </FormControl>
                        <FormControl marginLeft="2vw">
                            <FormLabel>Second</FormLabel>
                            <Input type="text" outline="none" color="black"
                                backgroundColor="transparent" borderBottom="5px solid white"
                                onChange={(e:any) => {setSecond(e.target.value)}}></Input>
                        </FormControl>
                        <FormControl marginLeft="2vw">
                            <FormLabel>Third</FormLabel>
                            <Input type="text" outline="none" color="black"
                                backgroundColor="transparent" borderBottom="5px solid white"
                                onChange={(e:any) => {setThird(e.target.value)}}></Input>
                        </FormControl>
                    </Flex>
                    <Flex alignItems="center" justifyContent="space-between" width="100%" className="admin-team">
                        <FormControl color="black" marginTop="4vh">
                            <RadioGroup value={radio} onChange={(e :any) => {setRadio(e.target.value)}}>
                                <Radio value={RegistraionType.Individual} marginRight="2vw">Individual</Radio>
                                <Radio value={RegistraionType.Team}>Team</Radio>
                                <Radio value={RegistraionType.None}></Radio>
                            </RadioGroup>
                        </FormControl>
                        {
                            radio===RegistraionType.Team &&
                            <FormControl marginTop="4vh" width="10vw">
                                <FormLabel color="black">Team size</FormLabel>
                                <Input type="number" outline="none" color="black" 
                                    backgroundColor="transparent" borderBottom="5px solid white"
                                    onChange={(e:any) => {setTeamSize(e.target.value)}}    
                                ></Input>
                            </FormControl>
                        }
                    </Flex>
                    <Button marginTop="4vh" width="100%" backgroundColor="white" color="#0e101b"
                        onClick={async (e:any) => {
                            e.preventDefault();
                            await addEventMutation({
                                variables: {
                                    data: {
                                        name: name,
                                        description: desp,
                                        eventTimeFrom: eventStart,
                                        eventTimeTo: eventEnd,
                                        registrationType: radio,
                                        platform: platform,
                                        requirements: req,
                                        vertical: vertical,
                                        pic: "",
                                        finalistst: "",
                                        firstplace: first,
                                        participation: participation,
                                        secondplace: second,
                                        thirdplace: third,
                                        teamSize: teamSize,
                                        registrationCloseTime: regEn,
                                        registrationOpenTime: regStart
                                    }
                                }
                            })
                        }}
                    >Submit</Button>
                </Box>
            </Box>
            </Stack>
        </CustomBox>  
    )
}

export default EventAdmin